import React, { useEffect } from "react";
import Css from "./style.module.sass";

function Home() {
    return (
        <header className={Css['lHeader']}>
            <nav>
                <div className={Css['logo']}>
                    <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
                </div>
                <div className={Css['header-menu-bar']}>
                    <div className={Css['search-input-hull']+" hide"}></div>
                    <div className="hide"></div>
                    <div className={Css['menu-box']}>
                        <ul className={Css['menu-list-content']}>
                            <li className={Css['menu-list-content__item']}>首页</li>
                            <li className={Css['menu-list-content__item']}>发现</li>
                            <li className={Css['menu-list-content__item']}>活动</li>
                            <li className={Css['menu-list-content__item']}>榜单</li>
                            <li className={Css["menu-list-content__item--placeholder"]}></li>
                            <li className={Css["menu-list-content__item--placeholder"]}></li>
                            <li className={Css["menu-list-content__item--placeholder"]}></li>
                            <li className={Css["more-menu"]}><i className="icon iconfont">&#xe77e;</i></li>
                        </ul>
                    </div>
                </div>
                <div className={Css["search"]}><i className="icon iconfont">&#xe8aa;</i></div>
                <div className={Css["user-center"]}><i className="icon iconfont">&#xe8ac;</i></div>
            </nav>
        </header>
    )
}

export default React.memo(Home);