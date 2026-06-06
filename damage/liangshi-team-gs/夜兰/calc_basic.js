import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "夜兰"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = {}
export const buffs = CalcBuff
export const details = [
{
  title: '破局矢伤害',
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a['破局矢伤害'] / 100, 'a2')
},
{
  title: '破局矢蒸发',
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1, FireAttachment: true },
  dmgKey: 'z',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.a['破局矢伤害'] / 100, 'a2', 'vaporize')
},
{
  title: `${TalentName.eName}伤害`,
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.e['技能伤害'] / 100, 'e')
},
{
  title: `${TalentName.eName}蒸发`,
  params: { FireAttachment: true },
  dmgKey: 'e',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * talent.e['技能伤害'] / 100, 'e', 'vaporize')
},
{
  title: `${TalentName.qName}展开伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * (talent.q['技能伤害'] / 100), 'q')
},
{
  title: `${TalentName.qName}协同单段`,
  params: { Exquisite_Throw: true, BurstAfter: 7.5, BurstUse: 1, BurstHit: 9, BurstDmg: 9 },
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * (talent.q['玄掷玲珑伤害2'][0] / 100), 'q')
},
{
  title: `${TalentName.qName}协同单段蒸发`,
  params: { Exquisite_Throw: true, BurstAfter: 7.5, BurstUse: 1, BurstHit: 9, BurstDmg: 9 },
  dmgKey: 'q',
  dmg: ({ talent, attr, calc }, { basic }) => basic(calc(attr.hp) * (talent.q['玄掷玲珑伤害2'][0] / 100), 'q', 'vaporize')
},
{
  check: ({ cons }) => cons >= 6,
  title: '运筹帷幄破局矢',
  params: { Exquisite_Throw: true, BurstAfter: 2, BurstUse: 1, BurstHit: 3, BurstDmg: 3, NormalUse: 3, ChargedHit: 3, ChargedDmg: 3 },
  dmg: ({ talent, attr, calc }, { basic }) => basic((calc(attr.hp) * talent.a['破局矢伤害'] / 100) * 152 / 100, 'a2')
}]
