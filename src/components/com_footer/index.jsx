import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Footer = styled.div`
    display: flex;
    justify-content: center;

    .comp_footer_img_1-img {
        width: 64px;
        height: 23px;
    } 
`

function ComFooter(props) {

    const { 
        changePanelStateDispatch,
        getTopStateDispatch, 
        getHeightStateDispatch,
        template,
        id,
        img_address
    } = props
    
    return (
        <div className="use-tag" id={id} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch(['banner','static']);
            // getTopStateDispatch(document.querySelector('.banner').offsetTop);
            // getHeightStateDispatch(document.querySelector('.banner').offsetHeight)
        }}>
            <Footer>
                <img src={img_address} alt="" className="comp_footer_img_1-img" style={{width:"65px",height:"23px"}} />
            </Footer>
        </div>
    )
}

ComFooter.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    getTopStateDispatch: PropTypes.func,
    getHeightStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    img_address: PropTypes.string
}

export default React.memo(ComFooter)