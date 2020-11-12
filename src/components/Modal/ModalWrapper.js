import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { setModalContent } from '../../redux/actions'; 

// This is the Container of the Modal
// It is used as a template
function ModalWrapper({ dispatch, title, headerColor = '#4879ff', children }) {

    const styles = {
        wrapper: {
            backgroundImage:`linear-gradient(180deg, ${headerColor}, 70px, transparent 1%, white 10%, white 90%)`
        }
    }

    const handleClose = () => {
        
        const modal = document.querySelector('.modal-background');
        if(modal) {
            dispatch(setModalContent(null));

            const mainContainer = document.querySelector('.main-container');

            if(mainContainer) {
                mainContainer.classList.remove('scale-down');
            }
        }
    }

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }

    return (
        <div className="modal-background">
            <div className="modal-wrapper" onClick={handleBackgroundClick} style={styles.wrapper}>
                <div className="content">
                    <header>
                        <h2>{title}</h2>
                        <span onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></span>
                    </header>

                    {children}
                </div>
            </div>
        </div>
    )
}

ModalWrapper.propTypes = {
    dispatch: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    headerColor: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object)
    ]).isRequired
}

export default ModalWrapper;