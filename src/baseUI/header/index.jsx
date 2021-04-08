import React, { useCallback } from "react";
import { connect } from 'react-redux';
import { changePanel } from 'store/actions'
import { addTplRequest } from 'src/api/request'
import { base64Time } from "src/utils/tools";
import "./style.sass";

function Header(props) {

    const { changePanelStateDispatch } = props

    const addTpl = () => {
        const tpl = localStorage.getItem('tpldata')
        console.log(base64Time())
        addTplRequest(tpl,1,1).then((res)=>{
            const id = res.id
            window.open(`http://localhost:8082/?page=${id}`)
            console.log(res,'??????')
        })
        // 跳转至对应 h5 页面  要在服务端对数据存储完成后，在进行跳转 ？？？？
        // window.open(`http://localhost:8082/pageId/`)
    }

    return (
        <header className="l-header">
            <nav>
                <div className="header-left">
                    <div className="header-left-logo">
                        {/* <img src="https://gw.alipayobjects.com/zos/rmsportal/ZLdipPynpsirzAfeulEf.png" alt=""/> */}
                        <div style={{width:"40px",height:"40px",backgroundColor:"#efefef"}}></div>
                    </div>
                    <div className="header-left-tabbar" onClick={()=>{
                        changePanelStateDispatch(['page']);
                    }}>
                        <span className="header-left-tabbar__icon">
                            <i className="icon iconfont">&#xe75d;</i>
                        </span>
                        <span className="header-left-tabbar__text">
                            页面：专题 - 5
                        </span>
                    </div>
                </div>
                <div className="header-right">
                    <span className="header-right-preview"><i className="icon iconfont">&#xe752;</i>&nbsp;预览</span>
                    <span className="header-right-save"><i className="icon iconfont">&#xe7c8;</i>&nbsp;保存</span>
                    <div className="header-right-publish">
                        <button type="button"
                        className="header-right-publish-btn"
                        onClick={addTpl}
                        ><i className="icon iconfont">&#xe6a9;</i>发布</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    panel: state.getIn(['panels', 'currentPanel'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePanelStateDispatch(data) {
            dispatch(changePanel(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header))