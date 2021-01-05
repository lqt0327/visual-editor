import React, { useCallback, useEffect, useState } from "react";
import { Header, LeftPanelPage, Preview } from "baseUI";
import * as components from "components";
import cx from "classnames";
import "./style.sass";

function Home() {
    const [arr,setArr] = useState([components.Header,components.LouCengBiaoTi,components.LouCengJianGe])

    return (
        <div className="l-eidtor">
            <Header />
            <main>
                <LeftPanelPage />
                <Preview
                    arr={arr}
                />
            </main>
        </div>
    )
}

export default React.memo(Home);