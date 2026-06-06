import { LSconfig } from '#liangshi'
import { DefaultRankingData } from './DefaultRanking.js'
import { BasicMiss } from './BasicMissKey.js'
import fs from 'node:fs'

function getUserRankingData () {
  try {
    const file = 'plugins/liangshi-calc/config/ranking.js'
    if (!fs.existsSync(file)) return {}
    return fs.readFileSync(file, 'utf8')
      .replace(/^\s*\/\/.*$/gm, '')
      .match(/UserRankingData\s*=\s*(\{[\s\S]*\})/)?.[1] || '{}'
  } catch {
    return {}
  }
}

function RankingKey(CharacterName) {
  let cfg = LSconfig.getConfig('user', 'config')
  let miss = BasicMiss[CharacterName] || []
  let userRanking = {}
  try {
    userRanking = Function(`return (${getUserRankingData()})`)()
  } catch {
    userRanking = {}
  }
  let rankingOnePath = cfg.rankingOnemodel || 'm'
  let rankingTwoPath = cfg.rankingTwomodel || 'hps'
  let rankingThreePath = cfg.rankingThreemodel || 'dps'
  let ranking = 'undefined'
  if (!userRanking[CharacterName]) {
    if (rankingOnePath == 'm') {
      ranking = DefaultRankingData[CharacterName]
    } else if (miss.includes(rankingOnePath)) {
      if (rankingTwoPath == 'm') {
        ranking = DefaultRankingData[CharacterName]
      } else if (miss.includes(rankingTwoPath)) {
        if (rankingThreePath == 'm') {
          ranking = DefaultRankingData[CharacterName]
        } else if (miss.includes(rankingThreePath)) {
          logger.mark(`[${CharacterName}] 排名规则均未命中，已选择默认排名规则`)
          ranking = DefaultRankingData[CharacterName]
        } else {
          ranking = `${rankingThreePath}`
        }
      } else {
        ranking = `${rankingTwoPath}`
      }
    } else {
      ranking = `${rankingOnePath}`
    }
  } else {
    ranking = userRanking[CharacterName]
  }
  return ranking
}

export { RankingKey }
