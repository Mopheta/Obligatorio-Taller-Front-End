const searchByName = (search) => {
    return products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
}

// const cart = {
//     items:[{
//         product: product,
//         quantity: 0,          
//     }],  
//     quantityOfProducts: 0,
//     totalAmount: 0,
//     subtotal: 0,
//     iva: 0
// }

const totalCalculation = (cart, item) => {
    const { price } = item;
    const totalIva = (price * 1.22) - price;

    //Aplico el iva al precio, se lo resto
    const finalTotal = price + totalIva;

    //precio con el iva calculado
    cart.totalAmount += finalTotal;
    cart.subtotal += price;
    cart.iva += totalIva;
}

const addToCart = (cart, item) => {

    let product = cart.find(e => e.product._id === item._id);

    if (!product) {
        cart.push({
            product: item,
            quantity: 1
        })
    } else {
        cart.filter((e) => {
            if (e.product._id === item._id) {
                e.quantity++;
            }
        })
    }
    totalCalculation(cart, item);
    cart.quantityOfProducts++;
}

const countCartItems = (cart) => {
    return cart.quantityOfProducts;
}

const countCartTotalAmount = (cart) => {
    const { totalAmount, subtotal, iva } = cart;

    const totalSpend = {
        totalAmount,
        subtotal,
        iva
    }
    return totalSpend;
}

export {searchByName, totalCalculation, addToCart, countCartItems, countCartTotalAmount};