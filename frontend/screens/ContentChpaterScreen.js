import { StyleSheet, Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView,  TouchableOpacity } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>
const ContentChpaterScreen = ({route, navigation}) => {
  const richText = React.useRef();
  const handleEditorChange = (text) => {
    // Log the text whenever it changes
    console.log("Editor Content:", text);
  }
  return (
    
      <SafeAreaView style={{backgroundColor: 'white', height: '100%' }}>
      {/* <TouchableOpacity style={styles.addButton} onPress={() => {navigation.navigate("WritingScreen")}}>
            <Text style={{ color: '#fff' }}>บันทึก</Text>
          </TouchableOpacity> */}
        
        <RichToolbar style={{color: 'white'}}
        editor={richText}
        actions={[actions.redo, actions.undo, actions.setBold, actions.setItalic, actions.setUnderline, actions.keyboard, actions.insertImage]}
        iconMap={{ [actions.heading1]: handleHead }}
      />
      <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}>
        
          <RichEditor 
              ref={richText}
              onChange={handleEditorChange}
              
          />
          
        </KeyboardAvoidingView>
       
      </ScrollView>
    
       
    </SafeAreaView>
    
    
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