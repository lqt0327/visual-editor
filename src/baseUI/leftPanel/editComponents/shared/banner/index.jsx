import React, { useRef } from 'react';
import { Upload, LinkAddress } from "components";
import CommonHoc from '../../common';

function BannerPanel(props) {
    const { 
      curried, 
      tpl
    } = props

    const path = useRef([])

    return (
        <div className="schema-editor-container">
            <Upload 
                imgWidth={750}
                imgHeight={280}
                changeVal={curried(path.current)}
            />
            <LinkAddress linkVal={tpl["link_address"]} changeVal={curried(path.current)} />
        </div>
    )
}

export default CommonHoc(React.memo(BannerPanel));