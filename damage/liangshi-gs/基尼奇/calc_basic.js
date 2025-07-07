import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "基尼奇"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 70, NatlanTeammate: 1, Nightsoul: true }
export const buffs = CalcBuff
export const details = [
{
  title: '环绕射击单枚',
  params: { SkillsUse: 1, SkillsHit: 5, SkillsDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e,nightsoul')
},
{
  title: '环绕射击单枚激化',
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 5, SkillsDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.e['环绕射击伤害'], 'e,nightsoul', 'spread')
},
{
  title: '迴猎贯鳞炮伤害',
  dmgKey: 'e',
  params: { Scalespiker_Cannon: true, SkillsAfter: 3, SkillsUse: 2, SkillsHit: 6, SkillsDmg: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e,nightsoul')
},
{
  title: '迴猎贯鳞炮激化',
  params: { GrassAttachment: true, Scalespiker_Cannon: true, SkillsAfter: 3, SkillsUse: 2, SkillsHit: 6, SkillsDmg: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e,nightsoul', 'spread')
},
{
  check: ({ cons }) => cons >= 2,
  title: '2命首次猎贯鳞炮',
  params: { Scalespiker_Cannon: true, SkillsAfter: 1.6, SkillsUse: 2, SkillsHit: 6, SkillsDmg: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['迴猎贯鳞炮伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}释放激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'spread')
},
{
  title: `${TalentName.qName}龙息伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['龙息伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}龙息激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['龙息伤害'], 'q,nightsoul', 'spread')
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
