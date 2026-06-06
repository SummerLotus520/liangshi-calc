import CharCfg from '../../miao-plugin/models/character/CharCfg.js'
import ProfileDmg from '../../miao-plugin/models/ProfileDmg.js'
import _CharCfg from '../replace/CharCfg.js'
import fs from 'node:fs'

function normalizeName (name, game) {
  if (game !== 'sr') return name
  return /^(星|穹)·/.test(name) ? name.replace(/^(星|穹)·/, '开拓者') : name
}

const LSstart = {
  init () {
    ProfileDmg.dmgRulePath = (name, game = 'gs') => {
      const root = process.cwd()
      const charName = normalizeName(name, game)
      const path = `${root}/plugins/liangshi-calc/damage/liangshi-${game}/${charName}/calc_max.js`

      if (fs.existsSync(path)) {
        return { path, createdBy: '梁氏Max' }
      }

      return false
    }
    CharCfg.getCalcRule = _CharCfg.getCalcRule
    CharCfg.getArtisCfg = _CharCfg.getArtisCfg
  }
}

export default LSstart
