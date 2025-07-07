import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "纳西妲"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = {}
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: '所闻遍计伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e')
},
{
  title: '所闻遍计·真如伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e')
},
{
  title: '所闻遍计·真如激化',
  params: { GrassAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e', 'spread')
},
{
  title: '灭净三业伤害',
  params: { Tri_Karma_Purification: true, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['灭净三业伤害2'][0] * calc(attr.atk) / 100 + talent.e['灭净三业伤害2'][1] * calc(attr.mastery) / 100, 'e')
},
{
  title: '灭净三业激化',
  params: { GrassAttachment: true, Tri_Karma_Purification: true, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmgKey: 'e',
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['灭净三业伤害2'][0] * calc(attr.atk) / 100 + talent.e['灭净三业伤害2'][1] * calc(attr.mastery) / 100, 'e', 'spread')
},
{
  title: `${TalentName.qName}后灭净三业伤害`,
  params: { Shrine_of_Maya: true, Tri_Karma_Purification: true, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, BurstUse: 1 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['灭净三业伤害2'][0] * calc(attr.atk) / 100 + talent.e['灭净三业伤害2'][1] * calc(attr.mastery) / 100, 'e')
},
{
  title: `${TalentName.qName}后灭净三业激化`,
  params: { GrassAttachment: true, Shrine_of_Maya: true, Tri_Karma_Purification: true, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, BurstUse: 1 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.e['灭净三业伤害2'][0] * calc(attr.atk) / 100 + talent.e['灭净三业伤害2'][1] * calc(attr.mastery) / 100, 'e', 'spread')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.qName}后灭净三业·业障除激化`,
  params: { GrassAttachment: true, Shrine_of_Maya: true, Tri_Karma_Purification: true, SkillsUse: 1, SkillsHit: 6, SkillsDmg: 6, BurstUse: 1 },
  dmg: ({ calc, attr }, { basic }) => basic(200 * calc(attr.atk) / 100 + 400 * calc(attr.mastery) / 100, 'e', 'spread')
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
