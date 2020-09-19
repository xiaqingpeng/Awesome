
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
export  const array = [
    {
      title: '话题',
      id: 1,
      icon: (
        <MaterialCommunityIcons
          color={'#707070'}
          size={20}
          name="pound"></MaterialCommunityIcons>
      ),
    },
    {
      title: '活动',
      id: 2,
      name: 'mountains',
      icon: <Foundation   color={'#707070'} name="mountains"  size={20}></Foundation>,
    },
    {
      title: '投票',
      id: 3,
      name: 'graph-bar',
      icon: <Foundation   color={'#707070'} name="graph-bar"  size={20}></Foundation>,
    },
  ];