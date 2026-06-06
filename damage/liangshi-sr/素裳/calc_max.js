import { buildMaxCalc } from '../../max-loader.js'

const max = await buildMaxCalc({
  baseUrl: import.meta.url,
  sources: [
    {
        "label": "本地梁氏基础",
        "path": "./calc_basic.js"
    },
    {
        "label": "上游master梁氏基础",
        "path": "../../liangshi-master-sr/素裳/calc_basic.js"
    },
    {
        "label": "上游team梁氏基础",
        "path": "../../liangshi-team-sr/素裳/calc_basic.js"
    },
    {
        "label": "miao-plugin单人",
        "path": "../../miao-sr/素裳/calc.js"
    }
]
})

export const details = max.details
export const buffs = max.buffs
export const defParams = max.defParams
export const defDmgIdx = max.defDmgIdx
export const defDmgKey = max.defDmgKey
export const mainAttr = max.mainAttr
export const enemyName = max.enemyName
export const createdBy = '梁氏Max'
