import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React , { useState } from 'react'
import axios from 'axios'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const RegisterScreen = ({route, navigation}) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // เอาไว้ทำกดซ่อนไม่ซ่อน password
  const [showPassword, setShowPassword] = useState(false); 


  const onChangeUsernameHandler = (username) => {
    setUsername(username)
  }

  const onChangeEmailHandler = (email) => {
    setEmail(email)
  }

  const onChangePasswordHandler = (password) => {
    setPassword(password)
  }

  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 

  const onSubmitFormHandler = async (event) => {
    setIsLoading(true);


    if (!username.trim()) {
      alert("กรุณากรอกชื่อผู้ใช้");
      return;
    }
    else if (!email.trim()) {
      alert("กรุณากรอกอีเมลล์");
      return;
    }
    else if (!password.trim()) {
      alert("กรุณากรอกรหัสผ่าน");
      return;
    }
    try {
      const response = await axios.post(`http://10.0.2.2:3500/auth/register`, {
        username,
        email,
        password
      })
  
      if (response.status === 200) {
        alert('สมัครสมาชิกเสร็จสิ้น');
        setIsLoading(false)
        setUsername('');
        setEmail('');
        setPassword('');
        navigation.navigate('LoginScreen');
        console.log('สมัครเสร็จแล้ว')
      } 
      else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
      // จัดการข้อผิดพลาดที่นี่ ตัวอย่างเช่นแสดงข้อความผิดพลาดหรือดำเนินการเพิ่มเติม
    }
  }

  return (

    <View style={styles.bigView}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8,}}>สมัครสมาชิก</Text>
      <Text style={{fontSize: 15, marginBottom: 40,}}>ลงทะเบียนเป็นสมาชิกกับเราได้ที่นี่</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  placeholder="ชื่อผู้ใช้" value={username} onChangeText={onChangeUsernameHandler}></TextInput>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  keyboardType="email-address" placeholder="อีเมลล์" value={email} onChangeText={onChangeEmailHandler}></TextInput>


      <View style={styles.con_password}> 
                <TextInput secureTextEntry={!showPassword} value={password} onChangeText={onChangePasswordHandler} style={styles.input} placeholder="รหัสผ่าน"/> 
                <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#aaa" style={styles.icon} onPress={toggleShowPassword}/> 
      </View> 
      

      <LinearGradient  style={{borderRadius: 5, marginTop: 12, marginBottom: 5}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={onSubmitFormHandler}>
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
    
  },
  con_password: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f3f3f3', 
    borderRadius: 5, 
    paddingHorizontal: 10, 
    borderColor: '#dcdcdc',
    borderWidth: 1,
}, 
input: { 
    flex: 1, 
    color: '#333', 
    paddingVertical: 7, 
    paddingRight: 10, 
    fontSize: 16, 
}, 
icon: { 
    marginLeft: 10, 
}, 

})

export default RegisterScreen