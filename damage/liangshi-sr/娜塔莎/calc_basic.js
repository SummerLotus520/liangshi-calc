import { LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
}, {
  title: '战技持续恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['复活·百分比生命'] + talent.e['复活·固定值'])
}, {
  title: '终结技生命恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['复活·百分比生命'] + talent.e['复活·固定值'])
}, {
  params: { fa: true },
  title: '天赋强化战技恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
}, {
  params: { fa: true },
  title: '天赋强化战技持续恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['复活·百分比生命'] + talent.e['复活·固定值'])
}, {
  params: { fa: true },
  title: '天赋强化终结技恢复',
  dmg: ({ calc, attr, talent }, { heal }) => heal(calc(attr.hp) * talent.e['复活·百分比生命'] + talent.e['复活·固定值'])
}]

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '娜塔莎秘技：[催眠研习] 进入战斗后对敌方全体造成物理属性伤害，并有100%的基础概率使敌方每个单体目标陷入虚弱状态。'
  }, {
    title: '行迹-医者：治疗量提高10%',
    tree: 1,
    data: {
      heal: 15
    }
  }, {
    title: '娜塔莎天赋：对生命值小于30%的目标治疗量提高[xq]%',
    data: {
      heal: ({ params, talent }) => params.fa ? (talent.t['治疗量提高'] * 100) : 0,
      xq: ({ talent }) => talent.t['治疗量提高'] * 100
    }
  },
  { title: '6.16最后修改：如有问题请输入 #伤害计算反馈' }
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
