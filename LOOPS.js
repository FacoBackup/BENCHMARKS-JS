

const entities = [] 

for (let i = 0; i < 10000000; i++)
    entities[i] = {id: i}

let start = performance.now()
for(let i in entities){
    entities[i]
}
const inLoop = performance.now() - start

start = performance.now()
for(let i = 0; i < entities.length; i++){
    entities[i]
}
const forLoop = performance.now() - start

start = performance.now()
{
    let i=0
    while(i < s){
        entities[i]
        i++
    }
}
const whileLoop = performance.now() - start


start = performance.now()
entities.forEach(e => {
    e
})
const forEachLoop = performance.now() - start

start = performance.now()
for(let i of entities){
    i
}
const ofLoop = performance.now() - start

console.log( {
    forEachLoop,
    whileLoop,
    forLoop,
    inLoop,
    ofLoop,
})
