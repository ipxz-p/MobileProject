import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({route, navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>Icon Search</Text>
      <Button
        title="อ่านเลย"
        onPress={() => {
          navigation.navigate("IndexFiction")
        }}
      />
      <Button
        title="การแจ้งเตือน"
        onPress={() => {
          navigation.navigate("Notifications")
        }}
      />
    </View>
  )
}

export default Home