import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "优菈"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { TargetHp: 25, ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
   title: `${TalentName.aName}首段伤害`,
   params: { phy: true },
   dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
},
{
  title: `${TalentName.aName}尾段伤害`,
  params: { NormalUse: 5, NormalHit: 7, NormalDmg: 7, phy: true },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => {
    let a5 = dmg(talent.a['五段伤害'] / 2, 'a', 'phy')
    return {
      dmg: a5.dmg * 2,
      avg: a5.avg * 2
    }
  }
},
{
  title: `点按${TalentName.eName}伤害`,
  params: { Grimheart: 0 },
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e')
},
{
  title: `0层长按${TalentName.eName}伤害`,
  params: { Grimheart: 0 },
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e')
},
{
  title: `2层长按${TalentName.eName}伤害`,
  params: { Grimheart: 2, SkillsUse: 3, SkillsHit: 5, SkillsDmg: 5 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => {
   let e = dmg(talent.e['长按伤害'], 'e')
   let g = dmg(talent.e['冰涡之剑伤害'], 'e')
   let j = dmg(talent.q['光降之剑基础伤害'], 'q', 'phy')
   return {
     dmg: e.dmg * 1 + g.dmg * 2 + j.dmg * 0.5,
     avg: e.avg * 1 + g.avg * 2 + j.avg * 0.5
   }
 }
},
{
  title: `${TalentName.qName}斩击伤害`,
  params: { EnergyDetermine: 0, SkillsUse: 3, SkillsHit: 5, SkillsDmg: 5, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
 ({ cons, weapon }) => {
  let buffCount = 12
  if (weapon.name === '松籁响起之时') {
    buffCount = 13
    if (weapon.affix_level >= 4) {
      buffCount = 14
    }
  }
  if (cons === 6) {
    buffCount = buffCount + 11
  }
  return {
    title: `光降之剑${buffCount}层伤害`,
    params: { Lightfall_Sword: true, SkillsUse: 3, SkillsHit: 5, SkillsDmg: 5, BurstUse: 1, BurstHit: 2, BurstDmg: 2, NormalUse: 7, NormalHit: 10, NormalDmg: 10, phy: true },
    dmgKey: 'q',
    dmg: ({ talent }, dmg) => dmg(talent.q['光降之剑基础伤害'] + talent.q['每层能量伤害'] * buffCount, 'q', 'phy')
  }
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