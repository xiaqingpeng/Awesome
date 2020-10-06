import React from 'react';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {SimpleLineIcons, Feather, AntDesign} from '../../common/tool.js';

export const dataSource = [
  {
    icon: <AntDesign name="skin" size={30} color={'#707070'}></AntDesign>,
    content: '更换主题',
  },
  {
    icon: <AntDesign name="filetext1" size={30} color={'#707070'}></AntDesign>,
    content: '服务申请',
  },
  {
    icon: (
      <SimpleLineIcons
        name="location-pin"
        size={30}
        color={'#707070'}></SimpleLineIcons>
    ),
    content: '认证信息',
  },
  {
    icon: (
      <SimpleLineIcons
        name="cloud-upload"
        size={30}
        color={'#707070'}></SimpleLineIcons>
    ),
    content: '我的发布',
  },
  {
    icon: <AntDesign name="hearto" size={30} color={'#707070'}></AntDesign>,
    content: '我的收藏',
  },
  {
    icon: <Feather name="bookmark" size={30} color={'#707070'}></Feather>,
    content: '我的报名',
  },
  {
    icon: <AntDesign name="setting" size={30} color={'#707070'}></AntDesign>,
    content: '设置',
  },
];




