// bae
import { View, Text, Button } from 'react-native'
import React from 'react'

const AddEditWritingScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>AddEditWritingScreen</Text>
      <Button
        title="เพิ่มตอนใหม่"
        onPress={() => {
          navigation.navigate("AddEditChapterScreen")
        }}
      />
    </View>
  )
}

export default AddEditWritingScreen