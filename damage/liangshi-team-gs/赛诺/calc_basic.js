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
}]
