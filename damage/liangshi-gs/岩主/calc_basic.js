import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "旅行者/geo"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementRockTeam: 1, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.aName}崩毁伤害`,
  params: { NormalUse: 5, NormalHit: 5, NormalDmg: 5 },
  dmgKey: 'a',
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk) * 60 / 100, 'a')
},
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qName}单段伤害`,
  params: { Wake_of_Earth: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['地震波单次伤害'], 'q')
},
{
  title: `${TalentName.qName}完整伤害`,
  dmgKey: 'q',
  params: { Wake_of_Earth: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['地震波单次伤害'], 'q')
    return {
      dmg: q1.dmg * 4,
      avg: q1.avg * 4
    }
  }
},
{
  check: ({ cons }) => cons >= 1,
  title: `${TalentName.qNameT}后${TalentName.eName}伤害`,
  params: { Wake_of_Earth: true, BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
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