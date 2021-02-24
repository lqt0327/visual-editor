import React from 'react'
import styled from 'styled-components'

const EnteryNormal = styled.div`
    .comp_entry_normal_1 {
        display: flex;
        padding: 16px;
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 0;

        &-item {
            text-align: center;
            text-decoration: none;
            
            img {
                display: inline-block;
                margin-bottom: 8px;
                width: 28px;
                height: 28px;
            }

            p {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                display: block;
                font-size: 13px;
                color: #333;
            }
        }
    }
`

function EntryTab(props) {

    const {changePanelStateDispatch} = props

    return (
        <EnteryNormal onClick={()=>{changePanelStateDispatch(['tab','entry'])}}>
            <div className="use-tag" style={{position:"relative"}}>
                <section className="comp_entry_normal_1">
                    <a className="comp_entry_normal_1-item" style={{width:"25%"}}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/AOtWvDPAJgtZPFMXHKNm.png" alt=""/>
                        <p>境外汇款</p>
                    </a>
                    <a href="" className="comp_entry_normal_1-item" style={{width:"25%"}}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/RgGGnFTIqGzkLIZyMFej.png" alt=""/>
                        <p>外汇结汇</p>
                    </a>
                    <a href="" className="comp_entry_normal_1-item" style={{width:"25%"}}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/ycOPKaiWZFtKyhDCxRAY.png" alt=""/>
                        <p>代理签证</p>
                    </a>
                    <a href="" className="comp_entry_normal_1-item" style={{width:"25%"}}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/oOhXrdlcKBHAPiEatqNR.png" alt=""/>
                        <p>国际机票</p>
                    </a>
                </section>
            </div>
        </EnteryNormal>
    )
}

export default React.memo(EntryTab);