import React, { useState } from "react";
import * as components from "components";
import './style.sass'

function LeftPanelBanner() {
    const [list, setList] = useState([components.Upload,components.LinkAddress])
    return (
        <React.Fragment>
            <div className="l-panel" style={{width:"490px"}}>
                <div className="l-editor">
                    <div className="schema-editor">
                        <div className="schema-editor-main">
                            <h2>Banner</h2>
                            <div className="schema-editor-scroll">
                                <div className="schema-editor-container">
                                    {
                                        list.map((item)=>{
                                            return item()
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="l-panel-animate" style={{width:"490px"}}></div>
        </React.Fragment>
    )
}

export default React.memo(LeftPanelBanner)