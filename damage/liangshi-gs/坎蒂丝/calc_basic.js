import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { Format } from '../../../../../plugins/liangshi-calc/components/index.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "坎蒂丝"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 60, ShieldDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.qNameT}后${TalentName.aName}一段伤害`,
  params: { Prayer_of_the_Crimson_Crown: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, NormalElement: 1 },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `蓄力${TalentName.eName}伤害`,
  params: { ShieldTime: 2 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.hp) * talent.e['蓄力完成伤害'] / 100, 'e')
},
{
  title: `蓄力${TalentName.eName}蒸发`,
  params: { FireAttachment: true, ShieldTime: 2 },
  dmgKey: 'e',
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.hp) * talent.e['蓄力完成伤害'] / 100, 'e', 'vaporize')
},
{
  title: `${TalentName.eName}护盾吸收`,
  params: { ShieldTime: 2 },
  dmgKey: 'h',
  dmg: ({ attr, calc, talent }, { shield }) => shield(calc(attr.hp) * talent.e['护盾吸收量2'][0] / 100 + talent.e['护盾吸收量2'][1])
},
{
  title: `${TalentName.qName}伤害`,
  params: { Prayer_of_the_Crimson_Crown: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.hp) * talent.q['水波冲击伤害'] / 100, 'q')
},
{
  title: `${TalentName.qName}蒸发`,
  params: { Prayer_of_the_Crimson_Crown: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1, FireAttachment: true },
  dmgKey: 'q',
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.hp) * talent.q['水波冲击伤害'] / 100, 'q', 'vaporize')
},
{
  title: `${TalentName.qName}普攻伤害提升`,
  dmgKey: 'f',
  dmg: ({ attr, calc }) => {
    return {
      avg: Format.percent(20 + Math.floor(calc(attr.hp) / 1000) * 0.5),
      type: 'text'
    }
  }
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.c6Name}衍潮冲击伤害`,
  params: { Prayer_of_the_Crimson_Crown: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.hp) * 15 / 100, 'q')
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
