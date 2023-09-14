import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={styles.bigView}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8,}}>Welcome back </Text>
      <Text style={{fontSize: 15, marginBottom: 50,}}>sign in to  access your account</Text>

      

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="email@example.com"></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16 }} placeholder="password"></TextInput>

      

      <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("ProfileScreen")}}>
       <Text style={{ color: '#fff', fontSize: 18, }}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>

    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 20,}}>
      <Text style={{ fontSize: 15, marginRight: 5,}}>ยังไม่ได้เป็นสมาชิก?</Text>
      <TouchableOpacity  onPress={() => {navigation.navigate("RegisterScreen")}}>
       <Text style={{ fontSize: 15, color: '#7551C6', fontWeight: 'bold'}}>คลิกที่นี่เพื่อสมัคร!</Text>
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
    backgroundColor: "#7551C6",
    width: 110,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    
  }

})

export default LoginScreen