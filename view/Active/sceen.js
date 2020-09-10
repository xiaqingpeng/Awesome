// import React,{Component} from 'react';
// import {Animated,StyleSheet,View,Text,Easing} from 'react-native';
// import { RNCamera } from 'react-native-camera'
// class ScanScreen extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           moveAnim: new Animated.Value(0)
//       };
      
//   }

//   componentDidMount() {
//       this.startAnimation();
//   }

//   startAnimation = () => {
//       this.state.moveAnim.setValue(0);
//       Animated.timing(
//           this.state.moveAnim,
//           {
//               toValue: -200,
//               duration: 1500,
//               easing: Easing.linear
//           }
//       ).start(() => this.startAnimation());
//   };
//   //  识别二维码
//   onBarCodeRead = (result) => {
//       const { navigate } = this.props.navigation;
//              const {data} = result;
//           navigate('Sale', {
//               url: data
//           })
//   };

//   render() {
//       return (
//           <View style={styles.container}>
//               <RNCamera
//                   ref={ref => {
//                       this.camera = ref;
//                   }}
//                   style={styles.preview}
//                   type={RNCamera.Constants.Type.back}
//                   flashMode={RNCamera.Constants.FlashMode.on}
//                   onBarCodeRead={this.onBarCodeRead}
//               >
//                   <View style={styles.rectangleContainer}>
//                       <View style={styles.rectangle}/>
//                       <Animated.View style={[
//                           styles.border,
//                           {transform: [{translateY: this.state.moveAnim}]}]}/>
//                       <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
//                   </View>
//                   </RNCamera>
//           </View>
//       );
//   }
// }

// export default ScanScreen;

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       flexDirection: 'row'
//   },
//   preview: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center'
//   },
//   rectangleContainer: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: 'transparent'
//   },
//   rectangle: {
//       height: 200,
//       width: 200,
//       borderWidth: 1,
//       borderColor: '#00FF00',
//       backgroundColor: 'transparent'
//   },
//   rectangleText: {
//       flex: 0,
//       color: '#fff',
//       marginTop: 10
//   },
//   border: {
//       flex: 0,
//       width: 200,
//       height: 2,
//       backgroundColor: '#00FF00',
//   }
// });


import React, { Component } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import {ScreenWidth, ScreenHeight} from '../../common/tool';
export default class ExampleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          whiteBalance={RNCamera.Constants.WhiteBalance.auto}
          ratio={'1:1'}
          quality={0.5}
          imageWidth={800}
          onCapture={(data)=>{
             console.log(data)
          }}
          onClose={()=>{
              console.log('cloes')
          }}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{
              console.log(this.camera)
              this.camera.props.onClose()
              this.camera.props.onCapture()
          }} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> 关闭 </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      console.log(this.camera)
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    width:ScreenWidth
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

