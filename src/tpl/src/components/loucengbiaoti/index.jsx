import './index.sass'
import cx from 'classnames'

function LouCengBiaoTi() {
    return (
        <div className={cx("instance-container", {
            "instance-container--active":false
        })} style={{width:"375px"}}>
            <div>
                <div className="loucengbiaoti" style={{backgroundColor:"rgb(255,255,255)"}}>
                    <div className="page-right title-left">
                        <div className="main-title-wrap main-title-wrap--left">
                            <div className="main-title">
                                <span style={{color:"rgb(0,0,0)"}}>测试</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LouCengBiaoTi