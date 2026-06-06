export default function ({ attr, weapon, rule, def, artis }) {
  if (attr.mastery < 120 && artis.is('cpct', 5)) {
    return rule('尼可-常规', { atk: 75, def:0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 55})
  }
  if (attr.mastery < 120 && artis.is('cdmg', 5)) {
    return rule('尼可-常规', { atk: 75, def:0, cpct: 100, cdmg: 100, mastery: 0, dmg: 100 , recharge: 55})
  }
  if (attr.mastery < 8000 && artis.is('atk', 5)) {
    return rule('尼可-辅助', { atk: 100, def:0, cpct: 0, cdmg: 0, mastery: 0, dmg: 0, recharge: 100})
  }
  if (attr.mastery < 8000) {
    return def({atk: 75, cpct: 100, cdmg: 100, mastery: 75, dmg: 100, recharge: 55})
  }
}
