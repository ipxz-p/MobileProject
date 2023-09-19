import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome5  } from '@expo/vector-icons'; 

const HomeScreen = ({route, navigation}) => {
  
  return (
    <View>



      <ScrollView>
        {/* Top of the week */}
      <LinearGradient
        colors={['#5652C9', '#8151C5']} >
        <Text style={styles.title}>Top of the week</Text>

        <View style={styles.box}>
          <Image style={styles.titleimage} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}} />
          <View style={styles.box2}>
            <Text style={styles.txt1}>รักเธอที่สุด นายมาเฟีย</Text>
            <View style={styles.user}>
              <FontAwesome5 name="user-alt" size={17} color="#fff" />
              <Text style={styles.txt2}>  ingfah bbibbi</Text>
            </View>
            

            <View style={styles.fiction}>
              <View style={styles.fictionlove}>
                <Text style={styles.txt3}>นิยายรัก</Text>
              </View>
              <View style={styles.fictionsex}>
                <Text style={styles.txt3}>นิยาย18+</Text>
              </View>
            </View>

            <View style={styles.count}>
              <Ionicons name="eye" size={19} color="#fff" />
              <Text style={styles.txt4}> 302k</Text>
              <Ionicons name="heart-sharp" size={19} color="#fff" />
              <Text style={styles.txt4}> 982</Text>
            </View>

            <LinearGradient colors={['#FBBC2C', '#FE8F7C']} style={styles.btnreadgradient} >
              <TouchableOpacity onPress={() => { navigation.navigate("IndexFiction") }}
                style={styles.btnreadnow}>
                <Text style={styles.btnreadnowtext}>อ่านเลย</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        </LinearGradient>

        {/* somecomponent */}
        <View style={styles.somecomponent}>

      {/* หมวดหมู่ */}
      <Text style={styles.titleofall}>หมวดหมู่</Text>
        <View style={styles.category}>
          <View style={styles.categoryitem}>
            <Image style={styles.categoryimage} source={require('../assets/love.png')} />
            <Text>รัก</Text>
          </View>
          <View style={styles.categoryitem}>
            <Image style={styles.categoryimage} source={require('../assets/sex.png')} />
            <Text>18+</Text>
          </View>
          <View style={styles.categoryitem}>
            <Image style={styles.categoryimage} source={require('../assets/why.png')} />
            <Text>วาย</Text>
          </View>
          <View style={styles.categoryitem}>
            <Image style={styles.categoryimage} source={require('../assets/fantasy.png')} />
            <Text>แฟนตาซี</Text>
          </View>
          <View style={styles.categoryitem}>
            <Image style={styles.categoryimage} source={require('../assets/investigate.png')} />
            <Text>สืบสวน</Text>
          </View>
        </View>



        {/* ตอนใหม่ */}
        <Text style={styles.titleofall}>ตอนใหม่</Text>
        <ScrollView horizontal={true} >
          {/* เลื่อนข้างๆได้แล้วววววววววววว */}
          {/* box ตอนใหม่ */}
          <TouchableOpacity onPress={() => { navigation.navigate("ChapterFiction")}}>
          <View style={styles.newchapter}>
          <View style={styles.cardchapter}>
            <Image style={styles.imagecardchapter} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}} />
            <View>
              <Text style={styles.titlecardchapter}>รักเธอที่สุด นายมาเฟีย</Text>
              <Text style={styles.chaptercardchapter}>ตอนที่1 แต่งงานกันนะไอต้าว</Text>
              <View style={styles.ctfictionlove}>
                <Text style={styles.txt3}>นิยายรัก</Text>
              </View>
            </View>
          </View>
        </View>
          </TouchableOpacity>
        
        </ScrollView>
        


        {/* นิยายแนะนำ */}
        {/* นิยายรัก */}
        <Text style={styles.titleofall}>นิยายรัก</Text>
        {/* ScrollView ไว้ copy */}
        <ScrollView horizontal={true} >
        <View style={styles.rcmfiction}>
          <View style={styles.cardfiction}>
            <Image style={styles.imagecardfiction} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}} />
            <View>
              <Text style={styles.titlecardfiction}>รักเธอที่สุด นายมาเฟีย</Text>
            </View>
            <View style={styles.usercardfiction}>
              <FontAwesome5 name="user-alt" size={16} color="#909090" />
              <Text style={styles.txtcardfiction}>  ingfah bbibbi</Text>
            </View>
            <View style={styles.count}>
              <Ionicons name="eye" size={18} color="#909090" />
              <Text style={styles.txtcardfiction}> 302k  </Text>
              <Ionicons name="heart-sharp" size={18} color="#909090" />
              <Text style={styles.txtcardfiction}> 982</Text>
            </View>
          </View>
        </View>
        </ScrollView>
        {/* นิยาย 18+ */}
        <Text style={styles.titleofall}>นิยาย 18+</Text>
        {/* นิยายวาย */}
        <Text style={styles.titleofall}>นิยายวาย</Text>
        {/* นิยายแฟนตาซี */}
        <Text style={styles.titleofall}>นิยายแฟนตาซี</Text>
        {/* นิยายสืบสวน */}
        <Text style={styles.titleofall}>นิยายสืบสวน</Text>




        {/* tag close somecomponent */}
        </View>
        
        
      </ScrollView>


      


      




    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
  },
  titleimage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 25,
    paddingTop: 20,
  },
  box: {
    backgroundColor: "#856BD1",
    flexDirection: 'row',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  box2: {
    marginLeft: 20,
    marginTop: 7,
  },
  txt1: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16
  },
  txt2: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 16
  },
  txt3: {
    color: "#fff",
    fontSize: 13,
    fontWeight: 'bold',
    
  },
  txt4: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 16,
    marginRight: 10
  },
  fiction: {
    flexDirection: 'row',
  },
  count: {
    flexDirection: 'row',
  },
  user: {
    flexDirection: 'row',
  },
  fictionlove: {
    backgroundColor: "#EEBED3",
    width: 70,
    height: 25,
    borderRadius: 8,
    marginBottom: 16,
    marginRight: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fictionsex: {
    backgroundColor: "#F8C678",
    width: 100,
    height: 25,
    borderRadius: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnreadgradient: {
    borderRadius: 8,
  },
  btnreadnowtext:{
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnreadnow: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  somecomponent: {
    backgroundColor: "#F9F5F5",
  },
  categoryimage: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  categoryitem: {
    alignItems: 'center',
    margin: 4
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  titleofall:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  // Card Chapter
  newchapter: {
    flexDirection: 'row',
  },
  imagecardchapter: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardchapter: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 160,
    //มีขอบแล้วมันแปกไม่ค่อยสวย5555555555
    // borderWidth: 1,
    // borderColor: '#5652C9',
    padding: 5
  },
  titlecardchapter:{
    fontSize: 15,
    marginTop: 4,
    fontWeight: 'bold',
  },
  ctfictionlove:{
    backgroundColor: "#EEBED3",
    width: 70,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
// Card Fiction All
  rcmfiction:{
    flexDirection: 'row',
  },
  cardfiction:{
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    width: 160,
    padding: 5
  },
  usercardfiction: {
    flexDirection: 'row',
    marginBottom: 4
  },
  imagecardfiction: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlecardfiction:{
    fontSize: 15,
    marginTop: 4,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  txtcardfiction: {
    color: '#7B7D7D'
  },
  chaptercardchapter: {
    marginBottom: 5
  }
});

export default HomeScreen