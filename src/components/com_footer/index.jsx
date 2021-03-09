import React from 'react'
import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    justify-content: center;

    .comp_footer_img_1-img {
        width: 64px;
        height: 23px;
    } 
`

function ComFooter() {
    return (
        <div className="use-tag" style={{position:"relative"}}>
            <Footer>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/XtMFIqbtszjfPnrtQnIe.png" alt="" className="comp_footer_img_1-img" style={{width:"65px",height:"23px"}} />
            </Footer>
        </div>
    )
}

export default React.memo(ComFooter)