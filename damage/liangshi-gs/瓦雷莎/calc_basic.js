import { LSconfig } from '#liangshi'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "瓦雷莎"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { PlungingUse: 2, PlungingHit: 2, PlungingDmg: 2, ElementSame: 1, ElementMineTeam: 1, NatlanTeammate: 1, Nightsoul: true }
export const buffs = CalcBuff
export const details = [
{
  title: `高空${TalentName.a3Name}伤害`,
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, Nightsoul: false },
  dmg: ({ talent }, dmg ) => dmg(talent.a['低空/高空坠地冲击伤害2'][1], 'a3')
},
{
  title: `强化${TalentName.a2Name}伤害`,
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, Fiery_Passion: true },
  dmg: ({ talent }, dmg ) => dmg(talent.a['炽热激情状态重击伤害'], 'a2,nightsoul')
},
{
  title: `强化高空${TalentName.a3Name}伤害`,
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, Fiery_Passion: true, NightsoulUse: 40 },
  dmg: ({ talent }, dmg ) => dmg(talent.a['炽热激情状态低空/高空坠地冲击伤害2'][1], 'a3,nightsoul')
},
{
  title: `点按${TalentName.eName}伤害`,
  params: { Nightsoul: false },
  dmg: ({ talent }, dmg ) => dmg(talent.e['突进伤害'], 'e,nightsoul')
},
{
  title: `强化${TalentName.eName}伤害`,
  dmgKey: 'e',
  params: { Fiery_Passion: true, NightsoulUse: 5 },
  dmg: ({ talent }, dmg ) => dmg(talent.e['炽热激情状态突进伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, Nightsoul: false, EnergyDetermine: 0, EnergyUse: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.q['飞踢伤害'], 'q,nightsoul')
},
{
  title: `强化${TalentName.qName}伤害`,
  dmgKey: 'q',
  params: { BurstUse: 1, BurstHit: 1, BurstDmg: 1, Fiery_Passion: true, EnergyDetermine: 0, NightsoulUse: 5, EnergyUse: 1 },
  dmg: ({ talent }, dmg ) => dmg(talent.q['炽热激情状态飞踢伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qNameT}强化${TalentName.a3Name}伤害`,
  dmgKey: 'c',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, EnergyDetermine: 18, NightsoulUse: 40, EnergyUse: 1 },
  dmg: ({ talent, cons, attr, calc }, { basic }) => basic(calc(attr.atk) * (talent.q['「大火山崩落」伤害'] + (cons >= 1 ? 180 : 0)) / 100, 'a3,nightsoul')
},
{
  check: ({ cons }) => cons >= 4,
  title: `${TalentName.c4Name}${TalentName.qNameT}首次强化${TalentName.a3Name}`,
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1, EnergyDetermine: 18, NightsoulUse: 40, EnergyUse: 1 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.atk) * (talent.q['「大火山崩落」伤害'] + 180) / 100 + Math.min((calc(attr.atk) * 500 / 100), 20000), 'a3,nightsoul')
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
