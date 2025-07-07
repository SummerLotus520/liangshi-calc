import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  check: ({ cons }) => cons < 6,
  dmgKey: 'q',
  title: '5层天赋持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['回合开始受到伤害'] * 5, 'dot', 'skillDot')
}, {
  check: ({ cons }) => cons === 6,
  dmgKey: 'q',
  title: '6命5层天赋持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['回合开始受到伤害'] * 1.15 * 5, 'dot', 'skillDot')
},
{  
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
}
]

export const defDmgKey = 'q'
export const mainAttr = 'atk,cpct,cdmg'
export const defParams = { technique: `${Technique}` }

export const buffs = [[
characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '桑博秘技：[你最闪亮] 主动攻击陷入目盲状态的敌人，进入战斗时使敌方每个单体目标行动延后25%。'
  },
{
    title: '惊喜礼盒：持续伤害提升[dotEnemydmg]%',
    data: {
      dotEnemydmg: ({ talent }) => talent.q['受持续伤害提高'] * 100
    }
  }
]
]
