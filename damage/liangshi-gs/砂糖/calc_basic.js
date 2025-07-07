import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "砂糖"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementWindTeam: 1, EnergyTeammate: 80 }
export const buffs = CalcBuff
export const details = [
{
  title: '为队友提升精通',
  dmgKey: 'f',
  dmg: ({ calc, attr }) => {
    return {
      avg: calc(attr.mastery) * 0.2 + 50
    }
  }
},
{
  title: `${TalentName.aName}一段伤害`,
  dmgKey: 'a',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
},
{
  title: `${TalentName.eName}伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.qNameT}单段基础伤害`,
  params: { BurstUse: 1, BurstHit: 2, BurstDmg: 2 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'q')
},
{
  title: `${TalentName.qNameT}单段转化伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.q['附加元素伤害'], 'q', 'scene')
},
{
  title: '扩散反应伤害',
  dmgKey: 'r',
  dmg: ({}, { reaction }) => reaction('swirl')
}]