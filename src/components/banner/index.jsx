import './index.sass';
import cx from 'classnames'

function Banner(props) {
    console.log(props,'banner')
    const {changeBannerStaticStateDispatch} = props
    return (
        <div className={cx("banner",props.className)} onClick={()=>{changeBannerStaticStateDispatch('bannerStatic')}}>
            <a>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/nKBqduiIsQWrHPVehZrG.png" alt=""/>
            </a>
        </div>
    )
}

export default Banner;