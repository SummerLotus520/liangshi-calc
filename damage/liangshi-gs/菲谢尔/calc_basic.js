import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "菲谢尔"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementMineTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}召唤伤害`,
  params: { Oz: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['召唤伤害'], 'e')
},
{
  title: `${TalentName.eName}召唤激化`,
  params: { GrassAttachment: true, Oz: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['召唤伤害'], 'e', 'aggravate')
},
{
  title: `${TalentName.eName}攻击伤害`,
  params: { SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['奥兹攻击伤害'], 'e')
},
{
  title: `${TalentName.eName}攻击激化`,
  params: { GrassAttachment: true, SkillsHit: 4, SkillsDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['奥兹攻击伤害'], 'e', 'aggravate')
},
{
  title: '圣裁之雷伤害',
  params: { SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 80 / 100, 'e')
},
{
  check: ({ cons }) => cons >= 6,
  title: `${TalentName.c6Name}协同攻击`,
  params: { SkillsHit: 8, SkillsDmg: 8 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 30 / 100, 'e')
},
{
  check: ({ cons }) => cons >= 4,
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 222 / 100, 'q')
},
{
  title: `${TalentName.qName}落雷伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['落雷伤害'], 'q')
},
{
  title: `${TalentName.qName}落雷激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['落雷伤害'], 'q', 'aggravate')
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
  title: '触发特效后暴击率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })  
}, {  
  title: '触发特效后暴击伤害',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })  
}, {  
  title: '触发特效后元素精通',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.mastery) * 1) })  
}, {  
  title: '触发特效后充能效率',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })  
}, {  
  title: '触发特效后治疗加成',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })  
}, {  
  title: '触发特效后护盾强效',  
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.shield) * 1) })  
}, {  
  title: '当前圣遗物套装',  
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })  
}
]
