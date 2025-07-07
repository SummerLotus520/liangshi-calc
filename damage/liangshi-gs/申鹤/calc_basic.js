import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "申鹤"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 80, LiyueTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害提升值`,
  dmgKey: 'f',
  dmg: ({ talent, calc, attr }) => {
    return {
      avg: talent.e['伤害值提升'] * calc(attr.atk) / 100
    }
  }
},
{
  title: `${TalentName.eName}点按伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['点按技能伤害'], 'e')
},
{
  title: `${TalentName.eName}点按融化`,
  params: { FireAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['点按技能伤害'], 'e', 'melt')
},
{
  title: `${TalentName.eName}长按伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['长按技能伤害'], 'e')
},
{
  title: `${TalentName.eName}长按融化`,
  params: { FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按技能伤害'], 'e', 'melt')
},
{
  check: ({ cons }) => cons >= 4,
  title: `${TalentName.qNameT}后满层${TalentName.eNameT}长按融化`,
  params: { Talisman_Spirit: true, Skyfrost_Mantra: 50, FireAttachment: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['长按技能伤害'], 'e', 'melt')
},
{
  title: `${TalentName.qNameT}每跳伤害`,
  params: { Talisman_Spirit: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q')
},
{
  title: `${TalentName.qNameT}每跳融化伤害`,
  params: { FireAttachment: true, Talisman_Spirit: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q', 'melt')
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