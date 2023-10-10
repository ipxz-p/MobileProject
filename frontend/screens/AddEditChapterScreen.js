import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const AddEditChapterScreen = ({route, navigation}) => {
  return (
    <View style={styles.view}>

      {/* รูปปก */}
      <Image style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center', marginTop: 20,}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>

      <Text style={{ fontWeight: 'bold', fontSize: 19, marginBottom: 10, marginTop: 25, marginLeft: 20,}}>บทที่ *</Text>

      {/* บทที่เท่าไหร่ */}
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginLeft: 20, marginRight: 20,}} placeholder="(ตัวอย่าง, บทที่ 1, ตอนที่ 1)"></TextInput>

      <Text style={{ fontWeight: 'bold', fontSize: 19, marginBottom: 10, marginLeft: 20, marginTop: 10,}}>ชื่อตอน</Text>

      {/*ชื่อตอน */}
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15, marginLeft: 20, marginRight: 20,}} placeholder="(ตัวอย่าง, แรกพบเธอ)"></TextInput>
      {/* ปุ่มบันทึก*/}

      <LinearGradient  style={{borderRadius: 20, marginTop: 12, marginBottom: 5, alignSelf: 'center'}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("ContentChpaterScreen")}}>
        <Text style={{ color: '#fff' }}>บันทึก</Text>
      </TouchableOpacity>
      </LinearGradient>
      

      <LinearGradient  style={{borderRadius: 50, marginTop: 10, marginBottom: 25,   alignSelf: 'center',}} colors={['#FD2C38', '#B0020C']} >
          <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("")}}>
            <Text style={{ color: '#fff' }}>ลบตอน</Text>
          </TouchableOpacity>
      </LinearGradient>

      

    
      
      
    </View>
  )
}

const styles = StyleSheet.create({

  addButton:{
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center'

    
  },
  view:{
  margin: 22,
  }
})

export default AddEditChapterScreen