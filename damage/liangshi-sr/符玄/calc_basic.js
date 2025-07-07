import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [
  {
    title: '普攻伤害',
    dmg: ({ talent, calc, attr, cons }, { basic }) => {
      const zz = talent.a['技能伤害']
      const hp = calc(attr.hp)
      return basic((zz * hp), 'a')
    }
  }, {
    title: '战技提高生命上限值',
    dmg: ({ talent, attr, calc }) => {
      return {
        avg: calc(attr.hp) * talent.e['生命上限提高']
      }
    }
  }, {
    title: '战技提高暴击率',
    dmg: ({ talent }) => {
      return {
        avg: Format.percent(talent.e['暴击率提高']),
        type: 'text'
      }
    }
  }, {
    title: '终结技伤害',
    dmg: ({ talent, calc, attr, cons }, { basic }) => {
      const zz = talent.q['技能伤害']
      const hp = calc(attr.hp)
      return basic((zz * hp), 'q')
    }
  }, {
    title: '行迹生命恢复',
    dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 0.05 + 133)
  }
]

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    title: '太微行棋：生命值提高[hpPct]%,暴击率提高[cpct]%',
    data: {
      hpPct: ({ talent }) => talent.e['生命上限提高'] * 100,
      cpct: ({ talent }) => talent.e['暴击率提高'] * 100
    }
  }, {
    title: '符玄1命：暴击伤害提高[cdmg]%',
    cons: 1,
    data: {
      cdmg: 30
    }
  }, {
    title: '符玄6命：符玄施放终结技造成的伤害提高生命值的240%,提高[qPlus]点',
    cons: 6,
    data: {
      qPlus: ({ attr, calc }) => calc(attr.hp) * 2.4
    }
  },
  { title: '10.5最后修改：如有问题请输入 #伤害计算反馈' }
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
