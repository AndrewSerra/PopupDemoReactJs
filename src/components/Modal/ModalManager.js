import React from 'react';
import { connect } from 'react-redux';

import ProjectModal from './content/ProjectModal';
import WelcomeMessageModal from './content/WelcomeMessageModal';

function ModalManager({ dispatch, currentModalContent }) {

    // Add more options as they are built 
    const content = {
        WELCOME_MESSAGE: "welcome",
        ADD_PROJECT: "projects",
    }

    const scaleDownContainer = () => {

        const mainContainer = document.querySelector('.main-container');

        if(mainContainer) {
            mainContainer.classList.add('scale-down');
        }
    }

    // Will choose the Modal to render in the page
    switch(currentModalContent) {
        case content.WELCOME_MESSAGE:
            return <WelcomeMessageModal scaleDownContainer={scaleDownContainer} />;
        case content.ADD_PROJECT:
            return <ProjectModal scaleDownContainer={scaleDownContainer} />
        default:
            return null;
    }
}

// Get the modalContent from the redux store
const mapStateToProps = (state) => {

    return {
        currentModalContent: state.modalContent
    }
}

export default connect(mapStateToProps)(ModalManager);