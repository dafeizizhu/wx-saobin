import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'

class DialogOKCancel extends Component {
  render() {
    const { msg } = this.props
    return (
      <div className='weui_dialog_confirm' id='dialog1'>
        <div className='weui_mask'></div>
        <div className='weui_dialog'>
          <div className='weui_dialog_hd'>
            <strong className='weui_dialog_title'>{msg}</strong>
          </div>
          <div className='weui_dialog_ft'>
            <a href='javascript:;' className='weui_btn_dialog default jqCancel'>取消</a>
            <a href='javascript:;' className='weui_btn_dialog primary jqOK'>确定</a>
          </div>
        </div>
      </div>
    )
  }
}

export function myConfirm(msg, onOK, onCancel) {
  const $dialog = $(renderToString(<DialogOKCancel msg={msg} />))
  $dialog.on('click', '.jqOK', () => {
    if (typeof onOK == 'function') onOK()
    $dialog.remove()
  })
  $dialog.on('click', '.jqCancel', () => {
    if (typeof onCancel == 'function') onCancel()
    $dialog.remove()
  })
  $(document.body).append($dialog)
}
