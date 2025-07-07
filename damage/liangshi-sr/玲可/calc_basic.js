import { LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.a['技能伤害'] * calc(attr.hp), 'a')
}, {
  title: '战技生命上限提升',
  dmgKey: 'e',
  dmg: ({ calc, attr, talent, cons }) => { return { avg: calc(attr.hp) * (talent.e['生命提高·百分比生命'] + (cons * 1 >= 6 ? 0.06 : 0)) + talent.e['生命提高·固定值'] } }
}, {
  title: '战技生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比'] + talent.e['治疗·固定值'])
}, {
  title: '终结技生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值'])
}, {
  title: '天赋生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.t['治疗·百分比生命'] + talent.t['治疗·固定值'])
}, {
  title: '天赋额外生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.t['额外治疗·百分比生命'] + talent.t['额外治疗·固定值'])
}, {
  check: ({ cons }) => cons >= 4,
  title: '4命目标攻击力提高',
  dmg: ({ calc, attr }) => { return { avg: calc(attr.hp) * 0.03 } }
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

export const defDmgKey = 'e'
export const mainAttr = 'atk,cpct,cdmg,hp'
export const defParams = { technique: `${Technique}` }

export const buffs = [[

]
]
