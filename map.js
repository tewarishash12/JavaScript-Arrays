const items =[
    {
        name: 'laptop',
        price: 60000,
        count: 5
    },{
        name: 'desktop',
        price: 70000,
        count: 10
    }, {
        name: 'phone',
        price: 20000,
        count: 15
    }
];

const productsCost = items.map((values) => ({
    name: values.name,
    cost: values.price*values.count
}));

console.log(productsCost);