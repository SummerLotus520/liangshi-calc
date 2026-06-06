import fs from 'node:fs'

function RankingKey (CharacterName) {
  try {
    const dataUrl = new URL('./data/Ranking.json', import.meta.url)
    const ranking = JSON.parse(fs.readFileSync(dataUrl, 'utf8'))[CharacterName]
    if (Array.isArray(ranking)) return ranking.find(Boolean) || 'dmg'
    return ranking || 'dmg'
  } catch {
    return 'dmg'
  }
}

export { RankingKey }
