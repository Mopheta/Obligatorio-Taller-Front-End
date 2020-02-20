const signUp = async (email, password) => {
    return await fetch('http://tiendaonline2020.herokuapp.com/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}

const loginUser = async (email, password) => {
    return await fetch('http://tiendaonline2020.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}

const getProducts = async () => {
    return await fetch('https://tiendaonline2020.herokuapp.com/api/product/all');
}

export { signUp, loginUser, getProducts };