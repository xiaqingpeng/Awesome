import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@ant-design/react-native';
import styles from './indexStyle';
const dataSource = [
  require('../../swiper_images/swiper1.png'),
  require('../../swiper_images/swiper2.png'),
  require('../../swiper_images/swiper3.png'),
  require('../../swiper_images/swiper4.png'),
];
const SwiperList = () => {
  const navigation = useNavigation();
  const handleSwiper = () => {
    return dataSource.map((item, index) => {
      return (
        <View style={styles.view_content} key={index}>
          <Image style={styles.swiper_images} source={item}></Image>
          {index == 3 ? (
            <Button
              style={styles.text_view}
              onPress={() => {
                navigation.navigate('Tabbar');
              }}
              style={styles.text_view}>
              马上体验
            </Button>
          ) : null}
        </View>
      );
    });
  };

  return (
    <Swiper
      style={styles.container}
      showsButtons={false}
      // autoplay={true}
      loop={false}
      showsPagination={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={{
        bottom: 30,
        left: 0,
      }}
      showsPagination={true}
      onIndexChanged={(index) => {
        console.log(index);
      }}>
      {handleSwiper()}
    </Swiper>
  );
};
export default SwiperList;
