import LSconfig from '../../../../../plugins/liangshi-calc/components/LSconfig.js'
import { mainAttrData, ObTalentName, RankingKey } from '../index.js'
import { CalcBuff } from './CalcBuff.js'

let CharacterName = "梦见月瑞希"
let cfg = LSconfig.getConfig('user', 'config')
let energy = cfg.energymodel || 0
let TalentName = ObTalentName(CharacterName)
export const defDmgKey = RankingKey(CharacterName)
export const mainAttr = mainAttrData[CharacterName]
export const defParams = { ElementSame: 1, NormalElement: 3, ElementDmg: 5, ReactionTime: 1, ReactionDmg: 5, FightTime: 5, HealDetermine: true, ElementWindTeam: 1, HealTeamDetermine: true, EnergyTeammate: 60 }
export const buffs = CalcBuff
export const details = [
{
  title: `${TalentName.eName}释放伤害`,
  dmgKey: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},
{
  title: `${TalentName.eName}持续伤害`,
  params: { SkillsUse: 1, SkillsHit: 4, SkillsDmg: 4 },
  dmg: ({ talent }, dmg) => dmg(talent.e['持续攻击伤害'], 'e')
},
{
  title: `${TalentName.qName}释放伤害`,
  params: { EnergyDetermine: 0, BurstUse: 1, BurstHit: 1, BurstDmg: 1 },
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},
{
  title: `${TalentName.qName}点心伤害`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, HealNumber: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.q['梦念冲击波伤害'], 'q')
},
{
  title: `${TalentName.qName}点心治疗`,
  params: { BurstUse: 1, BurstHit: 3, BurstDmg: 3, HealNumber: 2 },
  dmgKey: 'h',
  dmg: ({ attr, calc, talent, cons }, { heal }) => heal(talent.q['拾取点心回复生命值2'][0] * calc(attr.mastery) / 100 + talent.q['拾取点心回复生命值2'][1] * 1)
},
{
  title: '扩散反应伤害',
  dmgKey: 'r',
  dmg: ({ attr, calc, talent, cons }, { reaction }) => {
    let { avg } = reaction('swirl')
    let cons6dmg = cons >= 6 ? 2 : 1
    let cons6avg = cons >= 6 ? 1.3 : 1
    return {
      dmg: cons >= 6 ? (avg * cons6dmg) : undefined,
      avg: avg * cons6avg
    }
  }
},
{
  title: '二十三夜待扩散反应',
  check: ({ cons }) => cons >= 1,
  params: { Twenty_Three_Nights: true },
  dmg: ({ attr, calc, talent, cons }, { reaction }) => {
    let { avg } = reaction('swirl')
    let cons6dmg = cons >= 6 ? 2 : 1
    let cons6avg = cons >= 6 ? 1.3 : 1
    return {
      dmg: cons >= 6 ? (avg * cons6dmg) : undefined,
      avg: avg * cons6avg
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
]
]
