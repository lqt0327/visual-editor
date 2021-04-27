import React, { useState, useRef } from "react";
import { connect } from 'react-redux';
import { Modal, Tabs } from 'antd';
import { changePanel, changePid, changePage, updatePage, changePageTitle } from 'store/actions'
import { updateTplRequest, getAllRecomTplRequest, addTplRequest } from 'src/api/request'
import { url_h5 } from 'src/utils/tools/config'
import "./style.sass";

const { TabPane } = Tabs;

function Header(props) {

    const {
        pid,
        pTitle,
        changePanelStateDispatch,
        changePageStateDispatch
    } = props

    const updateTpl = (pid) => {
        const tpl = localStorage.getItem(`tpl_${pid}`)
        updateTplRequest(pid, {tplData: tpl}).then(() => {
            window.open(`${url_h5}?page=${pid}`)
        })
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const recTpl = useRef()

    const showModal = () => {
        getAllRecomTplRequest().then(res => {
            recTpl.current = res
            setIsModalVisible(true);
        })
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <header className="l-header">
            <nav>
                <div className="header-left">
                    <div className="header-left-logo">
                        {/* <img src="https://gw.alipayobjects.com/zos/rmsportal/ZLdipPynpsirzAfeulEf.png" alt=""/> */}
                        <div style={{ width: "40px", height: "40px", backgroundColor: "#efefef" }}></div>
                    </div>
                    <div className="header-left-tabbar" onClick={() => {
                        changePanelStateDispatch(['page']);
                    }}>
                        <span className="header-left-tabbar__icon">
                            <i className="icon iconfont">&#xe75d;</i>
                        </span>
                        <span className="header-left-tabbar__text">
                            页面：{pTitle}
                        </span>
                    </div>
                </div>
                <div className="header-right">
                    <span className="header-right-preview" onClick={showModal}><i className="icon iconfont">&#xe789;</i>&nbsp;推荐</span>
                    <span className="header-right-save"><i className="icon iconfont">&#xe7c8;</i>&nbsp;保存</span>
                    <div className="header-right-publish">
                        <button type="button"
                            className="header-right-publish-btn"
                            onClick={() => updateTpl(pid)}
                        ><i className="icon iconfont">&#xe6a9;</i>发布</button>
                    </div>
                </div>
                {/* 待抽离成一个组件 */}
                <Modal
                    title="热门模版"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="确认"
                    cancelText="取消"
                    width={800}
                >
                    <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: 400 }}>
                        {
                            recTpl.current ? Object.keys(recTpl.current).map((item, i) => (
                                <TabPane
                                    tab={item}
                                    key={i + 1}
                                    disabled={i === 10}
                                    style={{
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="tabpane-content">
                                        {
                                            recTpl.current[item].map((item2, j) => {
                                                return (
                                                    <div 
                                                    className="tabpane-content__item" 
                                                    key={j} 
                                                    onDoubleClick={()=>{
                                                        addTplRequest(item2["tplData"],1,1,item2["title"])
                                                        .then((res)=>{
                                                            changePageStateDispatch(JSON.parse(item2["tplData"]),res.id,item2["title"])
                                                            handleCancel()
                                                        })
                                                    }}>
                                                        <div style={{ background: "url(" + item2["img_url"] + ") no-repeat", backgroundSize: "200px", height: "300px", overflow: "hidden" }}></div>
                                                        <p>{item2["title"]}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </TabPane>
                            )) : ""
                        }
                    </Tabs>
                </Modal>
            </nav>
        </header>
    )
}

// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    pid: state.getIn(['page', 'pid']),
    panel: state.getIn(['panels', 'currentPanel']),
    pTitle: state.getIn(['page', 'pTitle'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePanelStateDispatch(data) {
            dispatch(changePanel(data))
        },
        changePageStateDispatch(data,id,title) {
            dispatch(changePid(id))
            // dispatch(updatePage(id))
            localStorage.setItem(`tpl_${id}`,JSON.stringify(data))
            dispatch(changePage(data))
            dispatch(changePageTitle(title))
            dispatch(updatePage(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header))