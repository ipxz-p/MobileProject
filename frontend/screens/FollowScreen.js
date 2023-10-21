import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from "axios";

const FollowScreen = ({route, navigation}) => {
  const [Author, setAuthor] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://10.0.2.2:3500/user/getAuthorFollower", {
          params: {
            userId: "6507fbc03aaf2d233f5008a0"
          }
        })
        setAuthor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(); // Call the async function
  }, []);
  
  const renderAuthor = ({ item }) => {
    return (
      <View>
        {/* 1Auther */}
      <TouchableOpacity style={styles.btntoauther} onPress={() => { navigation.navigate("Author") }}>
        <View style={styles.viewbox}>
          <View style={styles.imandtext}>
            <Image style={styles.imagebox} source={require('../assets/auther.jpg')} />
            <Text>{item.username}</Text>
          </View>
          <TouchableOpacity style={styles.btndel}>
            <Text style={styles.btndeltext}>ลบออก</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {/* end 1Auther */}
      </View>
    )
  }
  return (
    <View>

          <FlatList
          data={Author}
          renderItem={renderAuthor}
          keyExtractor={(item) => item._id}
          />

      



      {/* <Button
        title="ผู้แต่งคนนี้"
        onPress={() => {
          navigation.navigate("Author")
        }}
      /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  viewbox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12
  },
  imagebox: {
    width: 65,
    height: 65,
    borderRadius: 100,
    marginRight: 12
  },
  
  imandtext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btndel: {
    borderWidth: 1,
    borderColor: '#FE8F7C',
    paddingLeft: 16,
    paddingRight: 16,
    padding: 7,
    borderRadius: 25,
  },
  btndeltext: {
    color: '#FE8F7C'
  }
});
export default FollowScreen