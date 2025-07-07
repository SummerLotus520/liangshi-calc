import { LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '强化普攻伤害',
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    const zy = talent.a2['攻击倍率']
    const zz = talent.a2['生命倍率']
    const hp = calc(attr.hp)
    const atk = calc(attr.atk)
    return basic((zy * atk) + (zz * hp), 'a')
  }
}, {
  title: '强化普攻相邻伤害',
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    const zy = talent.a2['攻击倍率·相邻目标']
    const zz = talent.a2['生命倍率·相邻目标']
    const hp = calc(attr.hp)
    const atk = calc(attr.atk)
    return basic((zy * atk) + (zz * hp), 'a')
  }
}, {
  title: '满buff终结技伤害',
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    const zy = talent.q['攻击倍率']
    const zz = talent.q['生命倍率']
    const ss = talent.q['已损失生命值倍率']
    const hp = calc(attr.hp)
    const atk = calc(attr.atk)
    return basic((zy * atk) + (zz * hp) + (ss * hp * 0.9), 'q')
  }
}, {
  title: '满buff终结技相邻伤害',
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    const zy = talent.q['攻击倍率·相邻目标']
    const zz = talent.q['生命倍率·相邻目标']
    const ss = talent.q['已损失生命值倍率·相邻目标']
    const hp = calc(attr.hp)
    const atk = calc(attr.atk)
    return basic((zy * atk) + (zz * hp) + (ss * hp * 0.9), 'q')
  }
}, {
  title: '天赋追击伤害',
  dmg: ({ talent, calc, attr, cons }, { basic }) => {
    const zy = talent.t['攻击倍率']
    const ss = talent.t['生命倍率']
    const hp = calc(attr.hp)
    const atk = calc(attr.atk)
    return basic((zy * atk) + (ss * hp), 't')
  }
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
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [[
characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '刃秘技：[极速收割] 进入战斗后消耗生命值对敌方全体造成风属性伤害。'
  },
{
    title: '刃天赋：释放战技后造成的伤害提高[dmg]%',
    data: {
      dmg: ({ talent }) => talent.e['伤害提高'] * 100
    }
  },
{
    title: '刃1命：终结技能造成的伤害提高90%生命值',
    cons: 1,
    data: {
      qPlus: ({ attr, calc }) => calc(attr.hp) * 0.9
    }
  },
{
    title: '刃2命：释放元素战技后暴击率提升15%',
    cons: 2,
    data: {
      cpct: 15
    }
  },
{
    title: '刃4命：生命值上限提升40%',
    cons: 4,
    data: {
      hpPct: 40
    }
  },
{
    title: '刃6命：天赋造成的伤害值提升',
    cons: 6,
    data: {
      tPlus: ({ attr, calc }) => calc(attr.hp) * 0.5
    }
  },
{
    title: '行迹-坏劫****：天赋造成的伤害提高20%',
    tree: 3,
    data: {
      tDmg: 20
    }
  }
]
]
