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
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '1层神君单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] * 1, 'a3')
}, {
  title: '10层神君单体伤害',
  check: ({ cons }) => cons < 6,
  dmgKey: 't',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'] * 10, 't')
}, {
  title: '10层神君单体伤害',
  check: ({ cons }) => cons >= 6,
  dmgKey: 't',
  dmg: ({ talent }, { dynamic }) => {
    const dynamicEnemydmg = 12
    let t1dmg = dynamic(talent.t['技能伤害'], 't')
    let t2dmg = dynamic(talent.t['技能伤害'], 't', { dynamicEnemydmg })
    let t3dmg = dynamic(talent.t['技能伤害'], 't', { dynamicEnemydmg: dynamicEnemydmg * 2 })
    let t4dmg = dynamic(talent.t['技能伤害'], 't', { dynamicEnemydmg: dynamicEnemydmg * 3 })
    return {
      dmg: t1dmg.dmg + t2dmg.dmg + t3dmg.dmg + t4dmg.dmg * 7,
      avg: t1dmg.avg + t2dmg.avg + t3dmg.avg + t4dmg.avg * 7
    }
  }
}]

export const defDmgKey = 't'
export const mainAttr = 'atk,cpct,cdmg,speed'
export const defParams = { technique: `${Technique}` }

export const buffs = [characterBuffSr,enemyBuffSr,
  {
    title: '景元2命：神君行动后，普攻战技及终结技的伤害提高20%',
    cons: 2,
    data: {
      aDmg: 20,
      eDmg: 20,
      qDmg: 20
    }
  }, {
    title: '景元6命：神君会使目标陷入易伤状态，使伤害提高12%，最多3层',
    cons: 6
  }, {
    title: '行迹-破阵：攻击段数大于等于6段，则其下回合的暴击伤害提高25%',
    tree: 1,
    data: {
      tCdmg: 25
    }
  }, {
    title: '行迹-遣将：施放战技后，暴击率提升10%',
    tree: 3,
    data: {
      cpct: 10
    }
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
