export const details = [
  {
    title: "[A]普攻伤害",
    dmg: ({ talent }, dmg) => dmg(talent.a["目标伤害"], "a")
  }, {
    title: "[E]战技伤害(3目标)",
    dmg: ({ talent }, dmg) => dmg(talent.e["目标伤害"] + talent.e["相邻目标伤害"] * 2, "e")
  }, {
    title: "[Q]终结技伤害(全体+随机单体)",
    dmg: ({ talent, cons }, dmg) => {
      let extraHits = cons >= 6 ? 4 : 0
      let totalDmg = talent.q["欢愉伤害"] + talent.q["欢愉伤害·随机单体"] * (5 + extraHits)
      return dmg(totalDmg, "q")
    }
  }, {
    title: "[T]欢愉伤害·战技",
    dmg: ({ talent }, { elation }) => elation(talent.t["欢愉伤害·目标"])
  }, {
    title: "[T]欢愉伤害·终结技(全体+随机单体)",
    dmg: ({ talent, cons }, { elation }) => {
      let extraHits = cons >= 6 ? 4 : 0
      let totalDmg = talent.t["欢愉伤害"] + talent.t["欢愉伤害·随机单体"] * (5 + extraHits)
      return elation(totalDmg)
    }
  }, {
    title: "[T]狐狸老师伤害",
    dmg: ({ talent }, { elation }) => elation(talent.t["欢愉伤害·狐狸老师"])
  }, {
    title: "欢愉技伤害",
    dmg: ({ talent }, { elation }) => elation(talent.j["欢愉伤害"])
  }
]

export const defDmgIdx = 4
export const mainAttr = "atk,cpct,cdmg"

export const buffs = [
  {
    title: "行迹-瞰众乐：绯英的暴击率提高30%",
    data: {
      cpct: 30
    }
  }, {
    title: "行迹-行裁断：【狐狸老师】施放攻击使目标受到的伤害提高[enemydmg]%",
    data: {
      enemydmg: 12
    }
  }, {
    title: "天赋-青春•韶华无限：绯英获得等同于暴击伤害25%的欢愉度",
    sort: 9,
    data: {
      elation: ({ attr, calc }) => calc(attr.cdmg) * 0.25
    }
  }, {
    title: "1命：全属性穿透提高[kx]%",
    cons: 1,
    data: {
      kx: 20
    }
  }, {
    title: "2命：欢愉度提高[elation]%",
    cons: 2,
    data: {
      elation: 25
    }
  }, {
    title: "4命：绯英造成的伤害无视敌方目标[ignore]%的防御力",
    cons: 4,
    data: {
      ignore: 15
    }
  }, {
    title: "6命：绯英造成的欢愉伤害增笑[elationMerrymake]%",
    cons: 6,
    data: {
      elationMerrymake: 25
    }
  }
]
