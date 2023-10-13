// bae
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView} from 'react-native'
import React from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const AddEditWritingScreen = ({route, navigation}) => {
  return (
    <ScrollView>
      {/* ก้อนสถานะจบ สถานะเผยแพร่ */}
      <View style={styles.view}>

        <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>ตั้งค่าสถานะเรื่อง</Text>

        {/* สถานะเผยแพร่ */}
        <View style={{flexDirection: 'row', marginBottom: 15,}}>
          <Text style={{fontSize: 15, alignSelf: 'flex-start', marginRight:150,}}>สถานะเรื่อง</Text>
          <Text style={{marginRight: 5, marginTop: 3, fontSize: 13,}}>ยังไม่เผยแพร่</Text>

          {/* switch เผยแพร่ไม่เผยแพร่ */}
          <Switch style={{marginTop: -1,}}
          trackColor={{ true: "#7551C6", false: "lightgray" }}
          thumbColor={"white"}/>
        </View>

        {/* สถานะจบ */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, alignSelf: 'flex-start', marginRight:190,}}>สถานะจบ</Text>
          <Text style={{marginRight: 5, marginTop: 3, fontSize: 13,}}>ยังไม่จบ</Text>

          {/* switch จบไม่จบ */}
          <Switch style={{marginTop: -1,}}
          trackColor={{ true: "#7551C6", false: "lightgray" }}
          thumbColor={"white"}/>
        </View>
      </View>
      {/* เส้นสีเทา */}
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>

      {/* ก้อนรูปปก */}
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>รูปภาพหน้าปก</Text>

        {/* รูป */}
        <Image style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center'}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
      </View>

      {/* เส้นสีเทา */}
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>

      {/* ก้อนชื่อ คำโปรย */}
      <View style={styles.view}>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ชื่อเรื่อง</Text>

      {/* textinput ชื่อเรื่อง */}
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15,}} placeholder="ชื่อเรื่องนิยาย"></TextInput>
      
      {/* textinput คำโปรย */}
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>คำโปรย</Text>
      <TextInput multiline style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, paddingTop: 10,}} placeholder="คำโปรยนิยาย"></TextInput>
      </View>

       {/* เส้นสีเทา */}
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>

      {/* ก้อนจำนวนกตอน */}
      <View style={styles.view}>
        {/* จำนวนตอน */}
        <Text style={{fontWeight: 'bold', fontSize: 19,}}>ตอนทั้งหมด (2)</Text>
        {/* ปุ่มเพิ่มตอนใหม่ */}
        <LinearGradient  style={{borderRadius: 50, marginTop: 25, marginBottom: 5,  width:150,  alignSelf: 'center',}} colors={['#FBBC2C', '#FE8F7C']} >
          <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("AddEditChapterScreen")}}>
            <Text style={{ color: '#fff' }}>เพิ่มตอนใหม่</Text>
          </TouchableOpacity>
        </LinearGradient>
       
      </View>

        {/* ก้อนตอน */}
        <TouchableOpacity style={styles.chapter} onPress={() => {navigation.navigate("AddEditChapterScreen")}}>
          {/* เลขตอน */}
          <Text>#1</Text>
          {/* chapter เท่าไหร่ ชื่อตอน */}
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 5,}}>Chapter 1 แรกพบเธอ</Text>
          {/* ก้อนจำนวนคนดูและคอมเม้น */}
          <View style={{marginTop: 6, flexDirection: 'row'}}>
            {/* จำนวนคนดู */}
            <Ionicons style={{marginRight: 3,}} name="eye" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>158</Text>
            {/* จำนวนคนคอมเม้น */}
            <MaterialCommunityIcons style={{marginRight: 2, marginTop: 2,}} name="comment-processing" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>5</Text>
          </View>
        </TouchableOpacity>

      {/* ก้อน mockup ตอนเป็นตอนที่ 2 ก้อนนี้คือก้อนตอน */}
        <TouchableOpacity style={styles.chapter} onPress={() => {navigation.navigate("AddEditChapterScreen")}}>
          <Text>#2</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 5,}}>Chapter 2 จังหวะตกหลุมรัก</Text>
          <View style={{marginTop: 6, flexDirection: 'row'}}>
            <Ionicons style={{marginRight: 3,}} name="eye" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>113</Text>
            <MaterialCommunityIcons style={{marginRight: 2, marginTop: 2,}} name="comment-processing" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>2</Text>
          </View>
        </TouchableOpacity>

        {/* เส้นสีเทา */}
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6, marginTop: 5}}></View>

      
        <LinearGradient  style={{borderRadius: 50, marginTop: 25,   width:150,  alignSelf: 'center',}} colors={[ '#21C68A', '#0DC6B4']} >
          <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("WritingScreen")}}>
            <Text style={{ color: '#fff' }}>บันทึก</Text>
          </TouchableOpacity>
      </LinearGradient>

      <LinearGradient  style={{borderRadius: 50, marginTop: 15, marginBottom: 25,  width:150,  alignSelf: 'center',}} colors={['#FD2C38', '#B0020C']} >
          <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("")}}>
            <Text style={{ color: '#fff' }}>ลบนิยาย</Text>
          </TouchableOpacity>
      </LinearGradient>
     
      
      

    
      
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  addButton:{
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: 10,
    borderRadius: 50,
  },
  view:{
  margin: 22,
  },
  chapter:{
  marginLeft: 13,
  marginBottom: 18,
  }
})

export default AddEditWritingScreen