const item = [{ name: 'Bike', price: 100 },
{ name: 'TV', price: 200 },
{ name: 'Album', price: 10 },
{ name: 'Book', price: 5 },
{ name: 'Phone', price: 500 },
{ name: 'Computer', price: 1000 }];

//find the cheapest price
const lowest = item.reduce((acc, cur) => {
    if (acc.price < cur.price) {
        return acc;
    } else {
        return cur;
    }
}, { name: '', price: Infinity });
console.log('cheapest item is: ', lowest);

//find the expensive price
const highest = item.reduce((acc, cur) => {
    if (acc.price > cur.price) {
        return acc;
    } else {
        return cur;
    }
}, { name: '', price: -Infinity });
console.log('expensive item is: ', highest);

//Find the total price
const total = item.reduce((acc, cur) => acc + cur.price, 0);
console.log('Total price: ', total);

//total price minus item with price below 10 
const totalPrice = item.reduce((acc, cur) => {
    if (cur.price >= 10) {
        return acc + cur.price;
    } else {
        return acc;
    }
}, 0);
console.log('Total price minus items with price below 10 dollar: ', totalPrice);
