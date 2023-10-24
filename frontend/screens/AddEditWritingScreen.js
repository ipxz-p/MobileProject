// bae
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ScrollView, FlatList, TouchableWithoutFeedback} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, MaterialCommunityIcons,  MaterialIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'
import { changeChapterFromNovelId, changeImgFromNovelId } from '../store/actions/paramsAction';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';


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
  const [allChapter, setAllChapter] = useState([]);
  const dispatch = useDispatch()

  const [images, setImages] = useState([]);
  const [checkChangeImg, setCheckChangeImg] = useState(false);
  const [uriImg, setUriImg] = useState('');
  const [nameImg, setNameImg] = useState('');
  const [checkEditChangeImg, setEditCheckChangeImg] = useState(false);
  const [itemNameImg, setItemNameImg] = useState('');
  const [itemUriImg, setItemUriImg] = useState('');
  
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
      // console.log(forEdit[0]);
      setItemTitle(forEdit[0].title);
      setItemDes(forEdit[0].description);
      setItemCategory(forEdit[0].category);
      setAllChapter(forEdit[0].chapter);
      setItemNameImg(forEdit[0].images);
      setItemUriImg(imgDir + forEdit[0].images);

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
    setCheckChangeImg(false);
    setEditCheckChangeImg(false);
  }
    loadImages();
    getNovelByUserId();

  }, [owner, novelId]);


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

    else if (!nameImg.trim()) {
      alert("กรุณาเพิ่มรูปภาพ");
      return;
    }

    
  
    try {

      const formData = new FormData();
      formData.append('owner', owner);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('images', {
       uri: uriImg,
       type: 'image/jpeg',
       name: nameImg,
    });
    
      const response = await axios.post(`http://10.0.2.2:3500/novel/createNovel`, formData)
  
      if (response.status === 200) {
        alert('สร้างนิยายเรื่อง ' + title + ' เรียบร้อยแล้ว');
        navigation.navigate('WritingScreen');
        setCheckChangeImg(false);
        
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
    
  
    try {
      const formData = new FormData();
        formData.append('novelId', novelId);
        formData.append('title', itemTitle);
        formData.append('description', itemDescription);
        formData.append('images', {
       uri: itemUriImg,
       type: 'image/jpeg',
       name: itemNameImg,
    });

      console.log(itemTitle);
      console.log(itemDescription);

      const response = await axios.put(`http://10.0.2.2:3500/novel/editNovel`, formData)

      if (response.status === 200) {
        alert('แก้ไขนิยายเรียบร้อยแล้ว')
        setEditCheckChangeImg(false);
        navigation.navigate('WritingScreen');
      } 
    } catch (error) {
      console.log("ในการแก้ไขนิยาย : " + error);
      
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

  const chapterFromNovelIdHandler = (navigation, chapterFromNovelId, imgFromNovelId) => {
    dispatch(changeChapterFromNovelId(chapterFromNovelId))
    dispatch(changeImgFromNovelId(imgFromNovelId));
    navigation.navigate("AddEditChapterScreen")
  }

  const imgDir = FileSystem.documentDirectory + 'images/';

  const ensureDirExists = async () => {
    const dirInfo = await FileSystem.getInfoAsync(imgDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(imgDir, {intermediates: true});

    }
  }

  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0){
      setImages([imgDir + files[files.length - 1]]);
    }

  }

  const selectImage = async (useLibrary) => {
    let result;

    const options = ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      aspect: [4, 3],
      quality: 0.75,
    }

    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(options);
      
    } 

    if (!result.canceled) {
      saveImage(result.assets[0].uri)
      
    }
    
}

  const saveImage = async (uri) => {
    await ensureDirExists();
    const fileName = new Date().getTime() + '.jpg';
    const dest = imgDir + fileName;
    await FileSystem.copyAsync({from : uri, to: dest});
    setCheckChangeImg(true);
    setEditCheckChangeImg(true);
    setImages([dest]);
    setNameImg(fileName);
    setUriImg(dest);
    setItemNameImg(fileName);
    setItemUriImg(dest);
    

    
    
 }

