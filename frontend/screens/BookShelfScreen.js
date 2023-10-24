import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView, FlatList, Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { changeNovelId, gotoCategory } from "../store/actions/paramsAction";
const BookShelfScreen = ({route, navigation}) => {
  const novel3Id = useSelector((state) => state.params.novel3Id);
  const userId = useSelector((state) => state.params.userId);
  const [Novel, setNovel] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://10.0.2.2:3500/novel/getBookshelfByUserId", {
          params: {
            userId: userId
          }
        });
        setNovel(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData(); // Initial data fetch

    const interval = setInterval(() => {
      fetchData(); // Fetch data every 3 seconds
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); //[novId]

  //กดไปหน้าnovel
  // const novelIdHandler = (navigation, novel3Id) => {
  //   console.log(novel3Id);
  //   dispatch(changeNovelId(novel3Id));
  //   navigation.navigate("IndexFiction");
  // };


  const renderNovel = ({ item }) => {
    return (
      <View>
          <Text>{item.title}</Text>
      </View>
    ) 
  }

  return (
    <View>
      <ScrollView>
        {/* ส่งชื่อนิยายมาได้แล้ว ต้องเอานิยายนี้มาเพิ่มใน db ของ user นี้ก่อน ละก็ render นิยายทั้งหมดของ user นี้
        ถ้ามีการส่ง Novel3Id มาซ้ำ ให้ลบออกจากชั้นหนังสือ  */}
        <FlatList
          data={Novel}
          renderItem={renderNovel}
          keyExtractor={(item) => item._id}
          />
        <Text></Text>
        <Text>จำนวนนิยายในชั้นหนังสือ: {Novel.length}</Text>
  </ScrollView>
      {/* <Button
        title="อ่านเลย"
        onPress={() => {
          navigation.navigate("IndexFiction")
        }}
      /> */}
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
    // marginLeft: 225,
    marginTop: 20,
  },

  myFiction:{
    width: '97%',
    height: 120,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin:6

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

export default BookShelfScreen