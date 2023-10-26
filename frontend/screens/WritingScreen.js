// bae
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native'
import React, {useState} from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeNovelFromUserId } from '../store/actions/paramsAction';


const WritingScreen = ({route, navigation}) => {


  const [owner, setOwner] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch()
  

  useFocusEffect(
    React.useCallback(() => {
      const fetchDataByToken = async () => {
        try {
          const dataToken = await AsyncStorage.getItem('token');
          const decodeToken = jwtDecode(dataToken);
          setOwner(decodeToken.UserInfo.id);
        } catch (error) {
        }
      };
      fetchDataByToken();

      const getNovelByUserId = async () => {
        const data = await axios.get('http://10.0.2.2:3500/novel/getNovels');
        const dataArray = Object.values(data.data)
        const filtered = dataArray.filter(item => item.owner._id === owner);
        setFilteredData(filtered);
      };
      getNovelByUserId();

  }, [owner])
);



    const novelFromUserIdHandler = (navigation, novelFromUserId) => {
      dispatch(changeNovelFromUserId(novelFromUserId))
      navigation.navigate("AddEditWritingScreen")
}

  return (
    <View>
      
      {/* ปุ่มเพิ่มงานเขียน */}
      <LinearGradient  style={{borderRadius: 50, marginTop: 25, marginBottom: 5,  width:150, marginLeft: 220,}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={() => { novelFromUserIdHandler(navigation, '') }}>
          <Text style={{ color: '#fff' }}>เพิ่มงานเขียนใหม่</Text>
        </TouchableOpacity>
      </LinearGradient>
      
    
    <ScrollView style={{marginBottom: 100}}>

    {filteredData.map(item => (
      
    <TouchableOpacity key={item._id} style={styles.myFiction} onPress={() => { novelFromUserIdHandler(navigation, item._id) }}>
      
        <View style={styles.view1}>
          
          <View style={styles.view1_1}>
            <Image style={{height: 80, width: 80, borderRadius: 10}} source={{ uri: `http://10.0.2.2:3500/img/${item.images}`}}></Image>
          </View>
          <View>
            <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10,}}>{item.title}</Text>
            
            <View style={styles.view1_2}>
             
              <Octicons style={{marginRight: 12}} name="person-fill" size={17} color="#909090" /> 
              
              <Text style={{ fontSize: 14, color: '#909090'}} >{item.owner.username}</Text>
            </View>
            
            <View style={styles.view1_3}>
              
              <View style={{backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 8, paddingVertical:0.5, marginRight: 10,}}>
                <Text style={{ fontSize: 14, color: '#7B7D7D',}}>{item.chapter.length} ตอน</Text>
              </View>
             
              <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={17} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}} > {item.chapterViewsSum}</Text>
              
              {/* <MaterialCommunityIcons style={{marginRight: 2, marginTop: 2,}} name="comment-processing" size={17} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8,  marginTop: 1}} >0</Text>
              */}
              <FontAwesome style={{marginRight: 2 , marginTop: 2,}} name="heart" size={15} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}} > {item.chapterLikeSum}</Text>
            </View>
          </View>
        </View>

    </TouchableOpacity>
    ))}
  </ScrollView>
  </View>
  
  )
}
const styles = StyleSheet.create({
  
  addButton:{
    
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

  },

  myFiction:{
    width: 360,
    height: 115,
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,

  },
  view1:{
    flexDirection: 'row',
    margin: 13,
    
    
  },
  view1_1:{
  marginRight: 15,
    
  },
  
  view1_2:{
    flexDirection: 'row',
    marginBottom: 8,
  },
  view1_3:{
    flexDirection: 'row',
    marginTop: 2.5,
  },
  view2:{
    flexDirection: 'row',
    margin: 13,
  }

});


export default WritingScreen