import React, { useEffect, useState} from "react";
import * as baseui from "baseUI";
import * as components from "components";
import cx from "classnames";
import "./style.sass";

function Editor() {
    const [arr,setarr] = useState([baseui.Header,baseui.Header])
    return (
        <div>
            {
                arr.map((item,i)=>{
                    return (
                        item()
                    )
                })
            }
        </div>
    )
}

export default React.memo(Editor)