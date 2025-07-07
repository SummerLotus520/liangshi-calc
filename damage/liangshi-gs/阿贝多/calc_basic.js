import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "阿贝多"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 40, CrystallizeNumber: 3 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  params: { TargetHp: 100, SkillsHit: 1, SkillsDmg: 1, RockDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: '满血刹那之花伤害',
  params: { TargetHp: 100, SkillsHit: 4, SkillsDmg: 4, RockDmg: 4 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.def) * talent.e['刹那之花伤害'] / 100, 'e')
},
{
  title: '刹那之花伤害',
  params: { TargetHp: 25, SkillsHit: 4, SkillsDmg: 4, RockDmg: 4 },
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.def) * talent.e['刹那之花伤害'] / 100, 'e')
},
{
  title: `${TalentName.qName}伤害`,
  params: { Fatal_Reckoning: 0, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, RockDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['爆发伤害'], 'q')
},
{
  title: `4层${TalentName.qName}伤害`,
  params: { Fatal_Reckoning: 4, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1, RockDmg: 5 },
  dmg: ({ talent }, dmg) => dmg(talent.q['爆发伤害'], 'q')
},
{
  title: '生灭之花伤害',
  params: { Fatal_Reckoning: 0, BurstUse: 1, BurstHit: 6, BurstDmg: 6, RockDmg: 10 },
  dmg: ({ talent }, dmg) => dmg(talent.q['生灭之花伤害'], 'q')
},
{
  title: '4层生灭之花伤害',
  dmgKey: 'q',
  params: { Fatal_Reckoning: 4, BurstUse: 1, BurstHit: 6, BurstDmg: 6, RockDmg: 10 },
  dmg: ({ talent }, dmg) => dmg(talent.q['生灭之花伤害'], 'q')
},
{
  title: '结晶护盾吸收量',
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('crystallize')
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