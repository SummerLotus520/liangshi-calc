import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "白术"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { LiyueTeammate: 1, GrassAttachment: true, ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 80, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true, ShieldDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'spread')
},
{
  title: `${TalentName.eName}治疗量`,
  params: { HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.e['治疗量2'][0] * calc(attr.hp) / 100 + talent.e['治疗量2'][1] * 1)
},
{
  check: ({ cons }) => cons >= 2,
  title: '游丝徵灵·切激化',
  dmg: ({ talent, attr, calc }, { basic }) => basic((calc(attr.atk) * 250 / 100), 'e', 'spread')
},
{
  title: `${TalentName.qName}伤害`,
  params: { ShieldTime: 1.25, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['灵气脉技能伤害'], 'q')
},
{
  title: `${TalentName.qName}激化`,
  dmgKey: 'q',
  params: { ShieldTime: 1.25, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['灵气脉技能伤害'], 'q', 'spread')
},
{
  title: '无郤气护盾吸收量',
  params: { ShieldTime: 1.25, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent, calc, attr }, { shield }) => shield((talent.q['无郤气护盾吸收量2'][0] * calc(attr.hp) / 100 + talent.q['无郤气护盾吸收量2'][1] * 1) * 1 )
},
{
  title: '无郤气护盾治疗量',
  params: { ShieldTime: 1.25, BurstUse: 1, BurstHit: 2, BurstDmg: 2, HealNumber: 2 },
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['无郤气护盾治疗量2'][0] * calc(attr.hp) / 100 + talent.q['无郤气护盾治疗量2'][1] * 1 )
},
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