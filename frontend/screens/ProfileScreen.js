import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Pressable, Platform, TouchableWithoutFeedback, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React , { useState, useEffect} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons} from "@expo/vector-icons";
import { useSelector, useDispatch} from 'react-redux';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { changeAgeFromUserId } from '../store/actions/paramsAction';





const ProfileScreen = ({route, navigation}) => {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.params.userId);
  const [date, setDate] = useState(new Date());
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [checkChangeImg, setCheckChangeImg] = useState(false);
  const [pathImg, setPathImg] = useState('');
  const [uriImg, setUriImg] = useState('');
  const [nameImg, setNameImg] = useState('');
 
  useFocusEffect(
    React.useCallback(() => {

      const fetchData = async () => {
        if (!userId.trim()){
          navigation.navigate('LoginScreen');
        }

        try {
          const data = await axios.get('http://10.0.2.2:3500/user/getUser' ,{
          params:{
              userId: userId
            }})

        const bday = data.data.dateOfBirth;

        if (!bday){
          setdateOfBirth('กรุณาเลือกวันเกิด');
        }
        else if (bday){

          const dateNow = new Date();
          const dateBirth = new Date(bday);
          var age_now = dateNow.getFullYear() - dateBirth.getFullYear();
          var m = dateNow.getMonth() - dateBirth.getMonth();
          if (m < 0 || (m === 0 && dateNow.getDate() < dateBirth.getDate())) {
              age_now--;
            }
            dispatch(changeAgeFromUserId(age_now));
            const formattedString = bday.split('T')[0];
            setdateOfBirth(formattedString);
          }
          
          setUsername(data.data.username);
          setEmail(data.data.email);
          setNameImg(data.data.profileImgPath);
          setUriImg(imgDir + data.data.profileImgPath);
          setPathImg(data.data.profileImgPath);
          setCheckChangeImg(false);
  
        } catch (error) { 
          console.log(error)
        }
      }
  
      fetchData();
      loadImages();
      

    }, [userId])
  )


  const onLogout = async () => {
    alert('ออกจากระบบเรียบร้อยแล้ว')
    navigation.navigate('LoginScreen')
    await AsyncStorage.removeItem('token');
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
        const formattedText = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + currentDate.getDate().toString().padStart(2, '0');
        setdateOfBirth(formattedText);
       
      }
      else {
        toggleDatepicker();
      }
    }
    else {
      toggleDatepicker();
    }
  }


  const updateUser = async () => {

    try {
    setPathImg(nameImg);

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('images', {
       uri: uriImg,
       type: 'image/jpeg', 
       name: nameImg,
    });
      const response = await axios.put('http://10.0.2.2:3500/user/updateUser', formData);

      if (response.status === 200){
        alert('บันทึกข้อมูลเรียบร้อยแล้ว');
        setCheckChangeImg(false);
      }
    }
    catch (error) {
      console.log('เกิดข้อผิดพลาดในการ put  ' + error);
    }
  }


  const imgDir = FileSystem.documentDirectory + 'images/';

  const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDir, {intermediates: true});

    }
  }

  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0){
      setImages([imgDir + files[files.length - 1]]);
    }
    
  }

  const selectImage = async (useLibrary) => {
    let result;

    const options = ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      aspect: [4, 3],
      quality: 0.75,
    }

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
      
    } 

    if (!result.canceled) {
      saveImage(result.assets[0].uri)
    }
}

  const saveImage = async (uri) => {
    await ensureDirExists();
    const fileName = new Date().getTime() + '.jpg';
    const dest = imgDir + fileName;
    await FileSystem.copyAsync({from : uri, to: dest});
    setCheckChangeImg(true);
    setImages([dest]);
    setNameImg(fileName);
    setUriImg(dest);
  }

  

  
  return (
    
      <View style={styles.view}>
        <View>
        {!checkChangeImg ? (
          <Image style={{height: 150, width: 150, borderRadius: 100, alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 4}}  source={{uri: `http://10.0.2.2:3500/img/${pathImg}`}}>
          </Image>  
           ) : (
          <View>
          {images.map((img) => (
          <Image key={img} style={{height: 150, width: 150, borderRadius: 100, alignSelf: 'center', borderColor: '#C0C0C0', borderWidth: 4}} source={{ uri: img}}>
          </Image>  ))}
          </View>
           )} 
          <TouchableWithoutFeedback onPress={() => selectImage(true)}>
          <View style={{height: 35, width: 35, position: "absolute", bottom: 0, right: 87, zIndex: 9999, backgroundColor: '#C0C0C0', borderRadius:20 , top: 110}}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: 5}} name="photo-camera" size={25} color={'white'}/>
          </View>

          </TouchableWithoutFeedback>
        </View>
      

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