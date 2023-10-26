import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons'; 
import { useSelector } from "react-redux";
import axios from "axios";

const Notifications = ({route, navigation}) => {
  const [Notification, setNotification] = useState([]);
  const userId = useSelector((state) => state.params.userId);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://10.0.2.2:3500/user/getNotification", {
          params: {
            userId: userId
          }
        })
        setNotification(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  });


  const renderNotification = ({ item }) => {
    // console.log(item.chapterData.title);
    return (
      <View>

      <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={{ uri: `http://10.0.2.2:3500/img/${item.images}`}} />
      <View>
      {/* <Text style={styles.textbox1}>ตอนใหม่มาแล้ว! </Text> */}
      <Text style={styles.textbox1}>{item.titleOfNovel}</Text>
      <Text style={styles.textbox3}>{item.chapterData.title}</Text>
      
      <View style={{marginBottom: 20}}></View>
      {/* <View style={styles.count}>
        <Ionicons name="eye" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.like.length}  </Text>
        <Ionicons name="heart-sharp" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.views.length}</Text>
      </View> */}
      </View>
    </View>



      </View>
    )
  }

  return (
    <View>

    <ScrollView>
        <FlatList
          data={Notification}
          renderItem={renderNotification}
          keyExtractor={(item) => item._id}
          />
    </ScrollView>
    


    </View>
  )
}
const styles = StyleSheet.create({
  boxnoti: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  imagebox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  textbox1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 12,
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
  textbox3: {
    fontSize: 18,
    marginBottom: 4,
    // margin: 10,
    // marginBottom: 0,
  },
});
export default Notifications