export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
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
  title: '[E]叮铃铃·猎魔之音-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['叮铃铃·猎魔之音伤害'], 'e')
}, {
  title: '[E]咚锵锵·裁魔之惩-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['咚锵锵·裁魔之惩伤害'], 'e')
}, {
  title: '[Q]诱巫饵铃-释放伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]诱巫饵铃-单次伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['诱巫饵铃伤害'], 'q')
},{
  title: '[T]振铃同心-提升队友伤害',
  dmgKey: 'AE',
  dmg: ({ calc, attr }) => {
    return {
      avg: Math.round(Math.min((calc(attr.atk) - 2000) * 0.025, 50) * 100) / 100 + "%",
      type: 'text'
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'
export const defParams = { Hexenzirkel: true }

export const buffs = [{
  title: '魔女的前夜礼·寻魔之誓：攻击力提升[atkPct]%',
  data: {
    atkPct: 90
  }
}, {
  title: '2命：攻击力提升[atkPct]%',
  cons: 2,
  data: {
    atkPct: 40
  }
}, {
  title: '6命：攻击力提升[atkPlus]点',
  cons: 6,
  data: {
    atkPlus: 350
  }
}]

export const createdBy = 'Ehya_Calc'