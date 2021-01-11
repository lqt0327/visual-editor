import React, { useCallback, useEffect, useState } from "react";
import { Header, LeftPanelPage, Preview, LeftPanelBanner } from "baseUI";
import * as components from "components";
import cx from "classnames";
import "./style.sass";

// 事件代理 preview中点击 模块 左侧面板 响应

function Home() {
    const [arr,setArr] = useState([components.Header,components.LouCengBiaoTi,components.LouCengJianGe,components.LinkAddress,components.Upload,components.Carousel])

    return (
        <div className="l-eidtor">
            <Header />
            <main>
                <LeftPanelBanner />
                <Preview
                    arr={arr}
                />
            </main>
        </div>
    )
}

export default React.memo(Home);