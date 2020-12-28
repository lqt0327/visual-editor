import React, { useCallback, useState } from "react";
import cx from "classnames";
import "./style.sass";

function Header() {
    const [searchShow,setSearchShow] = useState(false);

    const _onSearch = useCallback(() => {
        console.log('查询')
    }, [])

    return (
        <header className='lHeader'>
            <nav>
                <div className='logo'>
                    <img src="https://static.zcool.cn/git_z/z/common/images/svg/logo.svg" />
                </div>
                <div className='header-menu-bar'>
                    <div className={cx(
                        "search-input-hull",
                        {"hide": !searchShow}
                    )}>
                        <span className="search-ipt" onClick={_onSearch}><i className="icon iconfont">&#xe8aa;</i></span>
                        <input type="text" name="search" />
                        <span className="search-cancel" onClick={()=>{setSearchShow(false)}}><i className="icon iconfont">&#xe75e;</i></span>
                        <div className="search-content hide"></div>
                    </div>
                    <div className="hide"></div>
                    <div className={cx(
                        'menu-box',
                        {'hide': searchShow}
                    )}>
                        <ul className='menu-list-content'>
                            <li className='menu-list-content__item'>首页</li>
                            <li className='menu-list-content__item'>发现</li>
                            <li className='menu-list-content__item'>活动</li>
                            <li className='menu-list-content__item'>榜单</li>
                            <li className='menu-list-content__item'>发现</li>
                            <li className='menu-list-content__item'>活动</li>
                            <li className='menu-list-content__item'>榜单</li>
                            <li className="more-menu"><i className="icon iconfont">&#xe77e;</i></li>
                        </ul>
                    </div>
                </div>
                <div 
                    className={cx(
                        'search',
                        {'hide': searchShow}
                    )} 
                    onClick={()=>{setSearchShow(true)}}
                >
                    <i className="icon iconfont">&#xe8aa;</i>
                </div>
                <div className="user-center"><i className="icon iconfont">&#xe8ac;</i></div>
            </nav>
        </header>
    )
}

export default Header