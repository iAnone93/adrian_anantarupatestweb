import React from 'react'
import Footer from '../components/footer'
import '../register.css'

function Register(){
    //const [name, setName] = useState(initialState,'')
    //const [email, setEmail] = useState(initialState,'')
   // const [password, setPassword] = useState(initialState,'')

    //const submit: syntethicEvent{
           // console.log({
                //name,
               // email,
                //password,
           // })
   // }
   //onChange={e => setEmail(e.target.value)}

    return(
        <div>
            <section class="u-clearfix u-image u-section-1" id="sec-ed22" data-image-width="640" data-image-height="360">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div class="u-layout">
                            <div class="u-layout-row">
                                <div class="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                                    <div class="u-container-layout u-container-layout-1">
                                        <div class="u-form u-form-1">
                                            <form method="POST" class="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form">
                                                <div class="u-form-group u-form-name">
                                                    <label for="name-450a" class="u-form-control-hidden u-label">Name</label>
                                                    <input type="text" placeholder="Name" id="name-450a" name="name" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" />
                                                       
                                                </div>
                                                <div class="u-form-group u-form-select u-form-group-3">
                                                    <label for="select-cc53" class="u-form-control-hidden u-label"></label>
                                                    <div class="u-form-select-wrapper">
                                                        <select id="select-cc53" name="select" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="required">
                                                            <option value="I am a Player">I am a Player</option>
                                                            <option value="I am with Event Organizer">I am with Event Organizer</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="u-form-email u-form-group">
                                                    <label for="email-450a" class="u-form-control-hidden u-label">Email</label>
                                                    <input type="email" placeholder="Enter a valid email address" id="email-450a" name="email" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" />
                                                        
                                                </div>
                                                <div class="u-form-email u-form-group">
                                                    <label for="email-450a" class="u-form-control-hidden u-label">Email</label>
                                                    <input type="number" placeholder="Enter your password" id="email-450a" name="password" class="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white" required="" />
                                                        
                                                </div>
                                                <div class="u-align-left u-form-group u-form-submit">
                                                    <a href="/" class="u-btn u-btn-submit u-button-style">Register</a>
                                                    <input type="submit" value="submit" class="u-form-control-hidden" />
                                                </div>

                                                <input type="hidden" value="" name="recaptchaResponse" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Register