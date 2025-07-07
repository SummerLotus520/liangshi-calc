import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "米卡"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 80, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段伤害`,
   params: { phy: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
},
{
  title: `满层${TalentName.aName}一段伤害`,
  params: { Detector: 4, phy: true },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
},
{
  title: '霜流矢伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['霜流矢伤害'], 'e')
},
{
  title: '冰星信标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['冰星信标伤害'], 'e')
},
{
  title: '冰星信标融化',
  params: { FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['冰星信标伤害'], 'e', 'vaporize')
},
{
  title: '单个冰星破片伤害',
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['冰星破片伤害'], 'e')
},
{
  title: `${TalentName.qName}释放治疗`,
  params: { HealNumber: 1, EnergyDetermine: 0, BurstUse: 1 },
  dmgKey: 'h',
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['施放治疗量2'][0] * calc(attr.hp) / 100 + talent.q['施放治疗量2'][1] * 1)
},
{
  title: '鹰翎回复量',
  params: { HealNumber: 3, BurstUse: 1 },
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['鹰翎治疗量2'][0] * calc(attr.hp) / 100  + talent.q['鹰翎治疗量2'][1] * 1)
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
]]
