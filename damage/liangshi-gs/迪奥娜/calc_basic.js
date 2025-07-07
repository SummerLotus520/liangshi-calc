import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "迪奥娜"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, ElementIceTeam: 1, EnergyTeammate: 80, HealDetermine: true, HealTeamDetermine: true, ShieldDetermine: true }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.a2Name}伤害`,
  params: { ChargedUse: 1, ChargedHit: 1, ChargedDmg: 1 },
  dmgKey: 'z',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
},
{
  title: '冻冻猫猫爪伤害',
  params: { Icy_Paws: 1, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['猫爪伤害'], 'e')
},
{
  title: `长按${TalentName.eNameT}总伤害`,
  params: { Icy_Paws: 5, SkillsHit: 3, SkillsDmg: 3 },
  dmgKey: 'e',
  dmg: ({ talent, params }, dmg) => {
    let e1 = dmg(talent.e['猫爪伤害'], 'e')
    return {
      dmg: e1.dmg * params.Icy_Paws,
      avg: e1.avg * params.Icy_Paws
    }
  }
},
{
  title: `短按${TalentName.eName}护盾量`,
  params: { Icy_Paws: 2, SkillsHit: 2, SkillsDmg: 2 },
  dmg: ({ talent, attr, calc }, { shield }) => shield(talent.e['护盾基础吸收量2'][0] * calc(attr.hp) / 100 + talent.e['护盾基础吸收量2'][1] * 1)
},
{
  title: `长按${TalentName.qName}护盾量`,
  params: { Icy_Paws: 5, SkillsHit: 3, SkillsDmg: 3 },
  dmgKey: 'h',
  dmg: ({ talent, attr, calc }, { shield }) => shield(talent.e['护盾基础吸收量2'][0] * calc(attr.hp) / 100 + talent.e['护盾基础吸收量2'][1] * 1)
},
{
  title: `${TalentName.qName}伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: '冰气酒雾领域伤害',
  params: { Drunken_Mist: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['领域持续伤害'], 'q')
},
{
  title: `${TalentName.qName}每跳治疗`,
  params: { Drunken_Mist: true, EnergyDetermine: 0, BurstUse: 1, BurstHit: 5, BurstDmg: 5 },
  dmg: ({ talent, calc, attr }, { heal }) => heal(talent.q['持续治疗量2'][0] * calc(attr.hp) / 100 + talent.q['持续治疗量2'][1] * 1)
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
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) })
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) })
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) })
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '当前遗器套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]]
