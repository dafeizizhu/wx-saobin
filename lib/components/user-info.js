import React, { Component } from 'react'

import { Cell } from './style/weui'

class UserInfo extends Component {
  render() {
    const fields = {
      // 基本信息
      avatar: <Cell label='头像'><img style={styles.avatar} src='https://team.weui.io/avatar/bear.jpg' /></Cell>,
      school: <Cell label='学校'>学校</Cell>,
      name: <Cell label='姓名'>姓名</Cell>,
      nick_name: <Cell label='昵称'>昵称</Cell>,
      email: <Cell label='Email'>Email</Cell>,
      pwd: <Cell label='Pwd'>Pwd</Cell>,
      enrollment_t: <Cell label='登记时间'>登记时间</Cell>,
      graduation_t: <Cell label='毕业时间'>毕业时间</Cell>,
      is_driver: <Cell label='是否车主'>是</Cell>,
      license_no: <Cell label='驾照号码'>驾照号码</Cell>,
      license_pic: <Cell label='驾照照片'><img style={styles.avatar} src='https://team.weui.io/avatar/bear.jpg' /></Cell>,
      vehicle_1_brand: <Cell label='牌子'>牌子</Cell>,
      vehicle_1_model: <Cell label='车型'>车型</Cell>,
      vehicle_1_num: <Cell label='车牌'>车牌</Cell>,
      vehicle_1_pic: <Cell label='图片'>图片</Cell>,
      vehicle_2_brand: <Cell label='牌子'>牌子</Cell>,
      vehicle_2_model: <Cell label='车型'>车型</Cell>,
      vehicle_2_num: <Cell label='车牌'>车牌</Cell>,
      vehicle_2_pic: <Cell label='图片'>图片</Cell>,
      // 行程相关
      departure_time: <Cell label='乘车时间'>2016年9月4日</Cell>,
      departure: <Cell label='出发地'>骚斌温暖的家</Cell>,
      passenger_num: <Cell label='乘车人数'>4</Cell>,
      rate: <Cell label='评分'>5星</Cell>,
      remark: <Cell label='备注'>备注</Cell>
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
