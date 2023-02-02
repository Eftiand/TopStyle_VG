import {getUrlUser} from './apiSettings'

export const login = (username, password) => {
try{



    let url = getUrlUser()+"/login";
    //post to check if user exists
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Invalid username or password');
                }
            }); 
        }
        catch (error) { 
            console.log(error);
            return error;
        }
}

export const register = (username, password) => {

}