import { View, Text, Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign  } from '@expo/vector-icons'; 
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";

const Author = ({route, navigation}) => {
  return (
    <View>


      <Image style={{height: 100, width: 100, borderRadius: 100, alignSelf: 'center', margin: 10}} source={require('../assets/auther.jpg')} />
      <Text style={{alignSelf: 'center', margin: 4}}>rwit suwanna</Text>
      <LinearGradient colors={['#FBBC2C', '#FE8F7C']} style={{alignSelf: 'center', margin: 2, padding: 6, borderRadius: 8, paddingLeft: 22, paddingRight: 22}} >
        <TouchableOpacity style={styles.btnreadnow}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>ติดตาม</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* เรียงกัน 3 อัน */}
      <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row',marginLeft: 20, marginRight: 20, margin: 8}}>
          <AntDesign name="edit" size={17} color='#070707' />
          <Text>งานเขียน 169 เรื่อง</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20, margin: 8}}>
        <AntDesign name="user" size={17} color='#070707' />
          <Text>ติดตาม 45.5k คน</Text>
        </View>
      </View>


      {/* นิยายทั้งหมด */}
      <Text style={{marginLeft: 12, fontWeight: 'bold', fontSize: 18, marginTop: 10}}>นิยายทั้งหมด</Text>
      {/* boxxxxxxxxxxxxxxxxxxxxxx */}
      <ScrollView>
        <TouchableOpacity onPress={() => {navigation.navigate("IndexFiction")}}>
        <View style={styles.myFiction}>
    {/* กล่องนิยายแต่ละเรื่อง*/}
      {/* รูปปกนิยายและข้อมูลนิยาย */}
        <View style={styles.view1}>
          {/* รูปปกนิยาย */}
          <View style={styles.view1_1}>
            <Image style={{height: 91, width: 91, resizeMode: 'contain', borderRadius: 10}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
          </View>
          
          {/* ข้อมูลนิยาย */}
          <View>
            {/* ชื่อนิยาย */}
            <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10,}}>รักเธอที่สุด นายมาเฟีย</Text>
            {/* อิโมจิและชื่อนักเขียน */}
            <View style={styles.view1_2}>
              {/* อิโมจิ */}
              <Octicons style={{marginRight: 12}} name="person-fill" size={17} color="#909090" /> 
              {/* ชื่อนักเขียน */}
              <Text style={{ fontSize: 14, color: '#909090'}}>rwit suwanna</Text>
            </View>
            {/* จำนวนคนดู  กดหัวใจ ปุ่มอ่านเลย */}
            <View style={styles.view1_3}>
              <View style={{flexDirection: 'row'}}>
                {/* จำนวนคนดู */}
                <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={17} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>15.7k</Text>
                {/* จำนวนคนกดหัวใจ */}
                <FontAwesome style={{marginRight: 2 , marginTop: 2,}} name="heart" size={15} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>784</Text>
              </View>
              
              
            </View>
          </View>
        </View>
        </View>
        </TouchableOpacity>
        
  </ScrollView>




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