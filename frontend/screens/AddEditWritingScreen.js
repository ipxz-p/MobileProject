// bae
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Octicons, MaterialCommunityIcons , FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list'
import WritingScreen from './WritingScreen';
import AddEditChapterScreen from './AddEditChapterScreen';

const AddEditWritingScreen = ({route, navigation}) => {

  const novelFromUserId = useSelector((state) => state.params.novelFromUserId);
  const userId = useSelector((state) => state.params.userId);
  const [owner, setOwner] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDes] = useState('');
  const [category, setCategory] = useState('');
  const [novelId, setNovelId] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemDescription, setItemDes] = useState('');
  const [itemCategory, setItemCategory] = useState('');

  useFocusEffect(
    React.useCallback(() => { 
      setOwner(userId);
      setNovelId(novelFromUserId);
  })
);

  useEffect(() => {

    const getNovelByUserId = async () => {
    const data = await axios.get('http://10.0.2.2:3500/novel/getNovels');
    const dataArray = Object.values(data.data);
    const filtered = dataArray.filter(item => item.owner._id === owner);
    setFilteredData(filtered);
    
    const forEdit = dataArray.filter(item => item._id === novelFromUserId);
    if (forEdit.length === 1){
      setItemTitle(forEdit[0].title);
      setItemDes(forEdit[0].description);
      setItemCategory(forEdit[0].category);
      if (forEdit[0].category === 'love') {
        setItemCategory('นิยายรัก');
      }
      if (forEdit[0].category === 'adult') {
        setItemCategory('นิยาย 18+');
      }
      if (forEdit[0].category === 'y') {
        setItemCategory('นิยายวาย');
      }
      if (forEdit[0].category === 'investigate') {
        setItemCategory('นิยายสืบสวน');
      }
      if (forEdit[0].category === 'fantasy') {
        setItemCategory('นิยายรักแฟนตาซี');
      }
      
    }
  }
    getNovelByUserId();
  }, [owner]);

  const categoryAllType = [
    {key: '1', value:'นิยายรัก'},
    {key: '2', value:'นิยาย 18+'},
    {key: '3', value:'นิยายวาย'},
    {key: '4', value:'นิยายแฟนตาซี'},
    {key: '5', value:'นิยายสืบสวน'}
  ];

  const onSelectCategory = (value) => {
    if (value === 'นิยายรัก'){
      setCategory('love')
    }
    else if (value === 'นิยาย 18+'){
      setCategory('adult')
    }
    else if (value === 'นิยายวาย'){
      setCategory('y')
    }
    else if (value === 'นิยายสืบสวน'){
      setCategory('investigate')
    }
    else if (value === 'นิยายแฟนตาซี'){
      setCategory('fantasy')
    }
  }

  const onSubmitFormHandler = async (event) => {
    
    if (!title.trim()) {
      alert("กรุณากรอกชื่อนิยาย");
      return;
    }
    else if (!description.trim()) {
      alert("กรุณากรอกคำโปรย");
      return;
    }
    else if (!category.trim()) {
      alert("กรุณากรอกประเภท");
      return;
    }
   
    try {
      const response = await axios.post(`http://10.0.2.2:3500/novel/createNovel`, {
        owner,
        title,
        description,
        category
      })
  
      if (response.status === 200) {
        alert('สร้างนิยายเรื่อง ' + response.data.title + ' เรียบร้อยแล้ว')
        // setNovelId(response.data._id)
      } 
      
    } catch (error) {
      console.log("ในการสร้างนิยาย : " + error.message);
      
    }
  }
  
    const onUpdateFormHandler = async (event) => {
    
    if (!itemTitle.trim()) {
      alert("กรุณากรอกชื่อนิยาย");
      return;
    }
    else if (!itemDescription.trim()) {
      alert("กรุณากรอกคำโปรย");
      return;
    }
    else if (!itemCategory.trim()) {
      alert("กรุณากรอกประเภท");
      return;
    }
   
    try {
      const response = await axios.put(`http://10.0.2.2:3500/novel/editNovel`, {
        novelId: novelId,
        title: itemTitle,
        description: itemDescription,
    })
      if (response.status === 200) {
        alert('แก้ไขนิยายเรียบร้อยแล้ว')
      } 
    } catch (error) {
      console.log("ในการแก้ไขนิยาย : " + error.message);
      
    }
  }

  const onDelFormHandler = async (event) => {
    try {
      const response = await axios.delete('http://10.0.2.2:3500/novel/deleteNovel', {
        data: {
          novelId: novelId,
        },
      });
  
      if (response.status === 200) {
        alert('ลบนิยายเรียบร้อยแล้ว');
        navigation.navigate('WritingScreen');
      }
    } catch (error) {
      console.log('ในการลบนิยาย : ' + error);
    }
  };