const renderNovelFromUserId = ({ item }) => {
  if (novelFromUserId === item._id) {
    return (
      <View>
      <View style={styles.view}>
        <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>รูปภาพหน้าปก</Text>
        {!checkEditChangeImg ? (
        <View>
          <Image style={{height: 190, width: 190, borderRadius: 10, alignSelf: 'center', marginBottom: 15}} source={{ uri: `http://10.0.2.2:3500/img/${itemNameImg}`}}></Image>
          <TouchableWithoutFeedback onPress={() => selectImage(true)}>
          <View style={{height: 35, width: 35, position: "absolute", bottom: 0, right: 75, zIndex: 9999, backgroundColor: '#808080', borderRadius:20, top: 170 }}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: 5}} name="photo-camera" size={25} color={'white'}/>
          </View>
          </TouchableWithoutFeedback>
        </View>
         ) : ( 
          <View>
            {images.map((img) => ( 
           <Image key={img} style={{height: 190, width: 190, borderRadius: 10, alignSelf: 'center'}} source={{ uri: img}}></Image>
           ))} 
           <TouchableWithoutFeedback onPress={() => selectImage(true)}>
          <View style={{height: 35, width: 35, position: "absolute", bottom: 0, right: 75, zIndex: 9999, backgroundColor: '#808080', borderRadius:20, top: 170 }}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: 5}} name="photo-camera" size={25} color={'white'}/>
          </View>
          </TouchableWithoutFeedback>
          </View>
           )}  
        

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
          <TouchableOpacity style={styles.addButton} onPress={() => {chapterFromNovelIdHandler(navigation, '', item.images)}}>
            <Text style={{ color: '#fff' }}>เพิ่มตอนใหม่</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

        {/* ก้อนตอน */}
        {allChapter.map((i, index) => (
        <TouchableOpacity key={i._id} style={styles.chapter} onPress={() => {chapterFromNovelIdHandler(navigation, i._id, item.images)}}>
          {/* เลขตอน */}
          <Text >#{index+1}</Text>
          {/* chapter เท่าไหร่ ชื่อตอน */}
          <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 5,}}>{i.title}</Text>
          {/* ก้อนจำนวนคนดูและคอมเม้น */}
          <View style={{marginTop: 6, flexDirection: 'row'}}>
            {/* จำนวนคนดู */}
            <Ionicons style={{marginRight: 3,}} name="eye" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8, marginTop: -1}}>{i.views.length}</Text>
            {/* จำนวนคนคอมเม้น */}
            <MaterialCommunityIcons style={{marginRight: 2, marginTop: 1,}} name="comment-processing" size={17} color="#909090" />
            <Text style={{color:"#909090", marginRight: 8, marginTop: -1}}>{i.comments.length}</Text>
          </View>
        </TouchableOpacity>
        ))}

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
  <ScrollView>
    <View style={styles.view}>
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 19, marginBottom: 20,}}>รูปภาพหน้าปก</Text>
      
      {!checkChangeImg ? (
      <View>
        <Image style={{height: 190, width: 190, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center', borderWidth: 0.5, borderColor: '#808080', marginBottom: 15}} source={{ uri: 'https://media.discordapp.net/attachments/1122166608937361559/1166083877106892902/image-512.png?ex=6549333d&is=6536be3d&hm=5844c6d35e2aa87cde815ac635e2808ffb1cbe9db2f4eae98dbee91b17704279&='}}></Image>
        <LinearGradient  style={{borderRadius: 50, marginTop: 10, marginBottom: 0,  width:150,  alignSelf: 'center',}} colors={['#FBBC2C', '#FE8F7C']} >
            <TouchableOpacity style={styles.addButton} onPress={() => selectImage(true)}>
              <Text style={{color: 'white'}}>เพิ่มรูปภาพหน้าปก</Text>
            </TouchableOpacity>
          </LinearGradient>
          </View>
          ) : (
          <View>
          {images.map((img) => (
           <Image key={img} style={{height: 190, width: 190, borderRadius: 10, alignSelf: 'center'}} source={{ uri: img}}></Image> 
          ))}
            <TouchableWithoutFeedback onPress={() => selectImage(true)}>
          <View style={{height: 35, width: 35, position: "absolute", bottom: 0, right: 75, zIndex: 9999, backgroundColor: '#808080', borderRadius:20, top: 170 }}>
            <MaterialIcons style={{alignSelf: 'center', marginTop: 5}} name="photo-camera" size={25} color={'white'}/>
          </View>
          </TouchableWithoutFeedback>
          </View>
          )} 
    </View>
    <View style={{backgroundColor: '#D0D3D4', width: 400, height: 6}}></View>
    <View style={styles.view}>
      <Text style={{fontWeight: 'bold', fontSize: 19, marginBottom: 10,}}>ชื่อเรื่อง</Text>
      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15,}} value={title} onChangeText={(title) => setTitle(title)} placeholder="ชื่อเรื่องนิยาย" keyboardType="default"></TextInput>
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
  </ScrollView>
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