import React, { useEffect, useState } from 'react'; 
import { connect } from 'react-redux';

import ModalWrapper from '../ModalWrapper';

function WelcomeMessageModal({ dispatch, scaleDownContainer }) {

    let [show, setShow] = useState(false);

    useEffect(() => {

        if(!show) {
            setTimeout(()=> {
                scaleDownContainer()
                setShow(true);
            }, 5000);
        }
    })

    return show ? 
        (<ModalWrapper dispatch={dispatch} title="Greetings!">
             <span className="welcome-modal-text">Hello,</span>
             <p className="welcome-modal-text">
                 This is an example of a popup. The background page
                 is unrelated and is placed as a placeholder. To try
                 out the interchangeable content, please click the "join"
                 button to get an example form, that has text fields, radio buttons,
                 and a color picker.
             </p>
             <span className="welcome-modal-text">Thank you.</span>
         </ModalWrapper>)
         : null;
}

const mapStateToProps = (state, ownProps) => {

    return {
        ...ownProps,
    }
}

export default connect(mapStateToProps)(WelcomeMessageModal);