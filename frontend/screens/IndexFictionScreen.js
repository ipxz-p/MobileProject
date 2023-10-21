import { View, Text, Button, StyleSheet, ScrollView, Image, Animated, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect  } from 'react'
import { AntDesign, Ionicons, FontAwesome  } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
const IndexFiction = ({route, navigation}) => {
  const novelId = useSelector((state) => state.params.novelId);
  return (
    <View>
       <Image style={styles.titleimage} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}} />
      {/* ในกล่องทั้งหมด */}
      <View style={{marginTop: 260}}>
      <ScrollView style={{borderRadius: 20}}>
        {/* เนื้อหานิยาย */}
        <View style={{backgroundColor: '#fff', borderRadius: 20}}>
          {/* ชื่อเรื่อง */}
          <Text style={{fontSize: 20, fontWeight: 'bold', margin: 10}}>{novelId}qwe</Text>
          {/* นักเขียน */}
          <View style={{fontSize: 17, fontWeight: 'bold', marginLeft: 10, marginTop: 0, marginBottom: 5, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 10}}>by ingfah bbibbi</Text>
            <View style={{backgroundColor: '#7FD6C2', borderRadius: 8, padding: 4}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>ติดตาม</Text>
            </View>
          </View>
          {/* แท็ก */}
          <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 0, marginBottom: 5,}}>
            <View  style={{backgroundColor: '#EEBED3', borderRadius: 8, padding: 4, marginRight: 10}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>นิยายรัก</Text>
            </View>
            <View  style={{backgroundColor: '#F8C678', borderRadius: 8, padding: 4}}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>นิยาย 18+</Text>
            </View>
          </View>
          {/* คำโปรย */}
          <View style={{margin: 10}}>
            <Text>ในโลกของเราทุกความรู้สึกและการเลือกที่ดีที่สุดของเราอาจต้องผ่านพ้นความมืดของนายมาเฟีย ความมาเฟียอาจจะทำให้เราล้มเหลวในความรัก</Text>
          </View>
        {/* 3 ปุ่มข้างล่าง */}
        <View style={{margin: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5, padding: 10, backgroundColor: '#AF97E4', borderRadius: 8,}}>
            <AntDesign name="pluscircleo" size={24} color="#fff" />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, marginLeft: 4}}>เพิ่มลงชั้นหนังสือ</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5, padding: 10, backgroundColor: '#FE83EA', borderRadius: 8,}}>
            <AntDesign name="hearto" size={24} color="#fff" />
            {/* ไอคอนเมื่อกดถูกใจแล้ว */}
            {/* <AntDesign name="heart" size={24} color="#fff" /> */}
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, marginLeft: 4}}>ถูกใจ</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginRight: 5, padding: 10, backgroundColor: '#FF6B7D', borderRadius: 8,}}>
            <AntDesign name="exclamationcircleo" size={24} color="#fff" />
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15, marginLeft: 4}}>รายงาน</Text>
          </View>
        </View>
        {/* หัวข้อ ตอนทั้งหมด*/}
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4, marginBottom: 5}}>ตอนทั้งหมด (15)</Text>
        {/* จบ 3 ปุ่มข้างล่าง */}


          <View>
            {/* Box Chapter */}
            <TouchableOpacity onPress={() => { navigation.navigate("ChapterFiction") }}>
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#1</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 1 แต่งงานกันนะไอต้าว</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>982</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>10k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>1</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          {/* End Box ตอนที่ */}
          {/* HARDCODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
          {/* Box ตอนที่ */}
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#2</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 2 เลิกกันเถอะ</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>902</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>9k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>30</Text>
              </View>
            </View>
          </View>
          {/* End Box ตอนที่ */}
          {/* Box ตอนที่ */}
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#3</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 3 อะไรนะ เธอท้อง</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>982</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>10k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>25</Text>
              </View>
            </View>
          </View>
          {/* End Box ตอนที่ */}
          {/* Box ตอนที่ */}
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#4</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 4 แต่งงานกันนะไอต้าว</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>777</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>5k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>11</Text>
              </View>
            </View>
          </View>
          {/* End Box ตอนที่ */}
          {/* Box ตอนที่ */}
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#5</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 5 แต่งงานกันนะไอต้าว</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>777</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>5k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>11</Text>
              </View>
            </View>
          </View>
          {/* End Box ตอนที่ */}
          {/* Box ตอนที่ */}
          <View style={{padding: 10, borderColor: '#dcdcdc', borderWidth: 1,}}>
            <Text style={{ fontSize: 18, marginLeft: 2}}>#6</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 4}}>ตอนที่ 6 แต่งงานกันนะไอต้าว</Text>
            {/* 3icon 3text bottom */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <AntDesign name="hearto" size={19} color="#7B7D7D" />
                {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                <Text style={{marginLeft: 10}}>777</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <Ionicons name="eye" size={19} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>5k</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center' , marginRight: 30, marginLeft: 4, marginBottom: 5, marginTop: 5, }}>
                <FontAwesome name="comments-o" size={22} color="#7B7D7D" />
                <Text style={{marginLeft: 10}}>11</Text>
              </View>
            </View>
          </View>
          {/* End Box ตอนที่ */}
          {/* END HARDCODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
          </View>
        
        </View>
        </ScrollView>
      </View>
      
      


      <Button
        title="Chapter 1"
        onPress={() => {
          navigation.navigate("ChapterFiction")
        }}
      />











  
    </View>
  )
}

const styles = StyleSheet.create({
  titleimage: {
    width: '100%',
    height: 450,
    position: 'absolute',
  },
});
export default IndexFiction