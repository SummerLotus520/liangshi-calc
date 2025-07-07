import { LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '门前清伤害',
  params: { lao: false, ting: false, yu: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['门前清·伤害'], 'a')
}, {
  title: '满层E 杠伤害',
  params: { lao: true, ting: true, yu: true },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·伤害'], 'a')
}, {
  title: '满层E 杠相邻伤害',
  params: { lao: true, ting: true, yu: true },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·相邻目标伤害'], 'a')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,effPct'
export const defParams = { technique: `${Technique}` }

export const buffs = [[
characterBuffSr,enemyBuffSr,
  {
    title: '海底捞月：使用战技提高造成的伤害[xq]%',
    data: {
      aDmg: ({ params, talent }) => params.lao ? (talent.e['伤害提高'] * 100 * 4) : 0,
      xq: ({ talent }) => talent.e['伤害提高'] * 100 * 4
    }
  },
{
    title: '青雀天赋：处于暗杠状态提升攻击力[xq]%',
    data: {
      atk: ({ params, talent }) => params.yu ? (talent.t['攻击力提高'] * 100) : 0,
      xq: ({ talent }) => talent.t['攻击力提高'] * 100
    }
  },
{
    title: '行迹-听牌：使用战技提高造成的伤害额外提升[xq]%',
    data: {
      aDmg: ({ params }) => params.ting ? 10 : 0,
      xq: 10
    }
  },
{
    title: '青雀1命：终结技造成的伤害提升[qDmg]%',
    tree: 1,
    data: {
      qDmg: 10
    }
  }
]
]
