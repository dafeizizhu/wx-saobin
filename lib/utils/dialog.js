import React, { Component } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

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

class DialogOk extends Component {
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
            <a href='javascript:;' className='weui_btn_dialog primary jqOK'>确定</a>
          </div>
        </div>
      </div>
    )
  }
}

export function myConfirm(msg, onOK, onCancel) {
  const $dialog = $(renderToStaticMarkup(<DialogOKCancel msg={msg} />))
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

export function myAlert(msg, onOk) {
  const $dialog = $(renderToStaticMarkup(<DialogOk msg={msg} />))
  $dialog.on('click', '.jqOK', () => {
    if (typeof onOk == 'function') onOk()
    $dialog.remove()
  })
  $(document.body).append($dialog)
}
