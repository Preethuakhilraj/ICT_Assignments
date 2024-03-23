var array=[2,2,4];
let result=sumOfSquares(array,array.length);
console.log(" Sum of Squares of array is :", result)
function sumOfSquares(arr,n){
    var sum=0;
    for(let i=0;i<n;i++){
          sum+= arr[i]*arr[i]
    }
    return sum;
}