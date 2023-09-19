import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={styles.bigView}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8,}}>เข้าสู่ระบบ</Text>
      <Text style={{fontSize: 15, marginBottom: 50,}}>ถ้าคุณมีบัญชีสมาชิกกับเราอยู่แล้ว เข้าสู่ระบบได้ที่นี่</Text>

      

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="อีเมลล์"></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16 }} placeholder="รหัสผ่าน"></TextInput>

      <LinearGradient  style={{borderRadius: 5, marginTop: 35, marginBottom: 9}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("ProfileScreen")}}>
          <Text style={{ color: '#fff', fontSize: 18, }}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </LinearGradient>

      

    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20,}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>ยังไม่ได้เป็นสมาชิก?</Text>
      <TouchableOpacity  onPress={() => {navigation.navigate("RegisterScreen")}}>
       <Text style={{ fontSize: 15, color: '#FE8F7C', fontWeight: 'bold'}}>คลิกที่นี่เพื่อสมัคร!</Text>
      </TouchableOpacity>
    </View>
    

      
      
    </View>
  )
}

const styles = StyleSheet.create({
  bigView:{
    marginTop: 100,
    marginHorizontal: 40,

    // backgroundColor: '#4a148c',
    // flex: 10,

  },
  addButton:{
    width: 318,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    
  }

})

export default LoginScreen