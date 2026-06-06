import { exec } from 'child_process'
import plugin from '../../../lib/plugins/plugin.js'

const _path = process.cwd()

export class calc extends plugin {
  constructor () {
    super({
      name: 'calc',
      dsc: '梁氏Max伤害计算更新',
      event: 'message',
      priority: 5000,
      rule: [
        {
          reg: '^#*(强制)?更新(.*)(原神|星铁|崩坏星穹铁道|崩坏：星穹铁道|铁道)(.*?)(计算|伤害计算)$',
          fnc: 'calc'
        }
      ]
    })
  }

  async calc (e) {
    if (!e.isMaster) {
      e.reply('只有主人才能更新哦~(*/ω＼*)')
      return false
    }

    e.reply('开始更新梁氏Max，请耐心等待~')
    exec('git pull --ff-only', { cwd: `${_path}/plugins/liangshi-calc` }, (error, stdout) => {
      console.log(stdout)
      if (/(Already up[ -]to[ -]date|已经是最新的)/.test(stdout)) {
        e.reply('梁氏Max已经是最新了~')
        return
      }
      if (error) {
        e.reply(`梁氏Max更新失败！\nError code: ${error.code}\n${error.stack}\n请稍后重试。`)
        return
      }
      e.reply('梁氏Max更新成功~')
    })
    return true
  }
}
