
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
    }
    const newArr = [...matrix].map((elem,index) =>{
        if(typeof matrix !== 'undefined'){
            if(!elem || elem == 0){
            }
            else if(index % 2){
                return elem.reverse();
            }
            return elem;         
        }
        
        });
     
    return newArr.flat(Infinity);
    }

    // const zeroArr = matrix;
    // if (!zeroArr  || zeroArr == 0){
    //     return [];
    // }
    // let result = matrix.map(function(elem,index){
    //     if(index % 2){
    //         return elem.reverse();
    //     }
       
    // })
    // return result;
    // for(let i = zeroArr.length % 2  ; i >= 0; i++){
    //     return zeroArr[i].reverse();
    // }
 


        
// const arr = Array.from(matrix);
    // arr.forEach(index =>{
    //     if(index % 2 == 0){
    //       return arr.reverse(elem);
    //     }
    // });
    // return [arr];
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; arr[i].length % 2 == 0; j++){
    //         arr.reverse();
    //     }
    // }
    
    // arr.reverse(forEach(element => {
    //     element % 2 == 0;
    // }));
    // return arr; //.flat(Infinity)

    // var b = matrix.filter((index)=>index%2==0).concat(matrix.filter((index)=>index%2==0));    
    // matrix.forEach(index) => {
    //     matrix.reverse(index % 2 ==0)
    // };
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {


// let result = arr.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// for(i = 0 ; i < matrix.length ; i++)

    // let NewMatrix = matrix.flat(Infinity);
    //arr.flat(depth)
    // let NewMatrix = matrix.filter((index)=>index%2==0);
    // let SuperNewMAtrix = NewMatrix.flat(Infinity);
