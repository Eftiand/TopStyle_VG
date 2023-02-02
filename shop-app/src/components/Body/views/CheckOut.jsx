

import React from 'react'
import { UserInfoContext } from '../../../contexts/UserInfoProvider'
import { useContext } from 'react'
import {ApiContext} from '../../../contexts/ApiProvider'

export const CheckOut = () => {

    const { userInfo, cart, cartTotal } = useContext(UserInfoContext);
    const { checkOut } = useContext(ApiContext);

    if(!userInfo.loggedIn) {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <h3 className="text-center">Please login to check out</h3>
                    </div>
                </div>
            </div>
        )
    }

    if(cart.length === 0) {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <h3 className="text-center">Your cart is empty</h3>
                    </div>
                </div>
            </div>
        )
    };
        
    let id = checkOut(userInfo, cart, cartTotal);

  return (
    <>
        <div className="container">
            You checked out

        </div>
    </>
  )
}
