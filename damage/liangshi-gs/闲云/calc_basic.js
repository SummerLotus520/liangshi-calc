import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "闲云"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 70, LiyueTeammate: 1, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: '仙力助推下落攻击伤害提升值',
  dmgKey: 'f',
  dmg: ({ calc, attr, cons }) => {
    let cons2 = cons * 1 >= 2 ? 2 : 1
    return {
      avg: Math.min( calc(attr.atk) * 200 / 100 , 9000 ) * cons2
    }
  }
},
{
  title: `${TalentName.eName}伤害`,
  params: { SkillsUse: 1 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}一段跳${TalentName.a3NameT}`,
  params: { SkillsUse: 1, PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][0], 'a3')
},
{
  title: `${TalentName.eName}二段跳${TalentName.a3NameT}`,
  params: { SkillsUse: 2, PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][1], 'a3')
},
{
  title: `${TalentName.eName}三段跳${TalentName.a3NameT}`,
  dmgKey: 'c',
  params: { SkillsUse: 3, PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][2], 'a3')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}协同伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, HealNumber: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['竹星伤害'], 'q')
},
{
  title: `${TalentName.qName}释放治疗`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, HealNumber: 1 },
  dmgKey: 'h',
  dmg: ({ attr, calc, talent, cons }, { heal }) => heal(talent.q['治疗量2'][0] * calc(attr.atk) / 100 + talent.q['治疗量2'][1] * 1)
},
{
  title: `${TalentName.qName}持续治疗`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, HealNumber: 3 },
  dmgKey: 'undefined',
  dmg: ({ attr, calc, talent }, { heal }) => heal(talent.q['持续治疗量2'][0] * calc(attr.atk) / 100 + talent.q['持续治疗量2'][1] * 1)
},
{
  title: '扩散反应伤害',
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('swirl')
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