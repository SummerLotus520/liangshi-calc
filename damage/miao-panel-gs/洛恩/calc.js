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
  title: '[E后A]奇谋-一段伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['一段伤害'], 'a')
}, {
  title: '[E后A]奇谋-二段伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['二段伤害'], 'a')
}, {
  title: '[E后A]奇谋-三段伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['三段伤害'], 'a')
}, {
  title: '[E后A]奇谋-四段伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['四段伤害'], 'a')
}, {
  title: '[E后A]奇谋-五段伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['五段伤害'], 'a')
}, {
  title: '[E后A]奇谋-重击伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['重击伤害'], 'a2')
}, {
  title: '[E-争胜:0]镂骨彻心-伤害',
  params: { WilltoWin: 0 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'], 'e')
}, {
  title: '[E-争胜:50]镂骨彻心-伤害',
  params: { WilltoWin: 50 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e')
}, {
  title: '[E-争胜:100]镂骨彻心-伤害',
  check: ({ cons }) => cons === 0,
  params: { WilltoWin: 100 },
  dmgKey: 'AE',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e')
}, {
  title: '[E-争胜:100]镂骨彻心-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e')
}, {
  title: '[E-争胜:200]镂骨彻心-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 200 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e')
}, {
  title: '[E-争胜:300]镂骨彻心-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 300 },
  dmgKey: 'AE',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e')
} ,{
  title: '[Q-争胜:0]裁罚遂成-伤害',
  params: { WilltoWin: 0 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q-争胜:50]裁罚遂成-伤害',
  params: { WilltoWin: 50 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q')
}, {
  title: '[Q-争胜:100]裁罚遂成-伤害',
  check: ({ cons }) => cons === 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q')
}, {
  title: '[Q-争胜:100]裁罚遂成-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q')
}, {
  title: '[Q-争胜:200]裁罚遂成-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 200 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q')
}, {
  title: '[Q-争胜:300]裁罚遂成-伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 300 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q')
}, {
  title: '[E后A]奇谋-一段融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['一段伤害'], 'a', 'melt')
}, {
  title: '[E后A]奇谋-二段融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['二段伤害'], 'a', 'melt')
}, {
  title: '[E后A]奇谋-三段融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['三段伤害'], 'a', 'melt')
}, {
  title: '[E后A]奇谋-四段融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['四段伤害'], 'a', 'melt')
}, {
  title: '[E后A]奇谋-五段融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['五段伤害'], 'a', 'melt')
}, {
  title: '[E后A]奇谋-重击融化伤害',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['重击伤害'], 'a2', 'melt')
}, {
  title: '[E-争胜:0]镂骨彻心-融化伤害',
  params: { WilltoWin: 0 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'], 'e', 'melt')
}, {
  title: '[E-争胜:50]镂骨彻心-融化伤害',
  params: { WilltoWin: 50 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e', 'melt')
}, {
  title: '[E-争胜:100]镂骨彻心-融化伤害',
  check: ({ cons }) => cons === 0,
  params: { WilltoWin: 100 },
  dmgKey: 'AE',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e', 'melt')
}, {
  title: '[E-争胜:100]镂骨彻心-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e', 'melt')
}, {
  title: '[E-争胜:200]镂骨彻心-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 200 },
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e', 'melt')
}, {
  title: '[E-争胜:300]镂骨彻心-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 300 },
  dmgKey: 'AE',
  dmg: ({ talent,params }, dmg) => dmg(talent.e['镂骨彻心伤害'] * (1 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'e', 'melt')
} ,{
  title: '[Q-争胜:0]裁罚遂成-融化伤害',
  params: { WilltoWin: 0 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'], 'q', 'melt')
}, {
  title: '[Q-争胜:50]裁罚遂成-融化伤害',
  params: { WilltoWin: 50 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q', 'melt')
}, {
  title: '[Q-争胜:100]裁罚遂成-融化伤害',
  check: ({ cons }) => cons === 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q', 'melt')
}, {
  title: '[Q-争胜:100]裁罚遂成-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 100 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q', 'melt')
}, {
  title: '[Q-争胜:200]裁罚遂成-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 200 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q', 'melt')
}, {
  title: '[Q-争胜:300]裁罚遂成-融化伤害',
  check: ({ cons }) => cons > 0,
  params: { WilltoWin: 300 },
  dmg: ({ talent,params }, dmg) => dmg(talent.q['技能伤害'] * (1 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100), 'q', 'melt')
}]

export const defParams = { WilltoWin: 0, Hexenzirkel: true }
export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'

export const buffs = [
  {
    title: '争胜：当前[_WilltoWin]层争胜，元素战技镂骨彻心造成原本[_eDmg]%的伤害,元素爆发造成原本[_qDmg]%的伤害',
    data: {
      _WilltoWin: ({ params }) => params.WilltoWin,
      _eDmg: ({ talent, params }) => 100 + talent.e['每点争胜提升原本伤害'] * params.WilltoWin / 100,
      _qDmg: ({ talent, params }) => 100 + talent.q['每点争胜提升原本伤害'] * params.WilltoWin / 100
    }
  }, {
    check: ({ params }) => params.WilltoWin > 0,
    title: '戏言的杰作：攻击力提升[atkPct]%',
    data: {
      atkPct: 15
    }
  }, {
    check: ({ params, cons }) => params.WilltoWin >= 50 && cons < 0,
    title: '魔女的前夜礼·不愈之刺：普通攻击与重击造成的伤害提升[aDmg]%',
    data: {
      aDmg: 40,
      a2Dmg: 40
    }
  }, {
    check: ({ params, cons }) => params.WilltoWin >= 150 && cons > 0,
    title: '魔女的前夜礼·不愈之刺：普通攻击与重击造成的伤害提升[aDmg]%',
    data: {
      aDmg: 40,
      a2Dmg: 40
    }
  }, {
    check: ({ params }) => params.WilltoWin > 0,
    title: '6命：镂骨彻心，裁罚遂成暴击伤害提升[eCdmg]%',
    cons: 6,
    data: {
      eCdmg: 175,
      qCdmg: 175
    }
  }
]

export const createdBy = 'Ehya_Calc'
