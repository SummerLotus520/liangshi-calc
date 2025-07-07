import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "希格雯"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let BLPlusPath = cfg.bndOfLifePlus || 0
let BLPctPath = cfg.bndOfLifePct || 1
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { blPlus: `${BLPlusPath}`, blPct: `${BLPctPath}`, ElementSame: 1, ElementIceTeam: 1, FontaineTeammate: 1, EnergyTeammate: 70, HealDetermine: true, TruceChangeHp: true, HealTeamDetermine: true, PrimordialDetermine: "ousia" }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent, attr , cons }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: `小小关心气泡伤害`,
  params: { ChargedUse: 1, ChargedHit: 4, ChargedDmg: 4 },
  dmgKey: 'undefined',
  dmg: ({ talent, attr , cons }, dmg) => dmg(talent.a['小小关心气泡伤害'], 'a2')
},
{
  title: `${TalentName.eName}伤害提升值`,
  dmgKey: 'f',
  dmg: ({ calc, attr, cons }) => {
    let cons1 = cons >= 1 ? 100 : 80
    let cos1 = cons >= 1 ? 3500 : 2800
    return {
      avg: Math.max(0, Math.min(((calc(attr.hp) - 30000) / 1000 * cons1), cos1))
    }
  }
},
{
  title: `${TalentName.eName}水球伤害`,
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.e['激愈水球伤害'] / 100, 'e')
},
{
  title: `${TalentName.eName}水球蒸发`,
  params: { FireAttachment: true },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.e['激愈水球伤害'] / 100, 'e', 'vaporize')
},
{
  title: `${TalentName.eName}水球治疗`,
  dmgKey: 'h',
  dmg: ({ params, cons, talent, attr, calc, weapon }, { heal }) => heal( ( calc(attr.hp) * talent.e['激愈水球治疗量2'][0] / 100 + talent.e['激愈水球治疗量2'][1] ) * 1.3 )
},
{
  title: `${TalentName.eName}水球自身治疗`,
  params: { SkillsUse: 1, SkillsHit: 3, SkillsDmg: 3 },
  dmg: ({ params, cons, talent, attr, calc, weapon }, { heal }) => heal(calc(attr.hp) * 50 / 100 * 1.3)
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q')
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