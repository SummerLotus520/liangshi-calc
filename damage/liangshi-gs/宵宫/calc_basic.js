import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "宵宫"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementFireTeam: 1, EnergyTeammate: 60, SkillsHit: 0, SkillsDmg: 0 }
export const buffs = CalcBuff
export const details = [
{
  title: '炽焰箭首段',
  params: { NormalUse: 1, NormalHit: 1, NormalDmg: 1, NormalElement: 1, Niwabi_Enshou: true },
  dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.a['一段伤害2'][0], 'a')
    return {
      avg: a1.avg * 2,
      dmg: a1.dmg * 2
    }
  }
},
{
  title: '炽焰箭首段蒸发',
  params: { NormalUse: 1, NormalHit: 1, NormalDmg: 1, NormalElement: 1, Niwabi_Enshou: true, WaterAttachment: true },
  dmg: ({ talent }, dmg) => {
    let a1 = dmg(talent.a['一段伤害2'][0], 'a')
    let a2 = dmg(talent.a['一段伤害2'][0], 'a', 'vaporize')
    return {
      avg: a1.avg + a2.avg,
      dmg: a1.dmg + a2.dmg
    }
  }
},
{
  title: '炽焰箭尾箭',
  params: ({ cons }) => ({ NormalUse: 5, NormalHit: cons >= 6 ? 10 : 7, NormalDmg: cons >= 6 ? 10 : 7, NormalElement: cons >= 6 ? 10 : 7, Niwabi_Enshou: true }),
  dmg: ({ talent }, dmg) => dmg(talent.a['五段伤害'], 'a')
},
{
  title: '炽焰箭尾箭蒸发',
  params: ({ cons }) => ({ NormalUse: 5, NormalHit: cons >= 6 ? 10 : 7, NormalDmg: cons >= 6 ? 10 : 7, NormalElement: cons >= 6 ? 10 : 7, Niwabi_Enshou: true, WaterAttachment: true }),
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['五段伤害'], 'a', 'vaporize')
},
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: '焰硝矢伤害',
  params: { ChargedUse: 1, ChargedHit: 4, ChargedDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.a['焰硝矢伤害'], 'a2')
},
{
  title: `${TalentName.qName}爆炸伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['琉金火光爆炸伤害'], 'q')
},
{
  title: `${TalentName.qName}爆炸蒸发`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, WaterAttachment: true },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['琉金火光爆炸伤害'], 'q', 'vaporize')
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