const renderNovelFromUserId = ({ item }) => {
  
  if (novelFromUserId === item._id) {
    return (
      <View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>รูปภาพหน้าปก</Text>
        <Image style={{height: 190, width: 190, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center'}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
      </View>
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>
      <View style={styles.view}>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ชื่อเรื่อง</Text>
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15,}} value={itemTitle} onChangeText={(title) => setItemTitle(title)} placeholder="ชื่อเรื่องนิยาย"></TextInput>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>คำโปรย</Text>
      <TextInput multiline style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, paddingTop: 10, marginBottom: 15,}} value={itemDescription} onChangeText={(des) => setItemDes(des)} placeholder="คำโปรยนิยาย"></TextInput>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ประเภทนิยาย</Text>
      <TextInput multiline style={{color: 'black', borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, paddingTop: 10,}} editable={false} value={itemCategory} onChangeText={(category) => setItemCategory(category)} placeholder="ประเภทนิยาย"></TextInput>
      </View>
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>
      <View style={styles.view}>
        <Text style={{fontWeight: 'bold', fontSize: 19,}}>ตอนทั้งหมด ({item.chapter.length})</Text>
        <LinearGradient  style={{borderRadius: 50, marginTop: 25, marginBottom: 5,  width:150,  alignSelf: 'center',}} colors={['#FBBC2C', '#FE8F7C']} >
          <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("AddEditChapterScreen")}}>
            <Text style={{ color: '#fff' }}>เพิ่มตอนใหม่</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

        {/* ก้อนตอน */}
        {item.chapter.length !== 0 &&(<TouchableOpacity style={styles.chapter} onPress={() => {navigation.navigate("AddEditChapterScreen")}}>
          {/* เลขตอน */}
          <Text>#1</Text>
          {/* chapter เท่าไหร่ ชื่อตอน */}
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 5,}}>{item.chapter.title}</Text>
          {/* ก้อนจำนวนคนดูและคอมเม้น */}
          <View style={{marginTop: 6, flexDirection: 'row'}}>
            {/* จำนวนคนดู */}
            <Ionicons style={{marginRight: 3,}} name="eye" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>158</Text>
            {/* จำนวนคนคอมเม้น */}
            <MaterialCommunityIcons style={{marginRight: 2, marginTop: 2,}} name="comment-processing" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8,}}>5</Text>
          </View>
        </TouchableOpacity>)}

        {/* เส้นสีเทา */}
      <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6, marginTop: 5}}></View>

        <LinearGradient  style={{borderRadius: 50, marginTop: 25,   width:150,  alignSelf: 'center',}} colors={[ '#21C68A', '#0DC6B4']} >
          <TouchableOpacity style={styles.addButton} onPress={onUpdateFormHandler}>
            <Text style={{ color: '#fff' }}>บันทึก</Text>
          </TouchableOpacity>
      </LinearGradient>

      <LinearGradient  style={{borderRadius: 50, marginTop: 15, marginBottom: 25,  width:150,  alignSelf: 'center',}} colors={['#FD2C38', '#B0020C']} >
          <TouchableOpacity style={styles.addButton} onPress={onDelFormHandler}>
            <Text style={{ color: '#fff' }}>ลบนิยาย</Text>
          </TouchableOpacity>
      </LinearGradient>
     
      </View>
    );
  } 
};
  return (
    <View>
      {filteredData.length > 0 && novelFromUserId !== '' ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item._id}
          renderItem={renderNovelFromUserId}
          numColumns={14}
  />
    ) : (
  // สำหรับคนที่ไม่เคยสร้างนิยายมาก่อนนน กับคนที่มีนิยายแล้วแต่สร้างใหม่
  <View>
    <View style={styles.view}>
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>รูปภาพหน้าปก</Text>
      <Image style={{height:190, width: 190, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center'}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
    </View>
    <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>
    <View style={styles.view}>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ชื่อเรื่อง</Text>
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15,}} value={title} onChangeText={(title) => setTitle(title)} placeholder="ชื่อเรื่องนิยาย"></TextInput>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>คำโปรย</Text>
      <TextInput multiline style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, paddingTop: 10, marginBottom: 15,}} value={description} onChangeText={(des) => setDes(des)} placeholder="คำโปรยนิยาย"></TextInput>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ประเภทนิยาย</Text>
      <SelectList save="value" setSelected={onSelectCategory}  data={categoryAllType} searchPlaceholder='ค้นหาหมวดหมู่นิยาย' placeholder='ประเภทของนิยาย'/>
    </View>
    <View style={styles.view}>
      <LinearGradient  style={{borderRadius: 50,  marginTop: -22, width:150,  alignSelf: 'center',}} colors={[ '#21C68A', '#0DC6B4']} >
        <TouchableOpacity style={styles.addButton} onPress={onSubmitFormHandler}>
          <Text style={{ color: '#fff' }}>สร้างนิยาย</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  </View>
)}
    </View>
  )}

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