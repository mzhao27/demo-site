import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    updateUsernameInput = e => {
        this.setState({ username: e.target.value });
    };

    updatePasswordInput = e => {
        this.setState({ password: e.target.value });
    };

    render() {
        return (
            <div className="login_wrapper">
                <div className="input_wrapper">
                    <FontAwesomeIcon icon="user" className="icon input_icon input_icon-user" />
                    <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="USERNAME"
                        onChange={this.updateUsernameInput}
                    />
                </div>
                <div className="input_wrapper">
                    <FontAwesomeIcon icon="unlock" className="icon input_icon input_icon-password" />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        onChange={this.updatePasswordInput}
                    />
                </div>
                <div className="button" onClick={e => this.props.handleSubmit(e, this.state.username, this.state.password)}>
                    <span className="button_label">LOGIN</span>
                </div>
                <div id="login-input-error" className="login-input-error login-input-error__hide">Your username and password doesn't match any of our records</div>
            </div>
        );
    }
};

export default LoginForm;
