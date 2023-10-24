import React, {useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import axios from "axios";
import { Ionicons, FontAwesome5  } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { changeNovelId, gotoCategory } from "../store/actions/paramsAction";
function CatagoryScreen({ route, navigation }) {
  // ชื่อหมวดหมู่
  const categoryType = useSelector((state) => state.params.categoryType);
  const [Novel, setNovel] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(route.params);
    axios.get("http://10.0.2.2:3500/novel/getNovels")
    .then((response) => setNovel(response.data))
    .catch((err)=>console.log(err))
  }, []);


  const novelIdHandler = (navigation, novelId) => {
    dispatch(changeNovelId(novelId));
    navigation.navigate("IndexFiction");
  };


  const renderLoveCatagory = ({ item }) => {
    return item.category === categoryType ? (
      <View>
        
        <TouchableOpacity onPress={() => { novelIdHandler(navigation, item._id); }}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>{item.title}</Text>
      <View style={styles.usercard}>
        <FontAwesome5 name="user-alt" size={16} color="#909090" />
        <Text style={styles.textbox2}>  {item.owner.username}</Text>
      </View>
      <View style={styles.count}>
        <Ionicons name="eye" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.views.length}  </Text>
        <Ionicons name="heart-sharp" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.like.length}</Text>
      </View>
      </View>
    </View>
    </TouchableOpacity>
      </View>
    ) : null;
  }
  return (
    // <View>
    //   <Text>ค่า prev: {categoryType}</Text>
    //   {/* อื่น ๆ ของหน้า CatagoryScreen */}
    // </View>
    <View>
        {/* ScrollView ไว้ copy */}
        <ScrollView>
        <View style={{marginBottom: 8}}></View>
        <View style={styles.rcmfiction}>
          {/* Card */}
          <FlatList
          data={Novel}
          keyExtractor={(item) => item._id}
          renderItem={renderLoveCatagory}
          // numColumns={14}
          />
          {/* End Card */}
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  boxnoti: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,
  },
  imagebox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  textbox1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textbox2: {
    color: '#7B7D7D',
    margin: 2
  },
  usercard: {
    flexDirection: 'row',
    marginBottom: 4,
    
  },
  count: {
    flexDirection: 'row',
  },
});
export default CatagoryScreen;