import React from 'react';
import { Upload, LinkAddress } from "components";
import CommonHoc from '../../common';

@CommonHoc
class BannerPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      path: []
    }
  }

  render() {
    const { curried, tpl } = this.props
    return (
      <div className="schema-editor-container">
        <Upload
          imgWidth={750}
          imgHeight={280}
          changeVal={curried(this.state.path)}
        />
        <LinkAddress linkVal={tpl["link_address"]} changeVal={curried(this.state.path)} />
      </div>
    )
  }

}

export default BannerPanel;