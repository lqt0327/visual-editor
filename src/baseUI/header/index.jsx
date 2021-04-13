import React, { useState, useRef } from "react";
import { connect } from 'react-redux';
import { Modal, Button, Tabs } from 'antd';
import { changePanel } from 'store/actions'
import { updateTplRequest, getAllRecomTplRequest } from 'src/api/request'
import "./style.sass";

const { TabPane } = Tabs;

function Header(props) {

    const {
        changePanelStateDispatch,
        pid,
        pTitle
    } = props

    const updateTpl = (pid) => {
        const tpl = localStorage.getItem(`tpl_${pid}`)
        updateTplRequest(pid, tpl).then(() => {
            window.open(`http://localhost:8082/?page=${pid}`)
        })
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const recTpl = useRef([])

    const showModal = () => {
        getAllRecomTplRequest().then(res=>{
            recTpl.current = res
            setIsModalVisible(true);
            console.log(res,'ppppppp')
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
                <Modal title="热门模版" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}>
                    <Tabs defaultActiveKey="1" tabPosition='left' style={{ height: 400 }}>
                        {
                            recTpl.current.length !== 0 ? recTpl.current.map((item,i) => (
                                <TabPane 
                                tab="测试数据" 
                                key={i+1} 
                                disabled={i === 10}
                                style={{
                                    overflow:"hidden",
                                    
                                }}
                                >
                                    <div style={{width:"100%",height:"600px",overflow:"scroll"}}>
                                        {
                                            new Array(8).fill(null).map((item2,j)=>{
                                                return (
                                                    <div style={{float:"left",width:"200px"}} key={j}>
                                                        <div style={{background:"url("+item["rec_img_url"]+") no-repeat",backgroundSize:"200px",height:"300px",overflow:"hidden"}}></div>
                                                        <p style={{textAlign:"center",padding:"10px 0"}}>{item["rec_title"]}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </TabPane>
                            )) : ""
                        }
                        {
                            // new Array(20).fill(null).map((item,i)=>{
                            //     return (
                            //         <TabPane tab={`Tab-${i}`} key={i+1} disabled={i === 10}>
                            //             <p>alkdsjflkasjdflk</p>
                            //         </TabPane>
                            //     )
                            // })
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Header))