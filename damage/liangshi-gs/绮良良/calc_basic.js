import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "绮良良"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementGrassTeam: 1, EnergyTeammate: 60, ShieldDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: '甩尾飞踢伤害',
  params: { SkillsUse: 1, SkillsHit: 11 , SkillsDmg: 11, ShieldTime: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['甩尾飞踢伤害'], 'e')
},
{
  title: '甩尾飞踢激化',
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 11, SkillsDmg: 11, ShieldTime: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['甩尾飞踢伤害'], 'e', 'spread')
},
{
  title: `${TalentName.eName}冲撞伤害`,
  params: { SkillsUse: 1, SkillsHit: 6, SkillsDmg: 6, ShieldTime: 6 },
  dmg: ({ talent }, dmg) => dmg(talent.e['猫箱急件冲撞伤害'], 'e')
},
{
  title: '翻正爪击伤害',
  params: { SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1, ShieldTime: 0.2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['翻正爪击伤害'], 'e')
},
{
  title: '翻正爪击激化',
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 1, SkillsDmg: 1, ShieldTime: 0.2 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['翻正爪击伤害'], 'e', 'spread')
},
{
  title: `${TalentName.eName}护盾吸收量`,
  params: { GrassAttachment: true, SkillsUse: 1, SkillsHit: 11, SkillsDmg: 11, ShieldTime: 6 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['护盾吸收量上限2'][0] * calc(attr.hp) / 100 + talent.e['护盾吸收量上限2'][1] * 1)
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}激化`,
  params: { GrassAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'spread')
},
{
  title: '猫草豆蔻爆炸伤害',
  params: {  BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['猫草豆蔻爆炸伤害'], 'q')
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