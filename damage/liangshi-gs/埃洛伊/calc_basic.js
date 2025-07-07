import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "埃洛伊"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 40 }
export const buffs = CalcBuff
export const details = [
{
  title: `附魔${TalentName.aName}第一段`,
  params: { coil: 4, NormalElement: 2, NormalHit: 2, NormalDmg: 2 },
  dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.a['一段伤害2'][0], 'a')
    let a2 = dmg(talent.a['一段伤害2'][1], 'a')
    return {
      dmg: a1.dmg + a2.dmg,
      avg: a1.avg + a2.avg
    }
  }
},
{
  title: `附魔${TalentName.aName}第四段`,
  dmgKey: 'a',
  params: { coil: 4, NormalElement: 5, NormalHit: 5, NormalDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a')
},
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['冰尘弹伤害'], 'e')
},
{
  title: `${TalentName.eName}融化`,
  params: { FireAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['冰尘弹伤害'], 'e', 'melt')
},
{
  title: '冷冻炸弹伤害',
  params: { SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['冷冻炸弹伤害'], 'e')
},
{
  title: '冷冻炸弹融化',
  params: { SkillsHit: 4, SkillsDmg: 4, FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['冷冻炸弹伤害'], 'e', 'melt')
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}融化`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, FireAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'melt')
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