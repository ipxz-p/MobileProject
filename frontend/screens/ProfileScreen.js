import { View, Text, Button } from 'react-native'
import React from 'react'

const ProfileScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="ออกจากระบบ"
        onPress={() => {
          navigation.navigate("LoginScreen")
        }}
      />
    </View>
  )
}

export default ProfileScreen