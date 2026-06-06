import { characterBuffGs, enemyBuffGs, ImaginariumBuff, MasteryGs } from '../../../resources/CalcBuff/index.js'

export const CalcBuff = [
characterBuffGs,
enemyBuffGs,
ImaginariumBuff,
MasteryGs,
{
  title: '旅行者2命：[革新的旋风] 元素充能效率提升[recharge]%',
  cons: 2,
  data: {
    recharge: 16
  }
},
{
  title: '旅行者4命：[眷护的和风] 风涡剑持续期间，受到的伤害降低[_reduction]%',
  cons: 4,
  data: {
    _reduction: 10
  }
},
{
  title: '旅行者6命：[纠缠的信风] 受到风息激荡伤害的目标，元素抗性下降[kx]%',
  check: ({ params }) => params.Gust_Surge === true,
  cons: 6,
  data: {
    kx: 20
  }
}]