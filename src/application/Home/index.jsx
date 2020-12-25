import React, { useEffect } from "react";
import Css from "./style.sass";

function Home() {
    return (
        <div className={Css['hello']}>hello,world</div>
    )
}

function Test() {
    return (
        <h2>test</h2>
    )
}
// 这个可以是布局， 往布局内部插入函数
function Compose() {
    return (
        <div>
            {Home()}
            {Test()}
        </div>
    )
}
export default React.memo(Compose);