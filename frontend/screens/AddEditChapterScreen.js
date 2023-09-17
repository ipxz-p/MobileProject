import { View, Text, Button } from 'react-native'
import React from 'react'

const AddEditChapterScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>AddEditChapterScreen</Text>
      <Button
        title="เพิ่มเนื้อหา chapter นี้"
        onPress={() => {
          navigation.navigate("ContentChpaterScreen")
        }}
      />
    </View>
  )
}

export default AddEditChapterScreen