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


// Insertion Sorting 

/*
let nums = [7 , 4 , 3 , 5 , 1 , 2];
for(let i = 1 ; i < nums.length ; i++ ){
  let prev = i - 1 ;
  let current = nums[i];
  while(nums[prev] > current ){
    nums[prev + 1 ] = nums[prev];
    prev-- ;
  }
  nums[prev+1] = current ;
}
console.log(nums);
*/


// Merge Sort 
/*
let nums = [7 , 4 , 3 , 5 , 1 , 2];

function Merge(arr1,arr2){
  let res = [] ;
  let i = 0 ;
  let j = 0 ;
  while(i<arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
      res.push(arr1[i]);
      i++;
    }
    else 
    {
      res.push(arr2[j]);
      j++;
    }
  }
  return [...res , ...arr1.slice(i) , ...arr2.slice(j)];
}

function MergeSort(nums){
  if(nums.length===1) return nums ;
  let middle = Math.floor(nums.length/2);
  let left = MergeSort(nums.slice(0,middle));
  let right = MergeSort(nums.slice(middle));
  return Merge(left , right );
}

const sort = MergeSort(nums);
console.log(sort);
*/


