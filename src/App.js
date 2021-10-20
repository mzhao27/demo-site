import React, { Component } from "react";
import Home from "./component/Home";
import MainForm from "./component/MainForm";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCity, faUser, faUnlock, faFilePdf, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"

library.add(faCity, faUser, faUnlock, faFilePdf, faSignOutAlt)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSubmit = (e, username, password) => {
        if (username === "demo" && password === "demo") {
            this.setState({ isLoggedIn: true });
            this.setCookie("isLoggedIn", 1, 7);
        }
        else {
            document.getElementById("login-input-error").classList.remove("login-input-error__hide");
        }
    };

    isLoggedIn = () => {
        return this.state.isLoggedIn || this.getCookie("isLoggedIn") !== "";
    };

    setCookie(cookieName, cookieValue, expireInDays) {
        const d = new Date();
        d.setTime(d.getTime() + (expireInDays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    };

    getCookie(cookieName) {
        let name = cookieName + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    render() {
        let isLoggedIn = this.isLoggedIn();
        return (
            <div className="body">
                {isLoggedIn ?
                    <MainForm isLoggedIn={isLoggedIn} /> :
                    <Home handleSubmit={this.handleSubmit} />
                }
            </div>
        );
    }
}

export default App;
