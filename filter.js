// const people = [
//     {
//         name: 'Shashwat',
//         age:27
//     },
//     {
//         name: 'Shrey',
//         age:20
//     },
//     {
//         name: 'Anurag',
//         age:15
//     }
// ]

// const adults = people.filter(value => value.age>=18);

// console.log(adults);

// remove duplicacy

const numbers = [1,2,3,2,1,2,4,5,3,2,2];

const nums = numbers.filter((value,index,arr) => {
    return arr.indexOf(value) === index;
});
//indexOf returns the first value of occurance of array
console.log(nums);