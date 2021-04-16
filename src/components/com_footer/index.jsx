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
        template,
        id,
        left_editor,
        index,
        img_address
    } = props
    
    return (
        <div className="use-tag" id={id} data-index={index} style={{position:"relative"}} onClick={()=>{
            changePanelStateDispatch([left_editor,template],index)
        }}>
            <Footer>
                <img src={img_address} alt="" className="comp_footer_img_1-img" style={{width:"65px",height:"23px"}} />
            </Footer>
        </div>
    )
}

ComFooter.propTypes = {
    changePanelStateDispatch: PropTypes.func,
    id: PropTypes.string.isRequired,
    img_address: PropTypes.string
}

export default React.memo(ComFooter)