import React, { useState, useEffect } from 'react'; 
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { SketchPicker }  from 'react-color';
import DatePicker from "react-datepicker";
import { setModalContent } from '../../../redux/actions';

import ModalWrapper from '../ModalWrapper';

import "../../../../node_modules/react-datepicker/dist/react-datepicker.css";

function ProjectModal({ dispatch, projects, id, scaleDownContainer }) {

    const [color, setColor] = useState('#fff');
    const [chosenDate, setChosenDate] = useState();
    const [btnClicked, setBtnClicked] = useState(false);

    const date = new Date();

    // Get the next day
    date.setDate(date.getDate() + 1);

    scaleDownContainer();

    const onColorChange = (color) => {
        setColor(color.hex);
    }

    useEffect(() => {
        if(btnClicked) {
            if(document.querySelector('.modal-wrapper input[type="text"]').value.trim().length > 2) {
        
                dispatch(setModalContent(null));

                // Removes the class that causes the main view to 
                // shrink in the background
                const mainContainer = document.querySelector('.main-container');

                if(mainContainer) {
                    mainContainer.classList.remove('scale-down');
            }
            }
            else {
                alert("Complete the form fully!");
            }
        }
    })
    
    return ReactDOM.createPortal(
        <ModalWrapper title="New Project" dispatch={dispatch}>
            <form>
                <fieldset>
                    <label htmlFor="name">Name: </label>
                    <input name="name" type="text" />
                </fieldset>
                <fieldset class="date-fieldset">
                    <label>Set a due date?</label>
                    <input type="radio" value="yes" name="yes" />
                    <label htmlFor="yes"> Yes</label>
                    <input type="radio" value="no" name="no" checked={true} />
                    <label htmlFor="no"> No</label>
                    <br></br><br></br>
                    <label htmlFor="dueDate">Due date: </label>
                    <DatePicker selected={date} onChange={(date) => setChosenDate(date)} />
                </fieldset>
                <SketchPicker color={color} onChangeComplete={onColorChange} />

                <button type="button" className="submit-project" onClick={() => setBtnClicked(true)}>
                    Complete
                </button> 
            </form>
        </ModalWrapper>,
        document.body
    )
}

export default connect()(ProjectModal);