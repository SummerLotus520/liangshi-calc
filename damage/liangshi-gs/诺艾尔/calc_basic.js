import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "诺艾尔"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 80, ShieldDetermine: true, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段`,
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
},
{
  title: `${TalentName.eName}启动伤害`,
  params: { HealNumber: 1, ShieldTime: 0.1 },
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.e['技能伤害'] * calc(attr.def) / 100 , 'e')
},
{
  title: `${TalentName.eName}盾量`,
  params: { HealNumber: 1, ShieldTime: 2 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['吸收量2'][0] * calc(attr.def) / 100 + talent.e['吸收量2'][1] * 1)
},
{
  title: `${TalentName.eName}单次治疗`,
  params: { HealNumber: 2, ShieldTime: 2 },
  dmg: ({ talent, calc, attr }, { heal }) => heal(talent.e['治疗量2'][0] * calc(attr.def) / 100 + talent.e['治疗量2'][1] * 1)
},
{
  title: `${TalentName.qName}挥砍伤害`,
  params: { Sweeping_Time: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ShieldTime: 6 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qNameT}后${TalentName.aName}一段`,
  params: { Sweeping_Time: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ShieldTime: 6, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后${TalentName.aName}四段`,
  params: { Sweeping_Time: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, NormalUse: 4, NormalHit: 4, NormalDmg: 4, ShieldTime: 6, NormalElement: 4 },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后${TalentName.a2Name}`,
  params: { Sweeping_Time: true, ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, BurstUse: 1, BurstHit: 1, BurstDmg: 1, ShieldTime: 6 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击循环伤害'], 'a2')
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
]
