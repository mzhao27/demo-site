import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Home.scss";
import LoginForm from "./LoginForm";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <FontAwesomeIcon icon="city" className="icon logo" />
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at enim sit amet libero vestibulum varius tristique sed nunc.
                        Ut vel turpi
                        s ac sapien iaculis convallis id ut neque.
                    </div>
                </div>
                <LoginForm
                    handleSubmit={this.props.handleSubmit}
                />
            </div>
        );
    }
};

export default Home;
