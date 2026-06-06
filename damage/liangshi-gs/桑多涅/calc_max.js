import { buildMaxCalc } from '../../max-loader.js'

const max = await buildMaxCalc({
  baseUrl: import.meta.url,
  sources: [
    {
        "label": "lolomi-calc",
        "path": "../../lolomi-gs/桑多涅/calc_llm.js"
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
