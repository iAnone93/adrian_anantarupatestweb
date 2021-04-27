import React from 'react'
import Footer from '../components/footer'
import '../dashboard.css'

function Dashboard(){
    return(
        <div>
            <section class="u-clearfix u-image u-section-1" id="sec-5aaa" data-image-width="1200" data-image-height="959">
                <div class="u-clearfix u-sheet u-sheet-1">
                    <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                        <div class="u-layout">
                            <div class="u-layout-row">
                                <div class="u-size-21">
                                    <div class="u-layout-col">
                                        <div class="u-container-style u-layout-cell u-size-60 u-layout-cell-1">
                                            <div class="u-container-layout u-valign-middle u-container-layout-1">
                                                <img src={require('../img/5928695611596098555.webp').default} alt="" class="avatar u-expanded-width u-image u-image-round u-radius-10 u-image-1" data-image-width="800" data-image-height="450" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="u-size-39">
                                    <div class="u-layout-col">
                                        <div class="u-container-style u-layout-cell u-opacity u-opacity-50 u-palette-4-base u-size-30 u-layout-cell-2">
                                            <div class="u-container-layout u-container-layout-2">
                                                <h3 class="u-text u-text-1">User</h3>
                                                <p class="u-text u-text-2">ID:&nbsp;</p>
                                                <p class="u-text u-text-3">Username:&nbsp;</p>
                                                <p class="u-text u-text-4">Birthday:&nbsp;</p>
                                            </div>
                                        </div>
                                        <div class="u-container-style u-layout-cell u-opacity u-opacity-50 u-palette-4-base u-size-30 u-layout-cell-3">
                                            <div class="u-container-layout u-container-layout-3">
                                                <h3 class="u-text u-text-default u-text-5">Bio</h3>
                                                <p class="u-align-justify u-text u-text-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non metus tempus, sagittis purus ut, tincidunt ipsum. Sed id nisi eu neque vehicula condimentum ornare laoreet arcu. Maecenas porta, dolor eu pharetra viverra, justo est dictum turpis, id consectetur ipsum risus eu risus. Curabitur faucibus dui neque, consequat aliquet augue tincidunt a. Curabitur faucibus ut tortor non pharetra.
                      </p>
                                            </div>
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
export default Dashboard