import React, { Component } from "react";

class SubHeaderRow extends Component {
    render() {
        return (
            <tr className={`sub-header-row sub-header-row__order-${this.props.order}`}>
                <td className="header-cell">Col 1</td>
                <td className="header-cell">Col 2</td>
                <td className="header-cell">Col 3</td>
            </tr>
        );
    }
};

export default SubHeaderRow;
