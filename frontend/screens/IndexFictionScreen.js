import { View, Text, Button } from 'react-native'
import React from 'react'

const IndexFiction = ({route, navigation}) => {
  return (
    <View>
      <Text>IndexFiction</Text>
      <Button
        title="Chapter 1"
        onPress={() => {
          navigation.navigate("ChapterFiction")
        }}
      />
    </View>
  )
}

export default IndexFiction