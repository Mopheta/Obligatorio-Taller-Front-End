import React, { useState } from 'react'
import Modal from 'react-modal'

//Styles
import '../myStyles/checkoutModal.scss'


const CheckoutModal = (props) => {

    const { totalAmount } = props.cart;    
    let [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="checkout_btn">
                <button className='btn btn-warning checkout_btn;' onClick={() => setModalIsOpen(true) }>Checkout</button>
                <Modal
                className="modalStyle" 
                isOpen={ modalIsOpen } 
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
                >
                <h2>Thanks for your purchase!</h2>
                <h2>Grand total: ${ totalAmount }</h2>
                <div>
                    <button className="btn btn-info" onClick={() => {
                        props.removeAll();
                        setModalIsOpen(false)
                    }} >Close</button>
                </div>
                </Modal>
            
        </div>
    ) 
}



export default CheckoutModal;

