import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign  } from '@expo/vector-icons'; 
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import axios from "axios";
import { changeNovelId, gotoCategory } from "../store/actions/paramsAction";
import { useDispatch } from "react-redux";
const Author = ({route, navigation}) => {
  const authorId = useSelector((state) => state.params.authorId);
  const [Author, setAuthor] = useState([]);
  const [Novel, setNovel] = useState([]);
  const userId = useSelector((state) => state.params.userId);
  const [NovelNum, setNovelNum] = useState(0);
  const dispatch = useDispatch();
  const [oneNovel, setOneNovel] = useState({})



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://10.0.2.2:3500/user/getAuthorFollower", {
          params: {
            userId: userId
          }
        })
        setAuthor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(); // Call the async function
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://10.0.2.2:3500/novel/getNovels", {
          params: {
            userId: userId
          }
        })
        setNovel(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(); // Call the async function
  }, []);

  const novelIdHandler = (navigation, novelId) => {
    dispatch(changeNovelId(novelId));
    navigation.navigate("IndexFiction");
  };



const renderAuthor = ({ item }) => {
    return item._id === authorId ? (
      <View>
        <View style={{marginBottom:20}}></View>
        <Image style={{height: 100, width: 100, borderRadius: 100, alignSelf: 'center', margin: 10}} source={{ uri: `http://10.0.2.2:3500/img/${item.profileImgPath}`}} />
      <Text style={{alignSelf: 'center', margin: 4}}>{item.username}</Text>
      {/* <LinearGradient colors={['#FBBC2C', '#FE8F7C']} style={{alignSelf: 'center', margin: 2, padding: 6, borderRadius: 8, paddingLeft: 22, paddingRight: 22}} >
        <TouchableOpacity style={styles.btnreadnow}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>ติดตามแล้ว</Text>
        </TouchableOpacity>
      </LinearGradient> */}
      {/* เรียงกัน (1) อัน */}
      <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20, margin: 8}}>
        <AntDesign name="user" size={17} color='#070707' />
          <Text>ผู้ติดตาม {item.follower.length+1} คน</Text>
        </View>
      </View>

      </View>
    ) : null;
  }


  const renderNovel = ({ item }) => {
    // setNovelNum(NovelNum+1);
    return item.owner._id === authorId ? (
      <ScrollView>
        <TouchableOpacity onPress={() => { novelIdHandler(navigation, item._id); }}>
        <View style={styles.myFiction}>
    {/* กล่องนิยายแต่ละเรื่อง*/}
      {/* รูปปกนิยายและข้อมูลนิยาย */}
        <View style={styles.view1}>
          {/* รูปปกนิยาย */}
          <View style={styles.view1_1}>
            <Image style={{height: 91, width: 91, resizeMode: 'contain', borderRadius: 10}} source={{ uri: `http://10.0.2.2:3500/img/${item.images}`}}></Image>
          </View>
          
          {/* ข้อมูลนิยาย */}
          <View>
            {/* ชื่อนิยาย */}
            <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10,}}>{item.title}</Text>
            {/* ขั้นไว้เฉยๆ */}
            <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={19} color="#F9F5F5" />
            {/* จำนวนคนดู  กดหัวใจ ปุ่มอ่านเลย */}
            <View style={styles.view1_3}>
              <View style={{flexDirection: 'row'}}>
                {/* จำนวนคนดู */}
                <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={17} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>{item.chapterViewsSum}</Text>
                {/* จำนวนคนกดหัวใจ */}
                <FontAwesome style={{marginRight: 2 , marginTop: 2,}} name="heart" size={15} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>{item.chapterLikeSum}</Text>
              </View>
            </View>
          </View>
        </View>
        </View>
        </TouchableOpacity>
  </ScrollView>
    ) : null;
  }

  return (
    <View>
        <FlatList
          data={Author}
          keyExtractor={(item) => item._id}
          renderItem={renderAuthor}
          />

        {/* นิยายทั้งหมด */}
        <Text style={{marginLeft: 12, fontWeight: 'bold', fontSize: 18, marginTop: 10}}>นิยายทั้งหมด</Text>

        <FlatList
          data={Novel}
          keyExtractor={(item) => item._id}
          renderItem={renderNovel}
          />



    </View>
  )
}
const styles = StyleSheet.create({
  addButton:{
    backgroundColor: "#7551C6",
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    marginLeft: 225,
    marginTop: 20,
  },

  myFiction:{
    width: 360,
    height: 121,
    marginTop: 4,
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
    width: 260,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnreadgradient: {
    borderRadius: 8,
    flex: 0.6,
    justifyContent: 'flex-end', // ตั้งค่าให้ชิดขวาแนวนอน
    alignItems: 'center',
    padding: 5
  },
  btnreadnowtext:{
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnreadnow: {
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Author