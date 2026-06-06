import { Data, LSconfig } from '#liangshi'
import { miaoPath, rootPath } from '../../miao-plugin/tools/path.js'
import lodash from 'lodash'
import fs from 'node:fs'
import path from 'node:path'

const cfgL = LSconfig.getConfig('user', 'config')

function toPosix (value) {
  return value.split(path.sep).join('/')
}

function listMiaoChars (game) {
  const charRoot = `${miaoPath}/resources/meta-${game}/character`
  if (!fs.existsSync(charRoot)) return []
  return fs.readdirSync(charRoot).filter(name => {
    return fs.statSync(path.join(charRoot, name)).isDirectory()
  })
}

function listMaxChars (game) {
  const charRoot = `${rootPath}/plugins/liangshi-calc/damage/liangshi-${game}`
  const ret = []
  if (!fs.existsSync(charRoot)) return ret

  function walk (dir) {
    if (fs.existsSync(path.join(dir, 'calc_max.js'))) {
      ret.push(toPosix(path.relative(charRoot, dir)))
    }
    fs.readdirSync(dir, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .forEach(entry => walk(path.join(dir, entry.name)))
  }

  walk(charRoot)
  return ret
}

function localExists (game, char, file) {
  return fs.existsSync(`${rootPath}/plugins/liangshi-calc/damage/liangshi-${game}/${char}/${file}.js`)
}

function miaoExists (game, char, file) {
  return fs.existsSync(`${miaoPath}/resources/meta-${game}/character/${char}/${file}.js`)
}

async function localCfg (game, char, file, key = '') {
  const cfg = await Data.importModule(`damage/liangshi-${game}/${char}/${file}.js`)
  return key ? cfg[key] : cfg
}

async function miaoCfg (game, char, file, key = '') {
  const cfg = await Data.importModule(`resources/meta-${game}/character/${char}/${file}.js`, 'miao')
  return key ? cfg[key] : cfg
}

async function buildCfgMap (game = 'gs') {
  const chars = new Set([...listMiaoChars(game), ...listMaxChars(game)])
  const map = {}

  for (const char of chars) {
    const curr = {}

    if (miaoExists(game, char, 'artis_user')) {
      curr.artis = await miaoCfg(game, char, 'artis_user', 'default')
    } else if (localExists(game, char, 'artis_adaptive') && cfgL.artisLiangZ) {
      curr.artis = await localCfg(game, char, 'artis_adaptive', 'default')
    } else if (localExists(game, char, 'artis_basic') && cfgL.artisLiang) {
      curr.artis = await localCfg(game, char, 'artis_basic', 'default')
    } else if (miaoExists(game, char, 'artis')) {
      curr.artis = await miaoCfg(game, char, 'artis', 'default')
    }

    if (localExists(game, char, 'calc_max')) {
      curr.calc = await localCfg(game, char, 'calc_max')
    }

    map[char] = curr
  }

  return map
}

const cfgMapGs = await buildCfgMap('gs')
const cfgMapSr = await buildCfgMap('sr')

function calcRule (cfg) {
  if (!cfg || lodash.isEmpty(cfg)) return false
  return {
    details: cfg.details || false,
    buffs: cfg.buffs || [],
    defParams: cfg.defParams || {},
    defDmgIdx: cfg.defDmgIdx || -1,
    defDmgKey: cfg.defDmgKey || '',
    mainAttr: cfg.mainAttr || 'atk,cpct,cdmg',
    enemyName: cfg.enemyName || '小宝'
  }
}

const CharCfg = {
  getCalcRule (char) {
    const charName = char.isTraveler ? `旅行者/${char.elem}` : char.name
    const map = char.game === 'sr' ? cfgMapSr : cfgMapGs
    return calcRule(map[charName]?.calc)
  },

  getArtisCfg (char) {
    if (char.game !== 'sr') {
      const charName = char.isTraveler ? '旅行者' : char.name
      return cfgMapGs[charName]?.artis || false
    }
    return cfgMapSr[char.name]?.artis || false
  }
}

export default CharCfg
