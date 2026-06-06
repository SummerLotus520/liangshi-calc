export default function ({ attr, artis, rule, def }) {
  if ( attr.mastery >= 80 ) {
    return rule('洛恩-融化', { atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100 , recharge: 30 })
  }
  if ( attr.cpct > 1) {
    return rule('洛恩-直伤', { atk: 85, cpct: 100, cdmg: 100, dmg: 100, recharge: 300 })
  }
  return def({ atk: 100, cpct: 100, cdmg: 100, mastery: 0, dmg: 100, recharge: 0 })
}
