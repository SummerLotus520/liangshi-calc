import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "重云"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 40, LiyueTeammate: 1 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}一段伤害`,
  params: { NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.aName}一段融化`,
  params: { FireAttachment: true, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'melt')
},
{
  title: `${TalentName.aName}四段伤害`,
  params: { NormalUse: 4, NormalHit: 4, NormalDmg: 4, NormalElement: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a')
},
{
  title: `${TalentName.aName}四段融化`,
  params: { FireAttachment: true, NormalUse: 4, NormalHit: 4, NormalDmg: 4, NormalElement: 4 },
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['四段伤害'], 'a', 'melt')
},
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}融化伤害`,
  params: { FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'melt')
},
{
  title: `${TalentName.qName}完整伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent, cons }, dmg) => {
    let q1 = dmg(talent.q['技能伤害'], 'q')
    let cons6 = cons >= 6 ? 4 : 3
    return {
      dmg: q1.dmg + cons6,
      avg: q1.avg + cons6
    }
  }
},
{
  title: `${TalentName.qName}完整融化`,
  params: { FireAttachment: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmgKey: 'q',
  dmg: ({ talent, cons }, dmg) => {
    let q1 = dmg(talent.q['技能伤害'], 'q', 'melt')
    let cons6 = cons >= 6 ? 4 : 3
    return {
      dmg: q1.dmg + cons6,
      avg: q1.avg + cons6
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
