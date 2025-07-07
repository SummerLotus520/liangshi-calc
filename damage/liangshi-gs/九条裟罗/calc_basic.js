import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { Format } from '../../../../../plugins/liangshi-calc/components/index.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "九条裟罗"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: `${TalentName.eName}提升攻击力`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'f',
  dmg: ({ talent, attr }) => {
    return {
      avg: talent.e['攻击力加成比例'] * attr.atk.base / 100
    }
  }
},
{
  title: '天狗咒雷·伏 伤害',
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['天狗咒雷·伏 伤害'], 'e')
},
{
  check: ({ cons }) => cons >= 2,
  title: `${TalentName.c2Name}乌羽伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['天狗咒雷·伏 伤害'] * 0.3, 'e')
},
{
  title: '天狗咒雷·金刚坏伤害',
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['天狗咒雷·金刚坏 伤害'], 'q')
},
{
  title: '天狗咒雷·雷砾伤害',
  params: { BurstUse: 1, BurstHit: 9, BurstDmg: 9 },
  dmg: ({ talent }, dmg) => dmg(talent.q['天狗咒雷·雷砾 伤害'], 'q')
},
{
  title: `${TalentName.qName}完整伤害`,
  params: { BurstUse: 1, BurstHit: 14, BurstDmg: 14 },
  dmgKey: 'q',
  dmg: ({ talent , cons }, dmg) => {
    let q1 = dmg(talent.q['天狗咒雷·金刚坏 伤害'], 'q')
    let q2 = dmg(talent.q['天狗咒雷·雷砾 伤害'], 'q')
    let cons4 = cons * 1 >= 4 ? 6 : 4
    return {
      dmg: q1.dmg + q2.dmg * 5 * cons4,
      avg: q1.avg + q2.avg * 5 * cons4
    }
  }
},
{
  title: `${TalentName.tName}能量恢复`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent, attr, calc }) => {
    return {
      avg: Format.number(calc(attr.recharge) / 100 * 1.2),
      type: 'text'
    }
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
]
