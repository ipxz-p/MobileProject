import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Pressable, Platform} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React , { useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({route, navigation}) => {

  const [date, setDate] = useState(new Date());
  const [bday, setBday] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState(null);
  // const [password, setPassword] = useState('');
 
  
  useFocusEffect(
    React.useCallback(() => {
      const fetchDataByToken = async () => {
        try {
          const dataToken = await AsyncStorage.getItem('token');
          const decodeToken = jwtDecode(dataToken);
          console.log(decodeToken.UserInfo.id)
          setId(decodeToken.UserInfo.id)
          setUsername(decodeToken.UserInfo.username);
          setEmail(decodeToken.UserInfo.email);
          setBday(decodeToken.UserInfo.dateOfBirth)
        } catch (error) {
          // จัดการข้อผิดพลาด
        }
      };
      fetchDataByToken();
    }, [])
  );

    

  const onLogout = async () => {
    const dataToken = await AsyncStorage.removeItem('token');
    if (!dataToken){
      navigation.navigate('LoginScreen')
      alert('ออกจากระบบเรียบร้อยแล้ว')
      
  }
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
        setBday(currentDate.toDateString());
       
      }
      else {
        toggleDatepicker();
      }
    }
    else {
      toggleDatepicker();
    }
  }

  // const formatDate = (rawDate) => {
  //   let date = new Date(rawDate);
  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();

  //   return `${day}-${month}-${year}`;

  // }

  const updateUser = async () => {
    try {
      const dataToken = await AsyncStorage.getItem('token');
      const decodeToken = jwtDecode(dataToken);
      setId(decodeToken.UserInfo.id)
      const response = await axios.put('http://10.0.2.2:3500/user/updateUser', { 
        id
      });
      if (response.status === 200){
        alert("put")
   
      }

    }
    catch (error) {
      console.log('เกิดข้อผิดพลาดในการ put  ' + error);
    }
  }

  return (
    <View>

      <View style={styles.view}>

      <Image style={{height: 120, width: 120, resizeMode: 'contain', borderRadius: 100, alignSelf: 'center',}} source={{ uri: 'https://media.discordapp.net/attachments/1122166608937361559/1151920737851023380/e06af846317f4cc3b0e64ac9b5e8f53a.png?width=701&height=701'}}></Image>
      

      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8, marginTop: 10,}}>ชื่อ</Text>


      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}   placeholder="ชื่อ" value={username} onChangeText={(username) => setUsername(username)}></TextInput>

      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>อีเมลล์</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="email@example.com" value={email} onChangeText={(email) => setEmail(email)}></TextInput>
      
      {/* <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>รหัสผ่าน</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="รหัสผ่านใหม่ที่ต้องการเปลี่ยน"  onChangeText={(password) => setPassword(password)}></TextInput> */}
      
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>วัน/เดือน/ปี เกิด</Text>
      
      {showPicker &&(
        <DateTimePicker mode='date' display='spinner' value={date} onChange={onChangeDate} />
      )}

      {!showPicker && (
        <Pressable onPress={toggleDatepicker}>
        <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20, color: 'black'}}  placeholder="dd/mm/yyyy" value={bday} editable={false} onChange={(date) => setBday(date)}></TextInput>
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