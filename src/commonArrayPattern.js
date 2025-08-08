//COMMON PATTERNS FOR UPDATING ARRAY INSTANCE

const shoppingCart = [
    {id: 1, product: "HDMI cable", price: 400},
    {id: 2, product: "Easy Bake Oven", price: 5000},
    {id: 3, product: "Apple pie", price: 300},
]

//ADDING TO AN ARRAY
const newArray = [...shoppingCart, {id: 4, product: "Coffe mug", price: 500}];

//REMOVING AN ELEMENT
const newArray2 = shoppingCart.filter((item) => item.id!== 2);

//UPDATE ALL ELEMENTS IN AN ARRAY
const newArray3 = shoppingCart.map((item) => {
    return {...item, product: item.product.toLowerCase()}
})

//MODIFYING A PARTICULAR ELEMENT IN AN ARARY
const newArray4 = shoppingCart((item) => {
    if(item.id === 3) {
        return {...item, price: 600};
    } else {
        return item;
    }
})