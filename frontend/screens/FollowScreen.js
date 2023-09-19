import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const FollowScreen = ({route, navigation}) => {
  return (
    <View>



      {/* 1Auther */}
      <TouchableOpacity style={styles.btntoauther} onPress={() => { navigation.navigate("Author") }}>
        <View style={styles.viewbox}>
          <View style={styles.imandtext}>
            <Image style={styles.imagebox} source={require('../assets/auther.jpg')} />
            <Text>rwit suwanna</Text>
          </View>
          <TouchableOpacity style={styles.btndel}>
            <Text style={styles.btndeltext}>ลบออก</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      



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