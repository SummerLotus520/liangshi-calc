import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "玛拉妮"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWaterTeam: 1, EnergyTeammate: 60, NatlanTeammate: 1, Nightsoul: true, SkillsHit: 0, SkillsDmg: 0 }
export const buffs = CalcBuff
export const details = [
{
  title: '鲨鲨撕咬基础伤害',
  params: { SkillsAfter: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['鲨鲨撕咬基础伤害'] / 100, 'a,nightsoul')
},
{
  title: '鲨鲨撕咬基础蒸发',
  params: { FireAttachment: true, SkillsAfter: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['鲨鲨撕咬基础伤害'] / 100, 'a,nightsoul', 'vaporize')
},
{
  title: '鲨鲨撕咬一层伤害',
  params: { Wave_Momentum: 1, SkillsAfter: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['鲨鲨撕咬基础伤害'] / 100, 'a,nightsoul')
},
{
  title: '鲨鲨撕咬二层伤害',
  params: { Wave_Momentum: 2, SkillsAfter: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.e['鲨鲨撕咬基础伤害'] / 100, 'a,nightsoul')
},
{
  title: '巨浪鲨鲨撕咬伤害',
  params: { Wave_Momentum: 3, SkillsAfter: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * ( talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] ) / 100, 'a,nightsoul')
},
{
  title: '巨浪鲨鲨撕咬蒸发',
  params: { FireAttachment: true, Wave_Momentum: 3, SkillsAfter: 3 },
  dmgKey: 'a',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * ( talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] ) / 100, 'a,nightsoul', 'vaporize')
},
{
  check: ({ cons }) => cons >= 1,
  title: '1命首次巨浪鲨鲨撕咬蒸发',
  params: { FireAttachment: true, SkillsAfter: 1.6, Wave_Momentum: 3 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * ( talent.e['鲨鲨撕咬基础伤害'] + talent.e['巨浪鲨鲨撕咬伤害额外提升'] ) / 100, 'a,nightsoul', 'vaporize')
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q,nightsoul')
},
{
  title: `${TalentName.qName}蒸发`,
  params: { FireAttachment: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmgKey: 'q',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'] / 100, 'q,nightsoul', 'vaporize')
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
