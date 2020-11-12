import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModalContent } from '../../redux/actions';

// Styles
import '../../styles/DashboardView/DashboardView.css';

// Components
import TopBar from './TopBar';

class DashboardView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            welcomeModalShown: false,
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
 
    componentDidMount() {
        // Show Welcome Message
        if(!this.state.welcomeModalShown) {
            this.props.dispatch(setModalContent('welcome'));
            this.setState({ welcomeModalShown: true });
        }
    }

    componentWillUnmount() {
        this.app.removeChild(this.mainDiv);
    }

    handleButtonClick() {
        this.props.dispatch(setModalContent('projects'));
    }

    render() {
        return (
            <div className="main-container">
                <TopBar />
                <div className="mail-sub-wrapper">
                    <h1>Let's keep in touch.</h1>
                    <p>Subscribe to our mailing list and</p>
                    <p>be the first one to join when we launch!</p>

                    <form>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" placeholder="john@doe.com" />
                        <button type="button" onClick={this.handleButtonClick}>Join Us!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect()(DashboardView);