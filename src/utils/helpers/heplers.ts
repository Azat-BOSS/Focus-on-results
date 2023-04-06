export const getIndex = (crnPages: number, perPage: number, arr?: any) => {
  const lastCountryIndex = crnPages * perPage
  const firstCountryIndex = lastCountryIndex - perPage
  const resArr = arr.slice(firstCountryIndex, lastCountryIndex)
  return {
    lastIdx: lastCountryIndex,
    firstIdx: firstCountryIndex,
    resArr: resArr
  }
}

export const getTotalBtn = (perPage: number, arrLength: number) => {
  let resArr = []
  for(let i = 1; i <= Math.ceil(arrLength / perPage); i++) {
    resArr.push(i)
  }
  return resArr
}

export const getUniqArr = (arr: any) => {
  let hash: any = {}
  let uniq = arr.filter((obj: any) => obj.id in hash ? 0 : (hash[obj.id] = 1))
  return uniq
}

