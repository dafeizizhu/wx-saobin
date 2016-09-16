import React, { Component } from 'react'

import { Cell } from './style/weui'

class UserInfo extends Component {
  render() {
    const info = $.extend({}, {
      avatar: '',
      school: '',
      name: '',
      nick_name: '',
      email: '',
      pwd: '',
      enrollment_t: '',
      graduation_t: '',
      is_driver: false,
      license_no: '',
      license_pic: '',
      vehicle_1_brand: '',
      vehicle_1_model: '',
      vehicle_1_num: '',
      vehicle_1_pic: '',
      vehicle_2_brand: '',
      vehicle_2_model: '',
      vehicle_2_num: '',
      vehicle_2_pic: '',
      departure_time: '',
      departure_name: '',
      destination_name: '',
      passenger_num: 0,
      star: '',
      remark: ''
    }, this.props.info)
    const fields = {
      // 基本信息
      avatar: <Cell key='avatar' label='头像'><img style={styles.avatar} src={info.avatar} /></Cell>,
      school: <Cell key='school' label='学校'>{info.school}</Cell>,
      name: <Cell key='name' label='姓名'>{info.name}</Cell>,
      nick_name: <Cell key='nick_name' label='昵称'>{info.nick_name}</Cell>,
      email: <Cell key='email' label='Email'>{info.email}</Cell>,
      pwd: <Cell key='pwd' label='Pwd'>{info.pwd}</Cell>,
      enrollment_t: <Cell key='enrollment_t' label='登记时间'>{info.enrollment_t}</Cell>,
      graduation_t: <Cell key='graduation_t' label='毕业时间'>{info.graduation_t}</Cell>,
      is_driver: <Cell key='is_driver' label='是否车主'>{info.is_driver ? '是' : '否'}</Cell>,
      license_no: <Cell key='license_no' label='驾照号码'>{info.license_no}</Cell>,
      license_pic: <Cell key='license_pic' label='驾照照片'><img style={styles.avatar} src={info.license_pic} /></Cell>,
      vehicle_1_brand: <Cell key='vehicle_1_brand' label='牌子'>{info.vehicle_1_brand}</Cell>,
      vehicle_1_model: <Cell key='vehicle_1_model' label='车型'>{info.vehicle_1_model}</Cell>,
      vehicle_1_num: <Cell key='vehicle_1_num' label='车牌'>{info.vehicle_num}</Cell>,
      vehicle_1_pic: <Cell key='vehicle_1_pic' label='图片'><img style={styles.avatar} src={info.vehicle_1_pic} /></Cell>,
      vehicle_2_brand: <Cell key='vehicle_2_brand' label='牌子'>{info.vehicle_2_brand}</Cell>,
      vehicle_2_model: <Cell key='vehicle_2_model' label='车型'>{info.vehicle_2_model}</Cell>,
      vehicle_2_num: <Cell key='vehicle_2_num' label='车牌'>{info.vehicle_2_num}</Cell>,
      vehicle_2_pic: <Cell key='vehicle_2_pic' label='图片'>{info.vehicle_2_pic}</Cell>,
      // 行程相关
      departure_time: <Cell key='departure_time' label='乘车时间'>{info.departure_time}</Cell>,
      departure_name: <Cell key='departure_name' label='出发地'>{info.departure_name}</Cell>,
      destination_name: <Cell key='destination_name' label='目的地'>{info.destination_name}</Cell>,
      passenger_num: <Cell key='passenger_num' label='乘车人数'>{info.passenger_num}</Cell>,
      star: <Cell key='star' label='评分'>{info.star}</Cell>,
      remark: <Cell key='remark' label='备注'>{info.remark}</Cell>
    }
    const cells = this.props.keys.map(key => fields[key] || '')
    return (
      <div className='weui_cells'>{ cells }</div>
    )
  }
}

const styles = {
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '4px',
    verticalAlign: 'middle'
  }
}

export default UserInfo
