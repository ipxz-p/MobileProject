import { View, Text, Button } from 'react-native'
import React from 'react'

const ContentChpaterScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>ContentChpaterScreen</Text>
      <Button
        title="บันทึก"
        onPress={() => {
          navigation.navigate("WritingScreen")
        }}
      />
    </View>
  )
}

export default ContentChpaterScreen