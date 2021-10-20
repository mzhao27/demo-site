import React, { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import HeaderRow from "./HeaderRow";
import SubHeaderRow from "./SubHeaderRow";

class ContentTable extends Component {
    render() {
        return (
            <div>
                <div className="table-headerRow">Table Title</div>
                <table>
                    <tbody>
                        <HeaderRow title="Header" order="1" />
                        <SubHeaderRow order="1" />
                        <tr>
                            <td className="table-cell--primary">Row1</td>
                            <td className="table-cell--secondary">Test</td>
                            <td className="table-cell--primary">
                                Description
                                <SRLWrapper>
                                    <a href="sample1.jpg">
                                        <img src="sample1.jpg" className="image_thumbnail" alt="Test" />
                                    </a>
                                </SRLWrapper>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-cell--primary">Row2</td>
                            <td className="table-cell--secondary">Test</td>
                            <td className="table-cell--primary">
                                Description
                                <SRLWrapper>
                                    <a href="sample1.jpg">
                                        <img src="sample1.jpg" className="image_thumbnail" alt="Test" />
                                    </a>
                                </SRLWrapper>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-cell--primary">Row3</td>
                            <td className="table-cell--secondary">Test</td>
                            <td className="table-cell--primary">
                                Description
                                <SRLWrapper>
                                    <a href="sample1.jpg">
                                        <img src="sample1.jpg" className="image_thumbnail" alt="Test" />
                                    </a>
                                </SRLWrapper>
                            </td>
                        </tr>
                        <HeaderRow title="Header" order="2" />
                        <SubHeaderRow order="1" />
                        <tr>
                            <td className="table-cell--primary">Row1</td>
                            <td className="table-cell--secondary">Test</td>
                            <td className="table-cell--primary">
                                Description
                                <SRLWrapper>
                                    <a href="sample1.jpg">
                                        <img src="sample1.jpg" className="image_thumbnail" alt="Test" />
                                    </a>
                                </SRLWrapper>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-cell--primary">Row2</td>
                            <td className="table-cell--secondary">Test</td>
                            <td className="table-cell--primary">
                                Description
                                <SRLWrapper>
                                    <a href="sample1.jpg">
                                        <img src="sample1.jpg" className="image_thumbnail" alt="Test" />
                                    </a>
                                </SRLWrapper>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ContentTable;