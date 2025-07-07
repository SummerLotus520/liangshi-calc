import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "夏沃蕾"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 60, FontaineTeammate: 1, HealTeamDetermine: true, HealDetermine: true, PrimordialDetermine: "ousia" }
export const buffs = CalcBuff
export const details = [
{
  title: `点按${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e',)
},
{
  title: `长按${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e')
},
{
  title: '「超量装药弹头」伤害',
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['「超量装药弹头」伤害'], 'e')
},
 {
  check: ({ cons }) => cons >= 2,
  title: `${TalentName.c2Name}额外伤害`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, HealNumber: 1 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.atk) * 120 / 100, 'e')
},
{
  title: `${TalentName.eName}持续治疗`,
  params: { HealNumber: 2 },
  dmgKey: 'h',
  dmg: ({ attr, calc, talent }, { heal }) => heal(talent.e['持续治疗量2'][0] * calc(attr.hp) / 100 + talent.e['持续治疗量2'][1] * 1)
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['爆轰榴弹伤害'], 'q',)
},
{
  title: `${TalentName.eName}分裂弹伤害`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['二重毁伤弹伤害'], 'q')
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
