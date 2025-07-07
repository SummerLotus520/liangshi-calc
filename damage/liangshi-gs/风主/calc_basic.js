import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/anemo"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}风刃伤害`,
  params: { NormalUse: 5, NormalHit: 5, NormalDmg: 5 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 60 / 100, 'a')
},
{
  title: '初始切割伤害',
  params: { SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['初始切割伤害'], 'e', 'scene')
},
{
  title: '初始爆风伤害',
  params: { SkillsUse: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['初始爆风伤害'], 'e', 'scene')
},
{
  title: '最大切割伤害',
  params: { SkillsUse: 1, SkillsHit: 5, SkillsDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.e['最大切割伤害'], 'e')
},
{
  title: '最大爆风伤害',
  params: { SkillsUse: 1, SkillsHit: 5, SkillsDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.e['最大爆风伤害'], 'e')
},
{
  title: `${TalentName.eName}完整伤害`,
  dmg: ({ talent }, dmg) => {
    let e1 = dmg(talent.e['初始切割伤害'], 'e')
    let e3 = dmg(talent.e['最大切割伤害'], 'e')
    let e4 = dmg(talent.e['最大爆风伤害'], 'e')
    return {
      dmg: e1.dmg * 2 + e3.dmg * 4 + e4.dmg,
      avg: e1.avg * 2 + e3.avg * 4 + e4.avg
    }
  }
},
{
  title: `${TalentName.qName}每跳伤害`,
  params: { Gust_Surge: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['龙卷风伤害'], 'q')
},
{
  title: `${TalentName.qName}完整伤害`,
  params: { Gust_Surge: true, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['龙卷风伤害'], 'q')
    return {
      dmg: q1.dmg * 9,
      avg: q1.avg * 9
    }
  }
},
{
  title: '扩散反应伤害',
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
]]
