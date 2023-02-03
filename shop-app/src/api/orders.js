import {getUrlOrder} from './apiSettings'

export const getOrders = async () => {
    return fetch(getUrlOrder())
    .then(response => response.json());
}

export const getOrderById = async (id) => {
    return fetch(`${getUrlOrder()}/${id}`)
    .then(response => response.json());
}

export const addOrder = async (order) => {
    let struct = {
        "totalPrice": order.TotalPrice,
        "userId": order.User.id,
        "products": order.OrderItems.map(product => product.id) 
    }

    return fetch(getUrlOrder(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(struct)
    })
    .then(response => response.json());
}

export const updateOrder = async (order) => {
    return fetch(`${getUrlOrder()}/${order.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(response => response.json());
}

export const removeOrder = async (id) => {
    return fetch(`${getUrlOrder()}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json());
}