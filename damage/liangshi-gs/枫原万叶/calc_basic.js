import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { Format } from '../../../../../plugins/liangshi-calc/components/index.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "枫原万叶"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}点按伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['点按技能伤害'], 'e')
},
{
  title: `${TalentName.eName}长按伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按技能伤害'], 'e')
},
{
  title: '下落攻击•乱岚拨止伤害',
  params: { PlungingUse: 1, PlungingHit: 1, PlungingDmg: 1 },
  dmgKey: 'c',
  dmg: ({ talent }, dmg) => dmg(talent.a['低空/高空坠地冲击伤害'][1], 'a3')
},
{
  title: `${TalentName.qName}斩击伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['斩击伤害'], 'q')
},
{
  title: `${TalentName.qNameT}无转化每段伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q')
},
{
  title: `${TalentName.qNameT}无转化完整伤害`,
  params: { BurstUse: 1, BurstHit: 4, BurstDmg: 4 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['斩击伤害'], 'q')
    let q2 = dmg(talent.q['持续伤害'], 'q')
    return {
      dmg: q1.dmg + q2.dmg * 5 ,
      avg: q1.avg + q2.avg * 5
    }
  }
},
{
  title: '元素伤害提高',
  dmgKey: 'f',
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Format.percent(calc(attr.mastery) * 0.04 / 100),
      type: 'text'
    }
  }
},
{
  title: '扩散反应伤害',
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('swirl')
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
