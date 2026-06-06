export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.mastery > 99) {
    return rule('布伦妮-反应', { atk: 75, cpct: 100, cdmg: 100, dmg: 100 , recharge: 50, mastery: 75})
  }
  if (attr.mastery < 100) {
    return rule('布伦妮-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100 , recharge: 50, mastery: 0})
  }
  return def({ hp: 100, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, phy: 0, recharge: 30, heal: 0 })
}
