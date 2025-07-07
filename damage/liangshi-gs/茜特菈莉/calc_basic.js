import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "茜特菈莉"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ShieldTime: 5, ShieldDetermine: true, ElementSame: 1, ElementIceTeam: 1, Nightsoul: true, NatlanTeammate: 1, SubjectedDmg: 0, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}释放伤害`,
  params: { NightsoulUse: 24 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['黑曜星魔伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.eName}释放融化`,
  params: { NightsoulUse: 40, FireAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['黑曜星魔伤害'], 'e,nightsoul', 'melt')
},
{
  title: `${TalentName.eName}风暴伤害`,
  params: { Storm: true, SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['霜陨风暴伤害'], 'e,nightsoul')
},
{
  title: `${TalentName.eName}护盾量`,
  params: { NightsoulUse: 24 },
  dmgKey: 'h',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['护盾吸收量2'][0] * calc(attr.mastery) / 100 + talent.e['护盾吸收量2'][1] * 1)
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { Storm: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['冰风暴伤害'], 'q,nightsoul')
},
{
  title: `${TalentName.qName}释放融化`,
  dmgKey: 'q',
  params: { Storm: true, EnergyDetermine: 0, FireAttachment: true, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['冰风暴伤害'], 'q,nightsoul', 'melt')
},
{
  title: `${TalentName.qName}爆炸伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['宿灵之髑伤害'], 'q,nightsoul')
},
{
  check: ({ cons }) => cons >= 1,
  title: '「星刃」基础伤害提升值',
  dmgKey: 'f',
  dmg: ({ calc, attr }) => {
    return {
      avg: calc(attr.mastery) * 200 / 100
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