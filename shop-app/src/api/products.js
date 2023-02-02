
import {getUrlProduct} from './apiSettings'


export const getProducts = async () => {
    return fetch(getUrlProduct())
    .then(response => 
        response.json()
    );
};

export const getProductById = async (id) => {
    return fetch(`${getUrlProduct()}/${id}`)
    .then(response => response.json());
}

export const addProduct = async (product) => {
    return fetch(getUrlProduct(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json());
}

export const updateProduct = async (product) => {
    return fetch(`${getUrlProduct()}/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json());
}

export const removeProduct = async (id) => {
    return fetch(`${getUrlProduct()}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json());
}