import React from 'react'
// import pic from './image/alogo.png'
import './Paymentspage.modules.css'
import {Link} from "react-router-dom"

export default function Paymentspage() {
    return (
        <div className='back'>
        <div className="container">
        
        <div id="Checkout" className="inline">

            <h1>Amazon Prime Membership </h1>
            <div className="card-row">
                <span className="visa"></span>
                <span className="mastercard"></span>
                <span className="amex"></span>
                <span className="discover"></span>
            </div>
            <div>
                <p className='para'>
                    Prime Video
                    <br></br>
                    Watch now, Cancel anytime;
                    <br></br>

                    Start your Membership today...
                </p>
            </div>
            <form>
                <div className="form-group">
                    <label for="PaymentAmount">Payment amount(in '$'):</label>
                    <div className="amount-placeholder">
                        <span>$</span>
                        <span>10.00</span>
                    </div>
                </div>
                <div className="form-group">
                    <label or="NameOnCard">Name on card:  </label>
                    <input id="NameOnCard" className="form-control" type="text" maxlength="255"></input>
                </div>
                <div className="form-group">
                    <label for="CreditCardNumber">Card number:  </label>
                    <input id="CreditCardNumber" className="null card-image form-control" type="text" placeholder='0000 0000 0000 0000'></input>
                </div>
                <div className="expiry-date-group form-group">
                    <label for="ExpiryDate">Expiry date:  </label>
                    <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxlength="7"></input>
                </div>
                <div className="security-code-group form-group">
                    <label for="SecurityCode">Security code: </label>
                    <div className="input-container" >
                        <input id="SecurityCode" className="form-control" type="text" placeholder='CVV' ></input>
                        <i id="cvc" className="fa fa-question-circle"></i>
                    </div>
                    <div className="cvc-preview-container two-card hide">
                        <div className="amex-cvc-preview"></div>
                        <div className="visa-mc-dis-cvc-preview"></div>
                    </div>
                </div>
                <div className="zip-code-group form-group">
                    <label for="ZIPCode">ZIP/Postal code: </label>
                    <div className="input-container">
                        <input id="ZIPCode" className="form-control" type="text" maxlength="10" placeholder='000000'></input>
                        <a href="/#" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address."><i className="fa fa-question-circle"></i></a>
                    </div>
                </div>

                <button onClick={()=>alert("payment successfull")} id="PayButton" className="btn btn-block btn-success submit-button" type="submit" >
                    <span className="submit-button-lock"></span>
                    <Link to="/HomePage2"><span className="align-middle">Pay $10.00</span></Link> 
                </button>

            </form>
        </div>
    </div>
        </div>
       

    )

}