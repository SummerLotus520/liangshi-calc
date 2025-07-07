import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [
  {
    title: '普攻伤害',
    dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
  }, {
    title: '战技伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['单体伤害'], 'e')
  }, {
    title: '战技持续伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['持续伤害'], 'dot', 'skillDot')
  }, {
    title: '终结技伤害',
    dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
  }, {
    title: 'Q后战技主目标',
    params: { e: true },
    dmg: ({ talent }, dmg) => dmg(talent.e2['技能伤害'], 'e')
  }, {
    title: 'Q后战技相邻目标',
    params: { e: true },
    dmg: ({ talent }, dmg) => dmg(talent.e2['相邻目标伤害'], 'e')
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

export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '虎克秘技：[嘿！记得虎克吗] 进入战斗后对敌方随机单体造成火属性伤害，同时有100%的基础概率使敌方每个单体目标陷入灼烧状态。'
  }, {
    check: ({ params }) => params.e === true,
    title: '虎克1魂：[早睡早起很健康] 战技强化后造成的伤害提高[eDmg]%',
    cons: 1,
    data: {
      eDmg: 20
    }
  }, {
    title: '虎克4魂：[随时准备打坏人] 对灼烧状态下的敌方目标造成的伤害提高[dmg]%',
    cons: 4,
    data: {
      dmg: 20
    }
  },
  { title: '4.15最后修改：如有问题请输入 #伤害计算反馈' }
]
