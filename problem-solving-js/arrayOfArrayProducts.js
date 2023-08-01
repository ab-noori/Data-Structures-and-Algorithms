function arrayOfArrayProducts(arr) {
  let product = [];
  
  if(arr.length == 0 || arr.length == 1) return product;
  
  for(let i = 0; i < arr.length; i++){
    let prod = 1;
    for( let j = 0; j < arr.length; j++){
      if(i != j){
       prod *= arr[j];
     }
    }
    product[i] = prod;
   }
   return product;
}

arrayOfArrayProducts([1,2,3,4])
