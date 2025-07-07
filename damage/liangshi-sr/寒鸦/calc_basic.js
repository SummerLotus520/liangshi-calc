import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [
  {
    title: '普攻伤害',
    dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
  }, {
    title: 'E后普攻伤害',
    params: { e: true },
    dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
  }, {
    title: 'Q后普攻伤害',
    params: { q: true },
    dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
  }, {
    title: 'QE后普攻伤害',
    params: { e: true, q: true },
    dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
  }, {
    title: '战技伤害',
    params: { e: true },
    dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
  }, {
    title: 'Q后战技伤害',
    params: { e: true, q: true },
    dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
  }, {
    title: '终结技Buff攻击力提高',
    dmg: ({ talent }) => {
      return {
        avg: Format.percent(talent.q['攻击力提高']),
        type: 'text'
      }
    }
  }
,
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

export const defDmgIdx = 5
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [[
characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.q === true,
    title: '寒鸦技能：[十王敕令，遍土遵行] 使我方角色速度提高[speedPlus]攻击力提高[atkPct]%',
    data: {
      speedPlus: ({ talent, attr }) => talent.q['速度提高'] * 100 * attr.speed,
      atkPct: ({ talent }) => talent.q['攻击力提高'] * 100
    }
  },
{
    check: ({ params }) => params.e === true,
    title: '寒鸦天赋：[罚恶] 对陷入【承负】状态下的敌人释放普攻、战技、终结技时,造成的伤害提高[dmg]%',
    data: {
      dmg: ({ talent }) => talent.t['伤害提高'] * 100
    }
  },
{
    check: ({ params }) => params.e === true,
    title: '寒鸦行迹：[录事] 触发【承负】战技点回复效果的我方单位攻击力提高[atkPct]%',
    trees: 1,
    data: {
      atkPct: 10
    }
  },
{
    check: ({ params }) => params.e === true,
    title: '寒鸦行迹：[还阳] 当【承负】战技点恢复效果被触发时，自身恢复[_energyevery]点能量',
    trees: 3,
    data: {
      _energyevery: 2
    }
  },
{
    check: ({ params }) => params.e === true,
    title: '寒鸦2魂：[二观] 释放战技后，速度提高[speedPct]%',
    cons: 2,
    data: {
      speedPct: 20
    }
  },
{
    check: ({ params }) => params.e === true,
    title: '寒鸦6魂：[六正] 天赋的伤害提高效果额外提高[speedPct]%',
    cons: 6,
    data: {
      dmg: 10
    }
  }
]
]
