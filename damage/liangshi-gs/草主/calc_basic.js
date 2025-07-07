import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/dendro"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  params: { GrassAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'spread')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { Overflowing_Lotuslight: 10, BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.q['草灯莲攻击伤害'], 'q')
},
{
  title: `${TalentName.qName}单段激化`,
  dmgKey: 'q',
  params: { GrassAttachment: true, Overflowing_Lotuslight: 10, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['草灯莲攻击伤害'], 'q', 'spread')
},
{
  title: `${TalentName.qName}爆发伤害`,
  params: { Overflowing_Lotuslight: 10, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['激烈爆发伤害'], 'q')
},
{
  title: `${TalentName.qNameT}后${TalentName.eName}伤害`,
  params: { Overflowing_Lotuslight: 10, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qNameT}后${TalentName.eName}激化`,
  params: { GrassAttachment: true, Overflowing_Lotuslight: 10, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'spread')
},
{
  title: '草原核伤害',
  dmgKey: 'r',
  dmg: ({calc, attr}, { reaction }) => reaction('bloom')
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