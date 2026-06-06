const emptyCalc = {
  details: [],
  buffs: [],
  defParams: {},
  defDmgIdx: -1,
  defDmgKey: '',
  mainAttr: '',
  enemyName: ''
}

function asArray (value) {
  return Array.isArray(value) ? value : []
}

function firstDetails (mod = {}) {
  if (Array.isArray(mod.details)) return mod.details
  if (Array.isArray(mod.CalcMeasure)) return mod.CalcMeasure
  if (Array.isArray(mod.AllCalc)) return mod.AllCalc
  return []
}

function mergeParams (target, params = {}) {
  Object.entries(params || {}).forEach(([key, value]) => {
    if (typeof target[key] === 'undefined') {
      target[key] = value
    }
  })
}

function fillMeta (target, mod = {}, detailStart = 0) {
  if (!target.defDmgKey && mod.defDmgKey) target.defDmgKey = mod.defDmgKey
  if (!target.mainAttr && mod.mainAttr) target.mainAttr = mod.mainAttr
  if (!target.enemyName && mod.enemyName) target.enemyName = mod.enemyName
  if (target.defDmgIdx < 0 && Number.isInteger(mod.defDmgIdx) && mod.defDmgIdx >= 0) {
    target.defDmgIdx = detailStart + mod.defDmgIdx
  }
  mergeParams(target.defParams, mod.defParams)
}

export async function buildMaxCalc ({ baseUrl, sources = [] }) {
  const ret = {
    details: [],
    buffs: [],
    defParams: {},
    defDmgIdx: -1,
    defDmgKey: '',
    mainAttr: '',
    enemyName: ''
  }

  for (const source of sources) {
    try {
      const mod = await import(new URL(source.path, baseUrl))
      const detailStart = ret.details.length
      const details = firstDetails(mod)
      ret.details.push(...details)
      ret.buffs.push(...asArray(mod.buffs))
      fillMeta(ret, mod, detailStart)
    } catch (err) {
      if (source.required) {
        console.error(`[liangshi-calc] 梁氏Max规则加载失败: ${source.path}`, err)
      }
    }
  }

  return {
    ...emptyCalc,
    ...ret,
    mainAttr: ret.mainAttr || 'atk,cpct,cdmg',
    enemyName: ret.enemyName || '小宝'
  }
}
