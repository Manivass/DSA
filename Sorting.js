// Bubble Sort

/*
let arr = [ 8 , 3 ,6 , 1 ,12 , 2  ];
for (let i = 0; i < arr.length - 1; i++) {
    let isSwapped = false ; //break the loop if already sorted 
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp;
      isSwapped = true ;
    }
  }
  if(!isSwapped){
    break ;
  }
}
console.log(arr);
*/


// Selection Sort 
/*
let nums = [ 8 , 3 ,6 , 1 ,12 , 2  ]; 
for(let i = 0 ; i < nums.length - 1 ; i++ ){
    let min = i ; 
    for(let j = i + 1 ; j < nums.length ; j++ ){
        if(nums[j] < nums[min]){
            min = j ;
        }
    }
    if(min!=i){
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp ;
    }
}

console.log(nums);
*/
