import React, { Component } from 'react'

import { Cell } from './style/weui'

class UserInfo extends Component {
  render() {
    const fields = {
      // 基本信息
      avatar: <Cell key='avatar' label='头像'><img style={styles.avatar} src='https://team.weui.io/avatar/bear.jpg' /></Cell>,
      school: <Cell key='school' label='学校'>学校</Cell>,
      name: <Cell key='name' label='姓名'>姓名</Cell>,
      nick_name: <Cell key='nick_name' label='昵称'>昵称</Cell>,
      email: <Cell key='email' label='Email'>Email</Cell>,
      pwd: <Cell key='pwd' label='Pwd'>Pwd</Cell>,
      enrollment_t: <Cell key='enrollment_t' label='登记时间'>登记时间</Cell>,
      graduation_t: <Cell key='graduation_t' label='毕业时间'>毕业时间</Cell>,
      is_driver: <Cell key='is_driver' label='是否车主'>是</Cell>,
      license_no: <Cell key='license_no' label='驾照号码'>驾照号码</Cell>,
      license_pic: <Cell key='license_pic' label='驾照照片'><img style={styles.avatar} src='https://team.weui.io/avatar/bear.jpg' /></Cell>,
      vehicle_1_brand: <Cell key='vehicle_1_brand' label='牌子'>牌子</Cell>,
      vehicle_1_model: <Cell key='vehicle_1_model' label='车型'>车型</Cell>,
      vehicle_1_num: <Cell key='vehicle_1_num' label='车牌'>车牌</Cell>,
      vehicle_1_pic: <Cell key='vehicle_1_pic' label='图片'>图片</Cell>,
      vehicle_2_brand: <Cell key='vehicle_2_brand' label='牌子'>牌子</Cell>,
      vehicle_2_model: <Cell key='vehicle_2_model' label='车型'>车型</Cell>,
      vehicle_2_num: <Cell key='vehicle_2_num' label='车牌'>车牌</Cell>,
      vehicle_2_pic: <Cell key='vehicle_2_pic' label='图片'>图片</Cell>,
      // 行程相关
      departure_time: <Cell key='departure_time' label='乘车时间'>2016年9月4日</Cell>,
      departure: <Cell key='departure' label='出发地'>骚斌温暖的家</Cell>,
      destination: <Cell key='destination' label='目的地'>骚斌温暖的家</Cell>,
      passenger_num: <Cell key='passenger_num' label='乘车人数'>4</Cell>,
      star: <Cell key='star' label='评分'>5星</Cell>,
      remark: <Cell key='remark' label='备注'>备注</Cell>
    }
    const cells = this.props.keys.map(key => fields[key] || '')
    return (
      <div style={styles.container}>
        <div className='weui_cells'>{ cells }</div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%'
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '4px',
    verticalAlign: 'middle'
  }
}

export default UserInfo
