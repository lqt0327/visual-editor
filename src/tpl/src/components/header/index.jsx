import React, { useCallback, useState, useEffect } from "react";
import cx from "classnames";
import "./style.sass";

function Header() {
    return (
        <div className={cx("instance-container","instance-container__header",
            {
                "instance-container--active":false
            })} style={{width:"375px"}}>
            <div style={{position:"relative"}}>
                <div className="yemianbiaoti" style={{background:"rgb(255,255,255)"}}>
                    <div className="yemianbiaoti__return"><i className="icon iconfont">&#xe749;</i></div>
                    <div className="yemianbiaoti__title">
                        <span className="title-name" style={{color:"rgb(0,0,0)"}}>test</span>
                    </div>
                    <div className="yemianbiaoti__icon-container">
                        <div>
                            <div className="yemianbiaoti__icon yemianbiaoti__icon--cart"><i className="icon iconfont">&#xe760;</i></div>
                            <div className="yemianbiaoti__icon yemianbiaoti__icon--ellipsis"><i className="icon iconfont">&#xe77e;</i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header