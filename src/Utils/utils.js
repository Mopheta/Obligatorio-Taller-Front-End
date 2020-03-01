const totalCalculation = (cart, item) => {
    const { price } = item;

    let precioFinalRenglon = price * (item.quantity || 1) //cuanto vale el item
    let precioNetoRenglon = (precioFinalRenglon / 1.22); //iva de ese item

    let precioFinal = +cart.totalAmount + precioFinalRenglon;
    let precioNetoFinal = +cart.subTotal + precioNetoRenglon;
    let ivaFinal = +cart.iva + (precioFinalRenglon - precioNetoRenglon);

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
        cart.totalItems += newItem.quantity;
    } else {
        //Si no, le agrego en el nuevo carrito
        cart.items.filter((e) => {
            if (e.product._id === newItem._id) {
                e.product.quantity += newItem.quantity;
                cart.totalItems += newItem.quantity;
            }
        });
    }
    totalCalculation(cart, newItem);
    return cart;
}

const calcularMontos = (items) => {
    let totalAmount = 0;
    let iva = 0;
    let subTotal = 0;
    let totalItems = 0;

    items.forEach(item => {
        totalAmount += (item.product.price * item.product.quantity);
        iva += ((item.product.price - (item.product.price / 1.22)) * item.product.quantity);
        subTotal += (totalAmount - iva);
        totalItems += item.product.quantity; 
    })

    let montos = {
        totalAmount: parseFloat(totalAmount).toFixed(2),
        iva: parseFloat(iva).toFixed(2),
        subTotal: parseFloat(subTotal).toFixed(2),
        totalItems: totalItems
    }
    return montos;
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

export {  totalCalculation, addToCart, countCartItems, countCartTotalAmount, calcularMontos };