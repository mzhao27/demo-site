import React, { Component } from "react";
import "./MainForm.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentTable from "./ContentTable";

class MainForm extends Component {
    logout() {
        document.cookie = "isLoggedIn=; Max-Age=0";
        window.location.reload();
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <h2>Please sign in.</h2>;
        }

        return (
            <div className="form_wrapper">
                <div className="form_header">Form Header
                <a href="/demo.pdf" target="_blank" className="sign-out_button" onClick={() => this.logout()}>
                    <FontAwesomeIcon icon="sign-out-alt" />
                </a></div>
                <ContentTable />
            </div>
        );
    }
};

export default MainForm;
