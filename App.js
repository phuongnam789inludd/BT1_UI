import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'

const App = () => {
  const [userName, setUserName]=useState('');
  const [passWord, setPassWord]= useState('');
  const handleThonbao=()=>{
     Alert.alert(`Tai khoan: ${userName}${'\n'}Mat khau: ${passWord}`);
  }
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1,justifyContent:'center'}} resizeMode='cover' source={{uri:'https://phongvu.vn/cong-nghe/wp-content/uploads/2020/11/119234579_169457918065236_755533166268046471_n-1.jpg' }}>
        <View style={{marginHorizontal:10}}>
          <Image height={290} resizeMode='cover' source={{uri:'https://media.bongda.com.vn/files/news/2021/11/20/doi-hinh-vi-dai-nhat-barca-trong-thap-ky-qua-msn-gieo-rac-con-ac-mong-123833.jpg'}} />    
          <Text style={{textAlign:'right'}}>REGISTER</Text>
          <View style={style.inputText}>
              <TextInput style={{fontSize:20}} value={userName} onChangeText={setUserName} placeholder='Username'></TextInput>
              <TextInput style={{fontSize:20}} value={passWord} onChangeText={setPassWord} placeholder='Password'></TextInput>
              <TouchableOpacity onPress={()=>handleThonbao()} style={{backgroundColor:'red',padding:10}}>
                  <Text style={{textAlign:'center'}}>LOGIN</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
const style= StyleSheet.create({
  inputText:{
    backgroundColor:'gray'
  }
})

export default App 