import React, { useRef } from 'react';
import { Upload } from "components";
import CommonHoc from '../../common';

function FooterPanel(props) {
  const { 
    curried, 
  } = props

  const path = useRef([])

    return (
        <div className="schema-editor-container">
            <Upload 
                imgWidth={124}
                imgHeight={40}
                changeVal={curried(path.current)}
            />
        </div>
    )
}

export default CommonHoc(React.memo(FooterPanel));