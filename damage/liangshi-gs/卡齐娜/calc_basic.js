import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "卡齐娜"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 70, NatlanTeammate: 1, CrystallizeNumber: 5 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}搭乘伤害`,
  params: { NormalUse: 3, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, Nightsoul: true, RockDmg: 3 },
  dmgKey: 'a',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['冲天转转搭乘伤害'] / 100, 'e,nightsoul')
},
{
  title: `${TalentName.eName}独立伤害`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, Nightsoul: true, RockDmg: 3 },
  dmgKey: 'e',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['冲天转转独立伤害'] / 100, 'e,nightsoul')
},
/*
{
  title: `后台${TalentName.eName}独立伤害`,
  params: { TruceTime: 2, SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3, Nightsoul: true, RockDmg: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['冲天转转独立伤害'] / 100, 'e,nightsoul')
},
*/
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, RockDmg: 1 },
  dmgKey: 'q',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
},
{
  check: ({ cons }) => cons >= 6,
  title: '护盾替换摧毁伤害',
  params: { RockDmg: 3 },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.def) * 200 / 100, '')
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