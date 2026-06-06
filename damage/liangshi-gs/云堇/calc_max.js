import { buildMaxCalc } from '../../max-loader.js'

const max = await buildMaxCalc({
  baseUrl: import.meta.url,
  sources: [
    {
        "label": "本地梁氏超全",
        "path": "./calc_complete.js"
    },
    {
        "label": "本地梁氏基础",
        "path": "./calc_basic.js"
    },
    {
        "label": "本地梁氏大爷",
        "path": "./calc_li.js"
    },
    {
        "label": "上游master梁氏超全",
        "path": "../../liangshi-master-gs/云堇/calc_complete.js"
    },
    {
        "label": "上游master梁氏基础",
        "path": "../../liangshi-master-gs/云堇/calc_basic.js"
    },
    {
        "label": "上游master梁氏大爷",
        "path": "../../liangshi-master-gs/云堇/calc_li.js"
    },
    {
        "label": "上游team梁氏超全",
        "path": "../../liangshi-team-gs/云堇/calc_complete.js"
    },
    {
        "label": "上游team梁氏基础",
        "path": "../../liangshi-team-gs/云堇/calc_basic.js"
    },
    {
        "label": "上游team梁氏大爷",
        "path": "../../liangshi-team-gs/云堇/calc_li.js"
    },
    {
        "label": "miao-plugin单人",
        "path": "../../miao-gs/云堇/calc.js"
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
