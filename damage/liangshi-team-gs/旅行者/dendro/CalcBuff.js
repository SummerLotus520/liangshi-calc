import { characterBuffGs, enemyBuffGs, ImaginariumBuff, MasteryGs } from '../../../../resources/CalcBuff/index.js'

export const CalcBuff = [
characterBuffGs,
enemyBuffGs,
ImaginariumBuff,
MasteryGs,
{
  title: '旅行者天赋：[蔓生的埜草] 草灯莲将在其存在期间获得[buff]层莲光遍照效果，使其领域内的当前场上角色的元素精通提升[mastery]点元素精通。',
  check: ({ params }) => !params.TruceTime,
  data: {
    buff: ({ params }) => params.Overflowing_Lotuslight || 0,
    mastery: ({ params }) => Math.min(((params.Overflowing_Lotuslight || 0) * 6), 60)
  }
},
{
  title: '旅行者天赋：[繁庑的丛草] 草缘剑造成的伤害提升[eDmg]%，偃草若化造成的伤害提升[qDmg]%',
  sort: 9,
  data: {
    eDmg: ({ calc, attr }) => Math.min(100, (calc(attr.mastery)) * 0.15),
    qDmg: ({ calc, attr }) => Math.min(100, (calc(attr.mastery)) * 0.1)
  }
},
{
  title: '旅行者1命：[寄身的倚草] 草缘剑命中敌人后，将恢复[_energyevery]点元素能量。',
  cons: 1,
  data: {
    _energyevery: 3.5
  }
},
{
  title: '旅行者2命：[健韧的劲草] 草灯莲的存在时间延长[_qSustainedPlus]秒。',
  cons: 2,
  data: {
    _qSustainedPlus: 3
  }
},
{
  title: '旅行者6命：[蕴思的霜草] 处于草灯莲的莲光遍照效果影响下的角色获得[dmg]%元素伤害加成.',
  check: ({ params }) => (params.Overflowing_Lotuslight || 0) > 0,
  cons: 6,
  data: {
    dmg: 12
  }
}]
