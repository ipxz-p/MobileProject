// bae
import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const WritingScreen = ({route, navigation}) => {
  return (
    <View>
      {/* ปุ่มเพิ่มงานเขียน */}
      <LinearGradient  style={{borderRadius: 50, marginTop: 25, marginBottom: 5,  width:150, marginLeft: 220,}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("AddEditWritingScreen")}}>
          <Text style={{ color: '#fff' }}>เพิ่มงานเขียนใหม่</Text>
        </TouchableOpacity>
      </LinearGradient>
      
    
    <ScrollView>
    {/* กล่องนิยายแต่ละเรื่อง*/}
    <TouchableOpacity style={styles.myFiction} onPress={() => {navigation.navigate("AddEditWritingScreen")}}>
      {/* รูปปกนิยายและข้อมูลนิยาย */}
        <View style={styles.view1}>
          {/* รูปปกนิยาย */}
          <View style={styles.view1_1}>
            <Image style={{height: 80, width: 80, resizeMode: 'contain', borderRadius: 10}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
          </View>
          
          {/* ข้อมูลนิยาย */}
          <View>
            {/* ชื่อนิยาย */}
            <Text style={{fontWeight: '400', fontSize: 16, marginBottom: 10,}}>เกิดใหม่เป็นนางร้ายดาราสาว</Text>
            {/* อิโมจิและชื่อนักเขียน */}
            <View style={styles.view1_2}>
              {/* อิโมจิ */}
              <Octicons style={{marginRight: 12}} name="person-fill" size={17} color="#909090" /> 
              {/* ชื่อนักเขียน */}
              <Text style={{ fontSize: 14, color: '#909090'}}>heyabaebey</Text>
            </View>
            {/* จำนวนตอน จำนวนคนดู คอมเม้น กดหัวใจ */}
            <View style={styles.view1_3}>
              {/* จำนวนตอน */}
              <View style={{backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 8, paddingVertical:0.5, marginRight: 10,}}>
                <Text style={{ fontSize: 14, color: '#7B7D7D',}}>5 ตอน</Text>
              </View>
              {/* จำนวนคนดู */}
              <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={17} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>12.2k</Text>
              {/* จำนวนคนคอมเม้น */}
              <MaterialCommunityIcons style={{marginRight: 2, marginTop: 2,}} name="comment-processing" size={17} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8,  marginTop: 1}}>278</Text>
              {/* จำนวนคนกดหัวใจ */}
              <FontAwesome style={{marginRight: 2 , marginTop: 2,}} name="heart" size={15} color="#909090" />
              <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>521</Text>
            </View>
          </View>
        </View>

        {/* แถบข้อมูล */}
        <View style={styles.view2}>
          <MaterialCommunityIcons style={{marginRight: 5}} name="information" size={17} color="#909090" />
          <Text style={{ fontSize: 12, color: '#7B7D7D', marginRight: 10, }}>ข้อมูล</Text>
          <Text style={{ fontSize: 12, marginRight: 5}}>แก้ไข</Text>
          {/* แถบเวลาที่แก้ไข */}
          <Text style={{ fontSize: 12, marginRight: 25}}>พฤ. 03 ส.ค. 16:12 น.</Text>
          {/* สถานะเผยแพร่ */}
          <View style={{backgroundColor: '#7B7D7D', borderRadius: 10, paddingHorizontal: 10, paddingVertical:1, marginRight: 15, marginTop: 0,}}>
                <Text style={{ fontSize: 12, color: '#ECF0F1',}}>การเผยแพร่ : ปิด</Text>
          </View>
        </View>
    </TouchableOpacity>
  </ScrollView>
    </View>
  
  )
}
const styles = StyleSheet.create({
  
  addButton:{
    
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

  },

  myFiction:{
    width: 360,
    height: 155,
    marginTop: 20,
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
  },
  view2:{
    flexDirection: 'row',
    margin: 13,
  }

});


export default WritingScreen