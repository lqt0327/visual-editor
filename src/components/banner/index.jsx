import './index.sass';
import cx from 'classnames'

function Banner(props) {
    console.log(props,'banner')
    return (
        <div className={cx("banner",props.className)}>
            <a href="https://www.baidu.com">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png" alt=""/>
            </a>
        </div>
    )
}

export default Banner;