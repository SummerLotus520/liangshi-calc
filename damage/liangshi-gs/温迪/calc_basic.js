import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "温迪"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: `${TalentName.eName}点按伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e')
},
{
  title: `${TalentName.eName}长按伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按伤害'], 'e')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { Winds_Grand_Ode: true, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q')
},
{
  title: `${TalentName.qName}含转化单段`,
  params: { Winds_Grand_Ode: true, BurstUse: 1, BurstHit: 10, BurstDmg: 10 },
  dmg: ({ talent }, dmg) => {
    let basic = dmg(talent.q['持续伤害'], 'q')
    let fj = dmg(talent.q['附加元素伤害'], 'q', 'scene')
    return {
      dmg: basic.dmg + fj.dmg,
      avg: basic.avg + fj.avg
    }
  }
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