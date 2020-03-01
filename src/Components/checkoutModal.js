import React, { useState } from 'react'
import Modal from 'react-modal'

//Styles
import '../myStyles/checkoutModal.scss'


const CheckoutModal = (props) => {

    const { totalAmount } = props.cart;
    let [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="checkout_btn">
            <button className='btn btn-warning checkout_btn;' onClick={() => setModalIsOpen(true)}>Checkout</button>
            <Modal
                className="modalStyle"
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                ariaHideApp={false}
                shouldCloseOnOverlayClick={false}
            >
                <div className="row">
                    <div className="col">
                        <h2>Thanks for your purchase!</h2>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <h4>Grand total: ${totalAmount}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-info float-right" onClick={() => {
                            props.removeAll();
                            setModalIsOpen(false)
                        }} >Close</button>

                    </div>
                </div>

            </Modal>

        </div>
    )
}

export default CheckoutModal;
