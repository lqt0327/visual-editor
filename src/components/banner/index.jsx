import './index.sass';
import cx from 'classnames'

function Banner(props) {
    const { changePanelStateDispatch, getTopStateDispatch, getHeightStateDispatch } = props
    
    return (
        <div className={cx("banner",props.className)} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            getTopStateDispatch(document.querySelector('.banner').offsetTop);
            getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png" alt=""/>
            </a>
        </div>
    )
}

export default Banner;