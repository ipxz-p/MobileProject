import { View, Text, Button } from 'react-native'
import React from 'react'

const Follow = ({route, navigation}) => {
  return (
    <View>
      <Text>Follow</Text>
      <Button
        title="ผู้แต่งคนนี้"
        onPress={() => {
          navigation.navigate("Author")
        }}
      />
    </View>
  )
}

export default Follow