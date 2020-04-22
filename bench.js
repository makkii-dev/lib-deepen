const { deepen } = require('./index.js')

const keywords = [
    'a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x',
    'y','z'
]

const columns = 10
const rows = 10
const size = 3

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function build(){
    const matrix = []
    for(let i = 0; i < rows; i ++){
        matrix[i] = []
        for(let ii = 0; ii < rows; ii ++){
            matrix[i][ii] = []
            for(let iii = 0; iii < size; iii ++){
                matrix[i][ii].push(keywords[parseInt(rand(0, 26))])
            }
        }
    }
    console.log(matrix)
    return matrix
}

let cost = []

for(let i = 0; i < 1000; i++){
    const matrix = build()
    let t = new Date()
    console.log(deepen(matrix))
    cost.push(new Date() - t)
}

let average = (array) => array.reduce((a, b) => a + b) / array.length
console.log('cost avg', average(cost))