import { StyleSheet, View, Text, TouchableOpacity, Image, TouchableHighlight, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
const BookShelfScreen = ({route, navigation}) => {

  return (
    <View>
      <ScrollView>
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
              <Text style={{ fontSize: 14, color: '#909090'}}>ingfah bbibbi</Text>
            </View>
            {/* จำนวนคนดู  กดหัวใจ ปุ่มอ่านเลย */}
            <View style={styles.view1_3}>
              <View style={{flexDirection: 'row'}}>
                {/* จำนวนคนดู */}
                <Ionicons style={{marginRight: 2, marginTop: 1}} name="eye" size={17} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>12.2k</Text>
                {/* จำนวนคนกดหัวใจ */}
                <FontAwesome style={{marginRight: 2 , marginTop: 2,}} name="heart" size={15} color="#909090" />
                <Text style={{ fontSize: 14, color: '#7B7D7D', marginRight: 8, marginTop: 1}}>521</Text>
              </View>
              
              {/* ปุ่มอ่านเลย */}
              <LinearGradient colors={['#FBBC2C', '#FE8F7C']} style={styles.btnreadgradient} >
                <TouchableOpacity style={styles.btnreadnow} onPress={() => { navigation.navigate("IndexFiction") }}>
                    <Text style={styles.btnreadnowtext}>อ่านเลย</Text>
                </TouchableOpacity>
              </LinearGradient>
              
            </View>
          </View>
        </View>
        </View>
  </ScrollView>
      {/* <Button
        title="อ่านเลย"
        onPress={() => {
          navigation.navigate("IndexFiction")
        }}
      /> */}
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
    width: '100%',
    height: 120,
    borderColor: '#dcdcdc',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'

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

export default BookShelfScreen