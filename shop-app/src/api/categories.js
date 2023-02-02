import {getUrlCategory} from './apiSettings'

export const getCategories = async () => {
    return fetch(getUrlCategory())
    .then(response => response.json());
}

export const getCategoryById = async (id) => {
    return fetch(`${getUrlCategory()}/${id}`)
    .then(response => response.json());
}

export const addCategory = async (category) => {
    return fetch(getUrlCategory(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
    .then(response => response.json());
}

export const updateCategory = async (category) => {
    return fetch(`${getUrlCategory()}/${category.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    })
    .then(response => response.json());
}

export const removeCategory = async (id) => {
    return fetch(`${getUrlCategory()}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json());
}