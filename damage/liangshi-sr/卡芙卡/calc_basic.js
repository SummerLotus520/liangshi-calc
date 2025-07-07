import { Format, LSconfig } from '#liangshi'
import { characterBuffSr, enemyBuffSr } from '../../../resources/CalcBuff/index.js'

let cfg = LSconfig.getConfig('user', 'config')
let Technique = cfg.technique

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技主目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['单体伤害'], 'e')
}, {
  title: '战技相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '天赋追加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['追加伤害'], 't')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'e')
}, {
  title: '触电战技结算伤害',
  dmg: ({ talent, cons }, dmg) => {
    let plusDot = cons >= 6 ? 1.56 : 0
    let cxsh1 = dmg((talent.q['回合持续伤害'] + plusDot) * talent.e['额外持续伤害'], 'dot', 'skillDot')
    return {
      avg: cxsh1.avg
    }
  }
}, {
  title: '触电伤害',
  dmg: ({ talent, cons }, dmg) => {
    let plusDot = cons >= 6 ? 1.56 : 0
    let cx = dmg((talent.q['回合持续伤害'] + plusDot) * talent.q['额外持续伤害'], 'dot', 'skillDot')
    return {
      avg: cx.avg
    }
  }
}, {
  title: '触电持续伤害',
  dmg: ({ talent, cons }, dmg) => {
    let plusDot = cons >= 6 ? 1.56 : 0
    let cxsh = dmg((talent.q['回合持续伤害'] + plusDot), 'dot', 'skillDot')
    return {
      avg: cxsh.avg
    }
  }
}]

export const defDmgIdx = 5
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    check: ({ params }) => params.technique >= 1,
    title: '卡芙卡秘技：[宽恕无关慈悲] 进入战斗后对敌方全体造成雷属性伤害，同时有100%的基础概率使敌方每个单体目标陷入与终结技相同的触电状态。'
  }, {
    title: '卡芙卡1命：目标受到的持续伤害提高30%',
    cons: 1,
    data: {
      dotEnemyDmg: 30
    }
  }, {
    title: '卡芙卡2命：我方全体造成的持续伤害提高25%',
    cons: 2,
    data: {
      dotDmg: 25
    }
  }, {
    title: '卡芙卡6命：触电的天赋倍率提升156%',
    cons: 6
  },
  { title: '2.19最后修改：如有问题请输入 #伤害计算反馈' }
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
