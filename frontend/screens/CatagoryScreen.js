import React, {useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import axios from "axios";
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';

function CatagoryScreen({ route, navigation }) {
  // ชื่อหมวดหมู่
  const categoryType = useSelector((state) => state.params.categoryType);
  const [Novel, setNovel] = useState([]);

  useEffect(() => {
    console.log(route.params);
    axios.get("http://10.0.2.2:3500/novel/getNovels")
    .then((response) => setNovel(response.data))
    .catch((err)=>console.log(err))

  }, []);
  const renderLoveCatagory = ({ item }) => {
    return item.category === categoryType ? (
      <View >
        {/* Card */}
        <View style={styles.cardfiction}>
            <Image style={styles.imagecardfiction} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}} />
            <View>
              <Text style={styles.titlecardfiction}>{item.title}</Text>
            </View>
            <View style={styles.usercardfiction}>
              <FontAwesome5 name="user-alt" size={16} color="#909090" />
              <Text style={styles.txtcardfiction}>  {item.owner.username}</Text>
            </View>
            <View style={styles.count}>
              <Ionicons name="eye" size={18} color="#909090" />
              <Text style={styles.txtcardfiction}>  {item.views.length}  </Text>
              <Ionicons name="heart-sharp" size={18} color="#909090" />
              <Text style={styles.txtcardfiction}>  {item.like.length}  </Text>
            </View>
          </View>
        {/* End Card */}
      </View>
    ) : null;
  }
  return (
    // <View>
    //   <Text>ค่า prev: {categoryType}</Text>
    //   {/* อื่น ๆ ของหน้า CatagoryScreen */}
    // </View>
    <View>
        <Text>{route.params}</Text>
        {/* ScrollView ไว้ copy */}
        <ScrollView horizontal={true} >
        <View style={styles.rcmfiction}>
          {/* Card */}
          <FlatList
          data={Novel}
          keyExtractor={(item) => item._id}
          renderItem={renderLoveCatagory}
          numColumns={14}
          />
          {/* End Card */}
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
  },
  titleimage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 25,
    paddingTop: 20,
  },
  box: {
    backgroundColor: "#856BD1",
    flexDirection: 'row',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  box2: {
    marginLeft: 20,
    marginTop: 7,
  },
  txt1: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16
  },
  txt2: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 16
  },
  txt3: {
    color: "#fff",
    fontSize: 13,
    fontWeight: 'bold',
    
  },
  txt4: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 16,
    marginRight: 10
  },
  fiction: {
    flexDirection: 'row',
  },
  count: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  fictionlove: {
    backgroundColor: "#EEBED3",
    width: 70,
    height: 25,
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fictionsex: {
    backgroundColor: "#F8C678",
    width: 100,
    height: 25,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnreadgradient: {
    borderRadius: 8,
  },
  btnreadnowtext:{
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnreadnow: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  somecomponent: {
    backgroundColor: "#F9F5F5",
  },
  categoryimage: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  categoryitem: {
    alignItems: 'center',
    margin: 4
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  titleofall:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  // Card Chapter
  newchapter: {
    flexDirection: 'row',
  },
  imagecardchapter: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardchapter: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 160,
    //มีขอบแล้วมันแปกไม่ค่อยสวย5555555555
    // borderWidth: 1,
    // borderColor: '#5652C9',
    padding: 5
  },
  titlecardchapter:{
    fontSize: 15,
    marginTop: 4,
    fontWeight: 'bold',
  },
  ctfictionlove:{
    backgroundColor: "#EEBED3",
    width: 70,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
// Card Fiction All
  rcmfiction:{
    flexDirection: 'row',
  },
  cardfiction:{
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 160,
    padding: 5
  },
  usercardfiction: {
    flexDirection: 'row',
    marginBottom: 4
  },
  imagecardfiction: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlecardfiction:{
    fontSize: 15,
    marginTop: 4,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  txtcardfiction: {
    color: '#7B7D7D'
  },
  chaptercardchapter: {
    marginBottom: 5
  }
});
export default CatagoryScreen;