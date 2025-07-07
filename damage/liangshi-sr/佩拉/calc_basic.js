import { LSconfig } from '#liangshi'
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
  params: { zhui: true },
  title: '战技后战技',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  params: { zhui: true },
  title: 'E后普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  params: { ling: true },
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  params: { ling: true, zhui: true },
  title: 'E后终结技',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  params: { ling: true },
  title: '终结技后普攻',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  params: { ling: true, zhui: true },
  title: 'EQ后普攻',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  params: { ling: true },
  title: '终结技后战技',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
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

export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '佩拉秘技：[先发制人] 进入战斗后对敌方全体造成冰属性伤害，同时使敌方每个单体目标防御力降低[enemyDef]%。',
    data: {
      enemyDef: 20
    }
  }, {
    title: '佩拉终结技：释放终结技降低敌方防御[xq]%',
    data: {
      enemyDef: ({ params, talent }) => params.ling ? (talent.q['防御力降低'] * 100) : 0,
      xq: ({ talent }) => talent.q['防御力降低'] * 100
    }
  }, {
    title: '行迹-痛击：对处于负面状态的敌人造成的伤害提升[dmg]%',
    tree: 1,
    data: {
      dmg: 20
    }
  }, {
    title: '行迹-追歼：解除增益效果后造成的伤害提升[dmg]%',
    tree: 2,
    data: {
      dmg: ({ params }) => params.zhui ? 20 : 0
    }
  }, {
    title: '行迹-秘策：命中效果提升[effPct]%',
    tree: 3,
    data: {
      effPct: 10
    }
  },
  { title: '7.13最后修改：如有问题请输入 #伤害计算反馈' }
]
