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

function patchDetails(code, isGs, filePath) {
  if (code.includes('触发特效后生命值')) return null;

  const match = code.match(/export\s+const\s+details\s*=\s*\[/);
  if (!match) {
    console.log(`未找到 export const details = [，跳过：${filePath}`);
    return null;
  }

  let startIdx = match.index + match[0].length - 1;
  let bracketCount = 1;
  let endIdx = startIdx;

  while (bracketCount > 0 && endIdx < code.length) {
    endIdx++;
    if (code[endIdx] === '[') bracketCount++;
    else if (code[endIdx] === ']') bracketCount--;
  }

  if (bracketCount !== 0) {
    console.log(`括号不匹配，跳过：${filePath}`);
    return null;
  }

  const insertContent = ',\n' + (isGs ? gsTemplate : srTemplate) + '\n';
  return code.slice(0, endIdx) + insertContent + code.slice(endIdx);
}

function checkAndPatch(filePath, isGs, charName) {
  let code = fs.readFileSync(filePath, 'utf8');
  const patched = patchDetails(code, isGs, filePath);
  if (!patched) return false;

  fs.writeFileSync(filePath, patched, 'utf8');
  patchedChars.push((isGs ? 'GS' : 'SR') + '：' + charName);
  console.log(`✔ 补充模板：${filePath}`);
  return true;
}

for (const dir of rootDirs) {
  const fullDirPath = path.resolve(dir);
  if (!fs.existsSync(fullDirPath)) continue;

  const isGs = dir.includes('liangshi-gs');

  const chars = fs.readdirSync(fullDirPath).filter(d =>
    fs.statSync(path.join(fullDirPath, d)).isDirectory()
  );

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
