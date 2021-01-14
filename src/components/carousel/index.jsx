import { Carousel } from 'antd';
import { connect } from 'react-redux';
import { changePanel } from 'store/actions'

function carousel(props) {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div onClick={()=>{console.log('=====------')}}>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>  
    )
}

// 映射Redux全局的state到组件到props上
const mapStateToProps = (state) => ({
    panel: state.getIn(['panels','currentPanel'])
})
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changePreviewDispatch(data) {
            dispatch(changePanel(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(carousel);