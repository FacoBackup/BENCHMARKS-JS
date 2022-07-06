const entities = []

for (let i = 0; i < 3000000; i++)
  entities[i] = {id: i}

let start = 0, time = 0
const doIt = (withMap, callID) => {
  const map = withMap ? new Map() : {}
  const length = entities.length

  if (withMap) {
      for (let i = 0; i < length; i++) {

          map.set(entities[i].id, entities[i].id)
      }
      start = performance.now()
      map.values()
      time = (performance.now() - start) / 1000
  }
  else{
      for (let i = 0; i < length; i++) {
          map[entities[i].id] = entities[i].id
      }
      start = performance.now()
      Object.values(map)
      time = (performance.now() - start) / 1000
  }
  console.log({
      callID,
      time,
      withMap
  })
  return time
}
let map = 0, object = 0, qMap = 0, qObj = 0
for (let i = 0; i < 12; i++) {
  if(i < 5)
      continue
  const withMap = !(i % 2)
  const result = doIt(withMap, i - 5)

  if (withMap) {
      qMap++
      map += result
  } else {
      qObj++
      object += result
  }
}

console.log({
  object: object/qObj,
  map: map/qMap,
  difference: Math.abs(map - object)
})
