import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

class NeedACarShare extends Component {
  render() {
    return (
      <div>
        <div className='weui_cells_title'>蹭车需求已发布！您可在用户中心－蹭车信息中查看或修改行程。若车主愿意接车，您将收到微信推送，敬请留意。</div>
        <div className='weui_cells_title'>分享需求至朋友圈，让更多朋友来接您？</div>
        <div className='weui_btn_area'>
          <button className='weui_btn weui_btn_primary'>分享</button>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(NeedACarShare)
