import { Format, LSconfig } from '#liangshi'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/electro"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  params: { SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'aggravate')
},
{
  title: `${TalentName.eName}元素充能提升`,
  dmgKey: 'f',
  params: { SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2, SkillsAfter: 0.2 },
  dmg: ({ attr, calc }) => {
    return {
      avg: Format.percent((calc(attr.recharge) * 10 / 100 + 20) / 100),
      type: 'text'
    }
  }
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}释放激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'aggravate')
},
{
  title: `${TalentName.qName}落雷伤害`,
  params: { Lightning_Shroud: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['威光落雷伤害'], 'q')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.qName}强化落雷`,
  params: { Lightning_Shroud: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['威光落雷伤害'] * 200 / 100, 'q')
},
{
  title: `${TalentName.qName}落雷激化`,
  dmgKey: 'q',
  params: { GrassAttachment: true, Lightning_Shroud: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['威光落雷伤害'], 'q', 'aggravate')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.qName}强化落雷激化`,
  params: { GrassAttachment: true, Lightning_Shroud: true, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['威光落雷伤害'] * 200 / 100, 'q', 'aggravate')
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
