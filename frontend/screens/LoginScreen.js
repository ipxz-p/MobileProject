import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React , { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios  from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserId } from '../store/actions/paramsAction';
import jwtDecode from 'jwt-decode';



const LoginScreen = ({route, navigation}) => {
  const userId = useSelector((state) => state.params.userId);
  const [showPassword, setShowPassword] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }

  const onChangeEmailHandler = (email) => {
    setEmail(email)
  }

const onChangePasswordHandler = (password) => {
  setPassword(password)
  }

  const onSubmitFormHandler = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3500/auth/login', { 
        email, 
        password 
      });
      
      if (response.status === 200){
        AsyncStorage.setItem('token', response.data.accessToken);
        const dataToken = await AsyncStorage.getItem('token');
        const decodeToken = jwtDecode(dataToken);
        dispatch(changeUserId(decodeToken.UserInfo.id));
        if (userId) {
          alert('เข้าสู่ระบบเรียบร้อยแล้ว')
          navigation.navigate('ProfileScreen');
          
        }
   
      }
      
    } catch (error) {
      alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ: ' + error);
      
    }
  }

  return (
    <View style={styles.bigView}>
      <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 8,}}>เข้าสู่ระบบ</Text>
      <Text style={{fontSize: 15, marginBottom: 50,}}>ถ้าคุณมีบัญชีสมาชิกกับเราอยู่แล้ว เข้าสู่ระบบได้ที่นี่</Text>

      

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 45, borderColor: '#dcdcdc', padding: 10, fontSize: 16, marginBottom: 20,}}  keyboardType="email-address" value={email} onChangeText={onChangeEmailHandler} placeholder="อีเมลล์"></TextInput>

      <View style={styles.con_password}> 
                <TextInput secureTextEntry={!showPassword}   style={styles.input} value={password} onChangeText={onChangePasswordHandler} placeholder="รหัสผ่าน"/> 
                <MaterialCommunityIcons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#aaa" style={styles.icon} onPress={toggleShowPassword}/> 
      </View> 

      <LinearGradient  style={{borderRadius: 5, marginTop: 35, marginBottom: 9}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={onSubmitFormHandler}>
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

export default LoginScreen