export const details = [{
  title: '触发特效后生命值',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { GraceofKenosis: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发虚己之赐后攻击力',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '触发特效后护盾强效',
  params: { GraceofKenosis: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
}, {
  title: '[E]圣言默示·未现之光-释放伤害',
  params: { GraceofKenosis: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]光流屏障护盾量',
  params: { GraceofKenosis: true },
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent.e['护盾基础吸收量'] + calc(attr.atk) * talent.e['护盾附加吸收量'] / 100)
}, {
  title: '[E]虚己之赐-攻击力提升',
  params: { GraceofKenosis: false },
  check: ({ cons }) => cons < 2,
  dmg: ({ attr, calc,talent }) => {
    return {
      avg: Math.min(attr.atk * 0.01 * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1)
    }
  }
}, {
  title: '[E]圣祝之引-攻击力提升',
  params: { GraceofKenosis: false },
  check: ({ cons }) => cons < 2,
  dmg: ({ attr, calc,talent }) => {
    return {
      avg: 300 + Math.min(attr.atk * 0.01 * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1)
    }
  }
}, {
  title: '[E]虚己之赐-攻击力提升',
  params: { GraceofKenosis: false },
  check: ({ cons }) => cons > 1,
  dmg: ({ attr, calc,talent }) => {
    return {
      avg: 300 + Math.min(attr.atk * 0.01 * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1)
    }
  }
}, {
  title: '[E]圣祝之引-攻击力提升',
  params: { GraceofKenosis: false },
  check: ({ cons }) => cons > 1,
  dmg: ({ attr, calc,talent }) => {
    return {
      avg: 600 + Math.min(attr.atk * 0.01 * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1)
    }
  }
}, {
  title: '[E]圣言默示·天路历程-释放伤害',
  params: { GraceofKenosis: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}]

export const defParams = { Hexenzirkel: true }
export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,shield'

export const buffs = [{
  check: ({ params }) => params.GraceofKenosis === true,
  title: '虚己之赐：攻击力加成[atkPlus]点',
  data: {
    atkPlus: ({ attr, cons, talent }) => Math.min(attr.atk * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1),
    ehya: ({ attr, cons, talent }) => Math.min(attr.atk * talent.e['虚己之赐攻击力加成比例'], talent.e['虚己之赐攻击力加成上限'] * 1)
  }
}, {
  check: ({ params }) => params.GraceofKenosis === true,
  title: '2命：元素抗性降低25%，虚己之赐的攻击力额外加成[atkPlus]点',
  cons: 2,
  data: {
    atkPlus: 300,
    ehya: 300,
    kx: 25
  }
}, {
  check: ({ params }) => params.GraceofKenosis === true,
  title: '慕善：尼可自己拥有的虚己之赐将会升变为圣祝之引，攻击力额外加成[atkPlus]点',
  data: {
    atkPlus: 300
  }
}, {
  title: '4命：普通攻击、重击、下落攻击、元素战技与元素爆发造成的伤害提升[qPlus]点',
  cons: 4,
  data: {
    aPlus: ({ attr, cons, talent }) => attr.atk * 0.7,
    a2Plus: ({ attr, cons, talent }) => attr.atk * 0.7,
    a3Plus: ({ attr, cons, talent }) => attr.atk * 0.7,
    ePlus: ({ attr, cons, talent }) => attr.atk * 0.7,
    qPlus: ({ attr, cons, talent }) => attr.atk * 0.7
  }
},{
  title: '6命：无视敌人40%的防御力',
  cons: 6,
  data: {
    Ignore: 40
  }
}]

export const createdBy = 'Ehya_Calc'
