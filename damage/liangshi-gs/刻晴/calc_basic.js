import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "刻晴"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 40, LiyueTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eNameT}后${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 2, ChargedDmg: 2, NormalElement: 1 },
  dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.a['重击伤害2'][0] , 'a2')
    let a2 = dmg(talent.a['重击伤害2'][1] , 'a2')
    return {
      dmg: a1.dmg + a2.dmg,
      avg: a1.avg + a2.avg
    }
  }
},
{
  title: `${TalentName.eNameT}后${TalentName.a2Name}激化`,
  params: { GrassAttachment: true, ChargedUse: 1, ChargedHit: 2, ChargedDmg: 2, NormalElement: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.a['重击伤害2'][0] , 'a2', 'aggravate')
    let a2 = dmg(talent.a['重击伤害2'][1] , 'a2')
    return {
      dmg: a1.dmg + a2.dmg,
      avg: a1.avg + a2.avg
    }
  }
},
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'undefined',
  dmg: ({ talent }, dmg) => dmg(talent.e['雷楔伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  params: { GrassAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['雷楔伤害'], 'e', 'aggravate')
},
{
  title: `${TalentName.eName}归位伤害`,
  params: { SkillsUse: 2, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['斩击伤害'], 'e')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['连斩伤害2'][0], 'q')
},
{
  title: `${TalentName.qName}单段激化`,
  params: { GrassAttachment: true, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['连斩伤害2'][0], 'q', 'aggravate')
},
{
  title: `${TalentName.qName}斩击伤害`,
  params: { BurstUse: 1, BurstHit: 9, BurstDmg: 9 },
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'], 'q')
},
{
  title: `${TalentName.qName}斩击激化`,
  params: { GrassAttachment: true, BurstUse: 1, BurstHit: 9, BurstDmg: 9 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['最后一击伤害'], 'q', 'aggravate')
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
