import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput, Switch, ScrollView, FlatList} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeChapterTitle} from '../store/actions/paramsAction';
import axios from 'axios'

const AddEditChapterScreen = ({route, navigation}) => {

  const novelFromUserId = useSelector((state) => state.params.novelFromUserId);
  const chapterFromNovelId = useSelector((state) => state.params.chapterFromNovelId);
  const [title, setTitle] = useState('');
  const [itemTitle, setItemTitle] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {

  const chapterByNovelId = async () => {
    const data = await axios.get('http://10.0.2.2:3500/novel/getChapters' ,{
      params:{
        novelId: novelFromUserId
      }
    })
    const dataArray = Object.values(data.data);
    setFilteredData(dataArray);
    const forEdit = dataArray.filter(item => item._id === chapterFromNovelId);
    if (forEdit.length === 1){
      setItemTitle(forEdit[0].title)
    }
    
    
  }
  chapterByNovelId();
 
}, [chapterFromNovelId])


const renderChapterFromNovelIdHandler = ({item}) => {
  if (chapterFromNovelId === item._id){
  return (
    <View style={styles.view}>

    {/* รูปปก */}
    <Image style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center', marginTop: 20,}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>

    <Text style={{ fontWeight: 'bold', fontSize: 19, marginBottom: 10, marginLeft: 20, marginTop: 25,}}>ชื่อตอน</Text>

    <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15, marginLeft: 20, marginRight: 20,}} value={itemTitle} onChangeText={(newtitle) => setItemTitle(newtitle)} placeholder="ตัวอย่าง: แรกพบเธอ"></TextInput>
    {/* ปุ่มบันทึก*/}

    <LinearGradient  style={{borderRadius: 20, marginTop: 12, marginBottom: 5, alignSelf: 'center'}} colors={['#FBBC2C', '#FE8F7C']} >
      <TouchableOpacity style={styles.addButton} onPress={onUpdateFormHandler}>
      <Text style={{ color: '#fff' }}>ต่อไป</Text>
    </TouchableOpacity>
    </LinearGradient>

    <LinearGradient  style={{borderRadius: 50, marginTop: 10, marginBottom: 25,   alignSelf: 'center',}} colors={['#FD2C38', '#B0020C']} >
          <TouchableOpacity style={styles.addButton} onPress={onDelFormHandler}>
            <Text style={{ color: '#fff' }}>ลบตอน</Text>
          </TouchableOpacity>
      </LinearGradient>

  </View>
  )} 
}

const onUpdateFormHandler = async () => {
    
  if (!itemTitle.trim()) {
    alert("กรุณากรอกชื่อตอนที่ต้องการแก้ไข");
    return;
  }
  dispatch(changeChapterTitle(itemTitle));
  navigation.navigate("ContentChpaterScreen");
};

const onSubmitFormHandler = async () => {
    
  if (!title.trim()) {
    alert("กรุณากรอกชื่อตอน");
    return;
  }
  dispatch(changeChapterTitle(title));
  navigation.navigate("ContentChpaterScreen");
};

const onDelFormHandler = async (event) => {
  try {
    const response = await axios.delete('http://10.0.2.2:3500/novel/deleteChapter', {
      data: {
        novelId: novelFromUserId,
        chapterId: chapterFromNovelId,
      },
    });

    if (response.status === 200) {
      alert('ลบตอนเรียบร้อยแล้ว');
      navigation.navigate('WritingScreen');
      
    }
  } catch (error) {
    console.log('ในการลบตอน : ' + error);
  }
};

  return (
    <View>
      {filteredData.length > 0 && chapterFromNovelId !== '' ? (
        <FlatList
          data={filteredData}
          renderItem={renderChapterFromNovelIdHandler}
  />
    ) : (
    <View style={styles.view}>
      {/* รูปปก */}
      <Image style={{height: 200, width: 200, resizeMode: 'contain', borderRadius: 10, alignSelf: 'center', marginTop: 20,}} source={{ uri: 'https://media.discordapp.net/attachments/1133035711919038534/1150913957478006806/large.png?width=562&height=562'}}></Image>
      <Text style={{ fontWeight: 'bold', fontSize: 19, marginBottom: 10, marginLeft: 20, marginTop: 25,}}>ชื่อตอน</Text>

      <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 40, borderColor: '#dcdcdc', padding: 8, marginBottom: 15, marginLeft: 20, marginRight: 20,}} value={title} onChangeText={(title) => setTitle(title)} placeholder="ตัวอย่าง: แรกพบเธอ"></TextInput>
      {/* ปุ่มบันทึก*/}
      <LinearGradient  style={{borderRadius: 20, marginTop: 12, marginBottom: 5, alignSelf: 'center'}} colors={['#FBBC2C', '#FE8F7C']} >
        <TouchableOpacity style={styles.addButton} onPress={onSubmitFormHandler}>
        <Text style={{ color: '#fff' }}>ต่อไป</Text>
      </TouchableOpacity>
      </LinearGradient>
    </View>
)}
  </View>
  )
}

const styles = StyleSheet.create({

  addButton:{
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 50,
    alignSelf: 'center'

    
  },
  view:{
  margin: 22,
  }
})

export default AddEditChapterScreen