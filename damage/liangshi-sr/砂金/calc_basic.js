import { LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [
  {
    title: '普攻伤害',
    dmg: ({ talent, attr, calc }, { basic }) => basic(talent.a['技能伤害'] * calc(attr.def), 'a')
  }, {
    title: '战技护盾量',
    dmg: ({ attr, calc, talent }, { shield }) => shield(calc(attr.def) * talent.e['防御力百分比'] + talent.e['固定值'])
  }, {
    title: '终结技伤害',
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'], 'q')
  }, {
    title: '追加攻击伤害',
    dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.def) * talent.t['每段伤害'], 't')
  }
]

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,def'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '砂金秘技：[红黑之间] 战斗开始时我方防御力提高[defPct]%。',
    data: {
      defPct: ({ params }) => Math.min(60, (4 * Math.pow(params.technique, 3) - 18 * Math.pow(params.technique, 2) + 38 * params.technique))
    }
  }, {
    title: '砂金技能：[轮盘勋爵] 我方目标击中【惊惶】状态下的敌方目标时，造成的暴击伤害提高[cdmg]%',
    data: {
      cdmg: ({ talent }) => talent.q['暴击伤害提高']
    }
  }, {
    check: ({ calc, attr }) => calc(attr.def) >= 1600,
    title: '砂金行迹：[杠杆] 使自身暴击率提高[cpct]%',
    tree: 1,
    data: {
      cpct: ({ calc, attr }) => Math.min(48, (calc(attr.def) - 1600) / 100 * 2)
    }
  }, {
    title: '砂金1魂：[囚徒博弈] 持有【坚垣筹码】的我方目标暴击伤害提高[cdmg]%',
    cons: 1,
    data: {
      cdmg: 20
    }
  }, {
    title: '砂金2魂：[有限理性] 施放普攻时使目标的全属性抗性降低[kx]%',
    cons: 2,
    data: {
      kx: 12
    }
  }, {
    title: '砂金4魂：[意外****] 触发天赋的追加攻击时，会先使防御力提高[defPct]%',
    cons: 4,
    data: {
      defPct: 40
    }
  }, {
    title: '砂金6魂：[猎鹿游戏] [buffCount]个队友持有护盾，造成的伤害提高[dmg]%',
    cons: 6,
    data: {
      buffCount: ({ params }) => (params.play || 3),
      dmg: ({ params }) => Math.min(150, 50 * (params.play || 3))
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
