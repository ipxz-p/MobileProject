import { View, Text, Button } from 'react-native'
import React from 'react'

const BookShelf = ({route, navigation}) => {
  return (
    <View>
      <Text>BookShelf</Text>
      <Button
        title="อ่านเลย"
        onPress={() => {
          navigation.navigate("IndexFiction")
        }}
      />
    </View>
  )
}

export default BookShelf