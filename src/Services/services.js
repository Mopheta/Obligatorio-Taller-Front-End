const signUp = async (userName, password) => {
    return await fetch('http://tiendaonline2020.herokuapp.com/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: userName,
            password: password
        })
    });
}

const loginUser = async (userName, password) => {
    return await fetch('http://tiendaonline2020.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: userName,
            password: password
        })
    });
}

const getProducts = async () => {
    return await fetch('https://tiendaonline2020.herokuapp.com/api/product/all');
}

export { signUp, loginUser, getProducts };