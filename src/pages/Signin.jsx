import React from 'react'
import Footer from '../components/footer'
import '../login.css'


function login(){
    return (
        <div>
            <section className="u-clearfix u-image u-shading u-section-1" id="sec-8ab2" data-image-width="640" data-image-height="360">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                        <form action="/" className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" name="form">
                            <div className="u-form-email u-form-group">
                                <label for="email-450a" className="u-label">Email</label>
                                <input type="email" placeholder="Enter a valid Email" id="inputEmail" name="email" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" />
                            </div>
                            <div className="u-form-group u-form-group-2">
                                <label for="text-4e0f" className="u-label">Password</label>
                                <input type="text" placeholder="Enter your password" id="inputEmail" name="password" className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="required" />
                            </div>
                            <div className="u-align-left u-form-group u-form-submit">
                                <a href="/" className="u-btn u-btn-submit u-button-style">Signin</a>
                                <input type="submit" value="submit" className="u-form-control-hidden" />
                            </div>
                            <div className="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                            <div className="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                            <input type="hidden" value="" name="recaptchaResponse" />
                        </form>
                    </div>
                    <p className="u-small-text u-text u-text-font u-text-variant u-text-1">Don't have an account?</p>
                    <p className="u-small-text u-text u-text-font u-text-variant u-text-2">
                        <a className="u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-2" href="Register.html" data-page-id="298719305">Register here</a>
                    </p>
                </div>
            </section>
            <Footer />

        </div>
    )
}
export default login
