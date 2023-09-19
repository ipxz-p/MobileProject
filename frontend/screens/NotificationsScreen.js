import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome5  } from '@expo/vector-icons'; 

const Notifications = ({route, navigation}) => {
  return (
    <View>

    <ScrollView>
    {/* 1 BOX */}
    <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>ตอนที่1 แต่งงานกันนะไอต้าว</Text>
      <View style={styles.usercard}>
        <FontAwesome5 name="user-alt" size={16} color="#909090" />
        <Text style={styles.textbox2}>  ingfah bbibbi</Text>
      </View>
      <View style={styles.count}>
        <Ionicons name="eye" size={18} color="#909090" />
        <Text style={styles.textbox2}> 302k  </Text>
        <Ionicons name="heart-sharp" size={18} color="#909090" />
        <Text style={styles.textbox2}> 982</Text>
      </View>
      </View>
    </View>
    </TouchableOpacity>

    </ScrollView>
    


    </View>
  )
}
const styles = StyleSheet.create({
  boxnoti: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff'
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
export default Notifications