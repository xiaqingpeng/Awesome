import React from 'react';
import { FontAwesome,AntDesign,FontAwesome5,MaterialCommunityIcons,Entypo} from '../../../../common/tool'
export const dataSource = [
  {
    icon:(background)=> (
      <AntDesign
        name="customerservice"
        size={30}
        color={background}></AntDesign>
    ),
    text: 'AI客服',
  },
  {
    icon:(background)=> (
      <FontAwesome5
        name="building"
        size={25}
        color={background}></FontAwesome5>
    ),
    text: '品牌商业',
  },
  {
    icon:(background)=> (
      <FontAwesome5 name="user-tie" size={25} color={background}></FontAwesome5>
    ),
    text: '服务联盟',
  },
  {
    icon:(background)=> (
      <Entypo
        name="new-message"
        size={25}
        color={background}></Entypo>
    ),
    text: '投诉建议',
  },
  {
    icon:(background)=> (
      <MaterialCommunityIcons
        name="room-service-outline"
        size={32}
        color={background}></MaterialCommunityIcons>
    ),
    text: '在线商圈',
  },
  {
    icon:(background)=> (
      <FontAwesome
        name="book"
        size={25}
        color={background}></FontAwesome>
    ),
    text: '会议预定',
  },
  {
    icon:(background)=> (
      <MaterialCommunityIcons name="home-city" size={25} color={background}></MaterialCommunityIcons>
    ),
    text: '关于讯美',
  },
  {
    icon:(background)=> (
      <AntDesign
        name="appstore-o"
        size={25}
        color={background}></AntDesign>
    ),
    text: '更多',
  },
];
export const array= [
  
  {
    icon:(background)=> (
      <FontAwesome5
        name="ban"
        size={25}
        color={background}></FontAwesome5>
    ),
    text: '智能门禁',
  },
  {
    icon:(background)=> (
      <MaterialCommunityIcons
        name="parking"
        size={32}
        color={background}></MaterialCommunityIcons>
    ),
    text: '停车缴费',
  },
  {
    icon:(background)=> (
      <AntDesign
        name="tool"
        size={30}
        color={background}></AntDesign>
    ),
    text: '物业维修',
  },
  {
    icon:(background)=> (
      <FontAwesome name="book" size={25} color={background}></FontAwesome>
    ),
    text: '会议室预定',
  }
];
