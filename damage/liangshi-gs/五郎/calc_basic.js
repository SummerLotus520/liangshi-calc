import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "五郎"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段伤害`,
  dmgKey: 'a',
  params: { phy: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
},
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, Generals_War_Banner: true, Generals_Glory: true },
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.q['技能伤害'] * calc(attr.def) / 100 , 'q')
},
{
  title: `${TalentName.qName}每跳伤害`,
  params: ({ cons }) => ({ BurstUse: 1, BurstHit: 3, BurstDmg: 3, Generals_War_Banner: true , Generals_Glory: true, HealNumber: cons >= 4 ? 2 : 0, HealTeamDetermine: cons >= 4 ? true : false, HealDetermine: cons >= 4 ? true : false }),
  dmgKey: 'q',
  dmg: ({ talent, attr, calc }, { basic }) => basic(talent.q['岩晶崩破伤害'] * calc(attr.def) / 100 , 'q')
},
{
  check: ({ cons }) => cons >= 4,
  title: `${TalentName.qName}每跳治疗`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, Generals_War_Banner: true , Generals_Glory: true, HealNumber: 2, HealTeamDetermine: true, HealDetermine: true },
  dmg: ({ attr, calc }, { heal }) => heal(calc(attr.def) * 0.5)
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