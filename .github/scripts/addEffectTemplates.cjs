const fs = require('fs');
const path = require('path');

const rootDirs = [
  'damage/liangshi-gs',
  'damage/liangshi-sr'
];

const gsTemplate = `{ 
  title: '触发特效后生命值', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.hp) * 1) }) 
}, { 
  title: '触发特效后攻击力', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.atk) * 1) }) 
}, { 
  title: '触发特效后防御力', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.def) * 1) }) 
}, { 
  title: '触发特效后暴击率', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) }) 
}, { 
  title: '触发特效后暴击伤害', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) }) 
}, { 
  title: '触发特效后元素精通', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.mastery) * 1) }) 
}, { 
  title: '触发特效后充能效率', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) }) 
}, { 
  title: '触发特效后治疗加成', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) }) 
}, { 
  title: '触发特效后护盾强效', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.shield) * 1) }) 
}, { 
  title: '当前圣遗物套装', 
  dmg: ({ artis }) => ({ avg: artis, type: 'text' }) 
}`;

const srTemplate = `{ 
  title: '触发特效后生命值', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.hp) * 1) }) 
}, { 
  title: '触发特效后攻击力', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.atk) * 1) }) 
}, { 
  title: '触发特效后防御力', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.def) * 1) }) 
}, { 
  title: '触发特效后速度', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) }) 
}, { 
  title: '触发特效后暴击率', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) }) 
}, { 
  title: '触发特效后暴击伤害', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) }) 
}, { 
  title: '触发特效后击破特攻', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) }) 
}, { 
  title: '触发特效后效果命中', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) }) 
}, { 
  title: '触发特效后效果抵抗', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) }) 
}, { 
  title: '触发特效后充能效率', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) }) 
}, { 
  title: '触发特效后治疗加成', 
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) }) 
}, { 
  title: '当前遗器套装', 
  dmg: ({ artis }) => ({ avg: artis, type: 'text' }) 
}`;

let patchedChars = [];

function checkAndPatch(filePath, isGs, charName) {
  let code = fs.readFileSync(filePath, 'utf8');

  if (code.includes('触发特效后生命值')) {
    return false;
  }

  const detailsStart = code.indexOf('details = [');
  if (detailsStart === -1) return false;

  let bracketCount = 0;
  let insertPos = -1;
  for (let i = detailsStart; i < code.length; i++) {
    if (code[i] === '[') bracketCount++;
    else if (code[i] === ']') bracketCount--;
    if (bracketCount === 0) {
      insertPos = i;
      break;
    }
  }

  if (insertPos === -1) return false;

  const insertContent = ',\n' + (isGs ? gsTemplate : srTemplate) + '\n';
  const newCode = code.slice(0, insertPos) + insertContent + code.slice(insertPos);

  fs.writeFileSync(filePath, newCode, 'utf8');
  patchedChars.push((isGs ? 'GS' : 'SR') + '：' + charName);
  console.log(`✔ 补充模板：${filePath}`);
  return true;
}

for (const dir of rootDirs) {
  const fullDirPath = path.resolve(dir);
  if (!fs.existsSync(fullDirPath)) continue;

  const isGs = dir.includes('liangshi-gs');

  const chars = fs.readdirSync(fullDirPath).filter(d => {
    return fs.statSync(path.join(fullDirPath, d)).isDirectory();
  });

  for (const charName of chars) {
    const jsFile = path.join(fullDirPath, charName, 'calc_basic.js');
    if (fs.existsSync(jsFile)) {
      checkAndPatch(jsFile, isGs, charName);
    }
  }
}

fs.writeFileSync('.patched-characters.txt',
  patchedChars.length > 0
    ? '以下角色已添加特效模板：\n' + patchedChars.join('\n')
    : '所有角色已存在特效模板，无需补充。\n'
);
