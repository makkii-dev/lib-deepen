/**
 * matrix is 3-d arrays 
 * eg: matrix[rows][columns][tags]
 */
module.exports.deepen = function(
    matrix
){

    let m = matrix.length
        mm = matrix[0].length

    let a_m = m / 2 
    let a_mm = mm / 2
    
    let tags_0 = {}
    
    for(let i = 0; i < m; i ++){
        for(let ii = 0; ii < mm; ii ++){
            for(let iii = 0, mmm = matrix[i][ii].length; iii < mmm; iii ++){
                let tag = matrix[i][ii][iii]
                let dis = Math.sqrt(Math.pow((i - a_m),2) + Math.pow((ii - a_mm),2))
                let score = dis == 0 ? 1 : (1 / dis)
                if(tags_0[tag]){
                    tags_0[tag] += score
                } else {
                    tags_0[tag] = score
                }
            }
        }
    }

    let tags_1 = []

    Object.entries(tags_0).forEach((item) => {
        tags_1.push({k: item[0],v: item[1]})
    })

    tags_1.sort((a, b)=>{
        return b.v - a.v
    })

    return tags_1
}