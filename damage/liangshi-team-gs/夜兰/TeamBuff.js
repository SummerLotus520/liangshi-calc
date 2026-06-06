export const TeamBuff_Ye_Lan = [
{
  check: ({ params }) => params.team === true && params.Ye_Lan === true && !params.TruceTime,
  title: '夜兰天赋：[猜先有方] 「玄掷玲珑」存在[buff]秒，使队伍中自己的当前场上角色造成的伤害提高[dmg]%',
  data: {
    buff: 7.5,
    dmg: 7.5 * 3.5 + 1
  }
}]
