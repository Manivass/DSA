// Linear Search
/*
let num = [4,9,12,1,3,5];
let target = 5 ;
function funcIndex(n,target){
    for(let i = 0 ; i < n.length ; i++ ){
        if(n[i]===target) return i ;
    }
    return -1 ;
}
const findIndex = funcIndex(num,target);
console.log(findIndex);
*/

// Binary Search
/*
let num = [-4 , -2 , 0 , 4, 8 , 9 , 24 , 56 ];
function funcBinarySearch(nums , target ){
    let left  = 0 ;
    let right = nums.length - 1 ;
    while(right >= left ){
        let middle = Math.floor((left+right)/2);
        if(nums[middle]===target) return middle ;
        if(nums[middle] > target) {
            right = middle - 1 ;
        }
        else{
            left = middle + 1 ;
        }
    }
    return - 1 ;
}
console.log(funcBinarySearch(num,256));
*/

// First Occurance in Search

// arr = [0 ,1 ,1, 1,  2, 2, 3, 4]
// target = 2

// Brute Force => O(n) => Linear Seach
/*
for(let i = 0 ; i < arr.length ; i++ ){
    if(arr[i]===target){
        console.log(i);
    }
}
*/

// Optimized code => O(log n) => Binary Search
/*
function firstOccurance(nums,target){
    let left  = 0 ; 
    let right = nums.length - 1 ;
    let ans = - 1 ;
    while(left <= right ){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            ans = mid ;
            right = mid - 1 ;
        }
        else if(nums[mid]>target){
            right = mid - 1 ;
        }
        else{
            left = mid + 1 
        }
    }
    return ans ;
}

console.log(firstOccurance(arr,1));
*/

// Last Occurance in Search

// arr = [0, 1, 1, 1, 2, 2, 3, 4];

// Brutce Force => O(n) => Linear Seach
/*
function funcLastOccurance(nums, target) {
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && nums[i + 1] > target) {
      ans = i;
    }
  }
  return ans;
}
*/

// Optimized Code => O(log n) => Binary Search 
/*
function funcLastOccurance(nums,target){
    let left  = 0 ; 
    let right = nums.length - 1 ;
    let ans = - 1 ;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if(nums[middle]===target){
            ans = middle ;
            left = middle + 1 ;
        }
        else if(nums[middle] > target){
            right = middle - 1 ;
        }
        else{
            left = middle + 1 ;
        }
    }
    return ans ;
}
*/

// console.log(funcLastOccurance(arr,3));

// Peak Element 

// Brute Force => O(n) => Linear Search 

// const nums = [1 , 2 , 6 , 4 , 5];

/*
function funcPeakElement(nums){
    let PeakElementIndex = 0 ;
    for(let i = 0 ; i < nums.length ; i++ ){
        if(i === 0 && nums[i] > nums[i+1]){
            PeakElementIndex = i ;
        }
        else if(i === nums.length - 1 && nums[i] > nums[i-1]){
            PeakElementIndex = i ;
        }
        else if(nums[i] > nums[i+1] && nums[i] > nums[i-1]){
            PeakElementIndex = i ;
        }
    }
    return PeakElementIndex ;
}
*/

// Optimized Code  => O(logn) => BinarySearch 
/*
function funcPeakElement(nums){
    let left = 0 ;
    let right = nums.length - 1 ;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        if(nums[mid] > nums[mid+1]){
            right = mid ;
        }
        else{
            left = mid + 1 ;
        }
    }
    return left ;
}
*/

// const PeakElement = funcPeakElement(nums);
// console.log(PeakElement);


