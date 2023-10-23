import { StyleSheet, Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView,  TouchableOpacity, FlatList, View } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeChapterContent } from '../store/actions/paramsAction';
import axios from 'axios'

const ContentChpaterScreen = ({route, navigation}) => {

  const dispatch = useDispatch();
  const novelFromUserId = useSelector((state) => state.params.novelFromUserId);
  const chapterFromNovelId = useSelector((state) => state.params.chapterFromNovelId);
  const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>
  const richText = React.useRef();
  const [itemContent, setItemContent] = useState('');
  const [content, setContent] = useState('');
  const [filteredData, setFilteredData] = useState([]);

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
        setItemContent(forEdit[0].content)
      }
      
      
    }
    chapterByNovelId();
   
  }, [chapterFromNovelId])

  const handleEditorAdd = (text) => {
    setContent(text)
    dispatch(changeChapterContent(content));
  }

  const handleEditorEdit = (text) => {
    setItemContent(text)
    dispatch(changeChapterContent(text));
  }

  const renderChapterFromNovelIdHandler = ({item}) => {
    if (chapterFromNovelId === item._id){
    return (

      <SafeAreaView> 
        <RichToolbar style={{color: 'white'}}
        editor={richText}
        actions={[actions.redo, actions.undo, actions.indent,actions.setBold, actions.setItalic, actions.setUnderline, actions.keyboard, actions.insertImage]}
        iconMap={{ [actions.heading1]: handleHead }}
      />
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <RichEditor 
              ref={richText}
              onChange={handleEditorEdit}
              initialContentHTML={itemContent}
              
              // disabled={true}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
    )} 
  }
  
  return (
    
    <View style={{backgroundColor: 'white', height: '100%' }}>
    {filteredData.length > 0 && chapterFromNovelId !== '' ? (
      <FlatList
        data={filteredData}
        renderItem={renderChapterFromNovelIdHandler}
/>
  ) : (
  
    <SafeAreaView>
        <RichToolbar style={{color: 'white'}}
        editor={richText}
        actions={[actions.redo, actions.undo, actions.setBold, actions.setItalic, actions.setUnderline, actions.keyboard, actions.insertImage]}
        iconMap={{ [actions.heading1]: handleHead }}
      />
      <ScrollView>
        <KeyboardAvoidingView   style={{ flex: 1 }}>
          <RichEditor 
              ref={richText}
              onChange={handleEditorAdd}
              // initialContentHTML={content}
              // disabled={true}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
)}
</View>
    
    
  )
}

const styles = StyleSheet.create({

  addButton:{
    width: 100,
    height: 40,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#5752C9",
    marginTop: 20,
    marginRight: 20,
    alignSelf: 'flex-end'
    
  },

})

export default ContentChpaterScreen