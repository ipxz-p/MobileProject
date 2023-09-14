import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native'
import React from 'react'

const ProfileScreen = ({route, navigation}) => {
  return (
    <ScrollView>

      <View style={styles.view}>

      <Image style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 100, alignSelf: 'center',}} source={{ uri: 'https://media.discordapp.net/attachments/1122166608937361559/1151920737851023380/e06af846317f4cc3b0e64ac9b5e8f53a.png?width=701&height=701'}}></Image>
      
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8, marginTop: 10,}}>ชื่อ</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="ชื่อ" value='heyabaebey'></TextInput>

      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>อีเมลล์</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="email@example.com" value="onyourbaebey@gmail.com"></TextInput>
      
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>รหัสผ่าน</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="รหัสผ่าน" value="***********"></TextInput>
      
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 17, marginBottom: 8,}}>วัน/เดือน/ปี เกิด</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 42, borderColor: '#dcdcdc', padding: 8, fontSize: 17, marginBottom: 20,}}  placeholder="dd/mm/yyyy" value='05/10/2002'></TextInput>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={{ color: '#fff', fontSize: 18, }}>บันทึก</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("LoginScreen")}}>
        <Text style={{ color: '#fff', fontSize: 18, }}>ออกจากระบบ</Text>
      </TouchableOpacity>

      </View>
      


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  addButton:{
    backgroundColor: "#7551C6",
    width: 318,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    
  },
  view:{
  margin: 40,
  }
})

export default ProfileScreen