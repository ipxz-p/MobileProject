import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Pressable, Platform, TouchableWithoutFeedback} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React , { useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons} from "@expo/vector-icons";
import { useSelector, useDispatch} from 'react-redux';
import { changeUserId } from '../store/actions/paramsAction';



const ProfileScreen = ({route, navigation}) => {

  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');

  const dispatch = useDispatch();
 
  useFocusEffect(
      React.useCallback(() => {
        const fetchDataByToken = async () => {
          try {
            const dataToken = await AsyncStorage.getItem('token');
            setToken(dataToken);
            const decodeToken = jwtDecode(dataToken);
            setUserId(decodeToken.UserInfo.id);
            dispatch(changeUserId(decodeToken.UserInfo.id));
            setUsername(decodeToken.UserInfo.username);
            setEmail(decodeToken.UserInfo.email);
            setdateOfBirth(decodeToken.UserInfo.dateOfBirth);
          } catch (error) {
            // จัดการข้อผิดพลาด
          }
        };
        fetchDataByToken();
        
  
    }, [])
  );

  const onLogout = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(changeUserId(''));
    navigation.navigate('LoginScreen')
    alert('ออกจากระบบเรียบร้อยแล้ว')
  
}

  const toggleDatepicker= () => {
    setShowPicker(!showPicker);
  }

  const onChangeDate = ({type}, selectedDate) => {
    if (type == "set"){
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android'){
        toggleDatepicker();
        setdateOfBirth(currentDate.toDateString());
       
      }
      else {
        toggleDatepicker();
      }
    }
    else {
      toggleDatepicker();
    }
  }

  const updateToken = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3500/auth/refresh', {
        params: {
          token: token
            },
      });
      if (response.status === 200){
        await AsyncStorage.setItem('token', response.data.accessToken)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async () => {
    try {
      const response = await axios.put('http://10.0.2.2:3500/user/updateUser', { 
        userId,
        username,
        email,
        dateOfBirth
      });
      if (response.status === 200){
        await updateToken();
        alert('บันทึกข้อมูลเรียบร้อยแล้ว')
         }
    }
    catch (error) {
      console.log('เกิดข้อผิดพลาดในการ put  ' + error);
    }
  }



  return (
    

      <View style={styles.view}>
      
      <TouchableWithoutFeedback>
        <View>
          <Image style={{height: 150, width: 150, resizeMode: 'contain', borderRadius: 100, alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 4}} source={{ uri: 'https://media.discordapp.net/attachments/1122166608937361559/1164268361560109126/avatar-3814049_1280.png?ex=65429868&is=65302368&hm=e0a94bcdf076b9720589706e6b2122f036b725492ad1f5b0de094d85ada72fea&=&width=701&height=701'}}></Image>
          <View style={{height: 35, width: 35, position: "absolute", bottom: 0, right: 87, zIndex: 9999, backgroundColor: '#C0C0C0', borderRadius:20 }}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: 5}} name="photo-camera" size={25} color={'white'}/>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8, marginTop: 10,}}>ชื่อ</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}   placeholder="ชื่อ" value={username} onChangeText={(username) => setUsername(username)}></TextInput>

      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>อีเมลล์</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="email@example.com" value={email} onChangeText={(email) => setEmail(email)}></TextInput>
      
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>วัน/เดือน/ปี เกิด</Text>
      
      {showPicker &&(
        <DateTimePicker mode='date' display='spinner' value={date} onChange={onChangeDate} />
      )}

      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
        <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20, color: 'black'}}  placeholder="dd/mm/yyyy" value={dateOfBirth} editable={false} onChangetext={(date) => setdateOfBirth(date)}></TextInput>
      </Pressable>
      )}

      
   
      <LinearGradient  style={{borderRadius: 5, marginBottom: 10, marginTop: 8,}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={updateUser}>
          <Text style={{ color: '#fff', fontSize: 18, }}>บันทึก</Text>
        </TouchableOpacity>
      </LinearGradient>

      <LinearGradient  style={{borderRadius: 5,}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={onLogout}>
          <Text style={{ color: '#fff', fontSize: 18, }}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </LinearGradient>

  
      

      </View>
      


    
  )
}

const styles = StyleSheet.create({

  addButton:{
    // backgroundColor: "#7551C6",
    width: 318,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
  },

  view:{
  margin: 40,
  },
  
})

export default ProfileScreen