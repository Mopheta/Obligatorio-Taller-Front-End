const searchByName = (search) => {
    //return products.filter(prod => prod.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)
}

const totalCalculation = (cart, item) => {
    const { price } = item;

    let precioFinalRenglon = price * (item.quantity || 1)
    let precioNetoRenglon = precioFinalRenglon - (precioFinalRenglon * 0.22);

    let precioFinal = +cart.totalAmount + precioFinalRenglon;
    let precioNetoFinal = +cart.subTotal + precioNetoRenglon;
    let ivaFinal = +cart.iva + (precioFinalRenglon - precioNetoRenglon);

    // const totalWithoutIva = price * (item.quantity || 1);
    // const totalIva = (totalWithoutIva - (totalWithoutIva * 0.22));

    //precio con el iva calculado
    cart.totalAmount = parseFloat(precioFinal).toFixed(2);
    cart.subTotal = parseFloat(precioNetoFinal).toFixed(2);
    cart.iva = parseFloat(ivaFinal).toFixed(2);
}

const addToCart = (cart, item) => {
    //Clonar el carrito
    const newItem = {
        _id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
        photo: item.photo,
        quantity: item.quantity,
    };

    const product = cart.items.find(e => e.product._id === newItem._id);

    if (!product) {
        //pushear al carrito nuevo
        cart.items.push({
            product: newItem,
        });
    } else {
        //Si no, le agrego en el nuevo carrito
        cart.items.filter((e) => {
            if (e.product._id === newItem._id) {
                e.quantity += newItem.quantity;
            }
        });
    }
    totalCalculation(cart, newItem);
    return cart; //retornamos el carrito clonado
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

export { searchByName, totalCalculation, addToCart, countCartItems, countCartTotalAmount };