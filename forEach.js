const letters = ['d','a','b','d','a','c','d','a','c','b','d','b','c','a'];
let count = {};
letters.forEach(item => {
    if(count[item])
        count[item]++;
    else
        count[item]=1;
});

console.log(count);