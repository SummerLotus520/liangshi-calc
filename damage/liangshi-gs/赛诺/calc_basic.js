import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "赛诺"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = {}
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}激化`,
  params: { GrassAttachment: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e', 'aggravate')
},
{
  title: `${TalentName.qNameT}后${TalentName.aName}首段`,
  params: { Pactsworn_Pathclearer: true, NormalUse: 1, NormalHit: 1, NormalDmg: 1, NormalElement: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['一段伤害'], 'a')
},
{
  title: `${TalentName.qNameT}后${TalentName.eNameT}伤害`,
  params: { Pactsworn_Pathclearer: true, NormalUse: 6, NormalHit: 7, NormalDmg: 7, NormalElement: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['冥祭伤害'], 'e')
},
{
  title: `${TalentName.qNameT}后末途真眼${TalentName.eNameT}伤害`,
  params: { Pactsworn_Pathclearer: true , Endseer_stance: true, NormalUse: 6, NormalHit: 7, NormalDmg: 7, NormalElement: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['冥祭伤害'], 'e')
},
{
  title: `${TalentName.qNameT}后末途真眼${TalentName.eNameT}激化`,
  params: { GrassAttachment: true, Pactsworn_Pathclearer: true , Endseer_stance: true, NormalUse: 6, NormalHit: 7, NormalDmg: 7, NormalElement: 2 },
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['冥祭伤害'], 'e', 'aggravate')
},
{
  title: '末途真眼 渡荒之雷',
  params: { Pactsworn_Pathclearer: true, NormalUse: 6, NormalHit: 7, NormalDmg: 7, NormalElement: 2 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk), 'e')
},
{
  title: '末途真眼渡荒之雷激化',
  params: { GrassAttachment: true, Pactsworn_Pathclearer: true, NormalUse: 6, NormalHit: 7, NormalDmg: 7, NormalElement: 2 },
  dmg: ({ attr, calc }, { basic }) => basic(calc(attr.atk), 'e', 'aggravate')
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
