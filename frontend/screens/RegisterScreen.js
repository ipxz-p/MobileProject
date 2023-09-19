import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const RegisterScreen = ({route, navigation}) => {
  return (

    <View style={styles.bigView}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8,}}>สมัครสมาชิก</Text>
      <Text style={{fontSize: 15, marginBottom: 40,}}>ลงทะเบียนเป็นสมาชิกกับเราได้ที่นี่</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="ชื่อ"></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="อีเมลล์"></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16 ,marginBottom: 20,}} placeholder="เบอร์โทรศัพท์"></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="อีเมลล์"></TextInput>


      <LinearGradient  style={{borderRadius: 5, marginTop: 12, marginBottom: 5}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("ProfileScreen")}}>
          <Text style={{ color: '#fff', fontSize: 18, }}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </LinearGradient>
      

    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20,}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>เคยสมัครสมาชิกแล้ว?</Text>
      <TouchableOpacity  onPress={() => {navigation.navigate("LoginScreen")}}>
       <Text style={{ fontSize: 15, color: '#FE8F7C', fontWeight: 'bold'}}>คลิกที่นี่เพื่อเข้าสู่ระบบ!</Text>
      </TouchableOpacity>
    </View>

    
    

      
      
    </View>
   
  )
}

const styles = StyleSheet.create({
  bigView:{
    marginTop: 100,
    marginHorizontal: 40,

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

export default RegisterScreen