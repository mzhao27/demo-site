import React, { Component } from "react";

class HeaderRow extends Component {
    render() {
        return (
            <tr className={`header-row header-row__order-${this.props.order}`}>
                <td colSpan="4" className="header-cell">{this.props.title}</td>
            </tr>
        );
    }
};

export default HeaderRow;
