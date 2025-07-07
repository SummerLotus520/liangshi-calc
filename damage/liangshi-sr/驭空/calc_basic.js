import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q后普攻伤害',
  params: { guan: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '鸣弦号令攻击力提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.e['攻击力提高']),
      type: 'text'
    }
  }
}, {
  title: '鸣弦号令暴击率提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['暴击率提高']),
      type: 'text'
    }
  }
}, {
  title: '鸣弦号令暴击伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['暴击伤害提高']),
      type: 'text'
    }
  }
}]

export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    title: '天阙鸣弦：释放战技提高攻击力[atkPlus]%',
    data: {
      atkPlus: ({ talent }) => talent.e['攻击力提高'] * 100
    }
  }, {
    title: '贯云饮羽：释放终结技提高暴击率暴击伤害',
    data: {
      cpct: ({ params, talent }) => params.guan ? (talent.q['暴击率提高'] * 100) : 0,
      cdmg: ({ params, talent }) => params.guan ? (talent.q['暴击伤害提高'] * 100) : 0
    }
  }, {
    title: '驭空4命：驭空造成的伤害提高[dmg]%',
    cons: 4,
    data: {
      dmg: 30
    }
  }, {
    title: '行迹-迟彝：驭空在场时造成的虚数伤害提高[dmg]%',
    tree: 1,
    data: {
      dmg: 12
    }
  },
  { title: '10.14最后修改：如有问题请输入 #伤害计算反馈' }
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
