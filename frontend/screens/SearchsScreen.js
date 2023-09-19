import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
const SearchsScreen = ({route, navigation}) => {
  return (
    <View>
      
      <View style={{height: 55,}}></View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 10}}>
        <TextInput style={{ borderWidth: 1, height: 42, width: '85%', borderColor: '#dcdcdc', padding: 8, fontSize: 17, alignItems: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}}  placeholder="พิมพ์คำค้นหาที่ต้องการ" value=''></TextInput>
        <TouchableOpacity style={{backgroundColor: "#5752C9", width: '11%', padding: 10, height: 42, borderTopRightRadius: 10, borderBottomRightRadius: 10,}}>
          <AntDesign name="search1" size={21} color="white" />
        </TouchableOpacity>
      </View>


  <ScrollView style={{borderRadius: 10,}}>
  {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    {/* 1 BOX */}
  <TouchableOpacity onPress={() => {navigation.navigate("ChapterFictionScreensssss")}}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={require('../assets/title_fiction2.jpg')} />
      <View>
      <Text style={styles.textbox1}>รักเธอที่สุด นายมาเฟีย</Text>
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
    {/* จบ 1 BOX */}
    </ScrollView>






    </View>
  )
}
const styles = StyleSheet.create({
  boxnoti: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,
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
export default SearchsScreen