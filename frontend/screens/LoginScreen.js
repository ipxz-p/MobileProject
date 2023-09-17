import { View, Text, Button } from 'react-native'
import React from 'react'

const LoginScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="กรอกเสร็จ กดเข้าสู่ระบบไปหน้าProfile"
        onPress={() => {
          navigation.navigate("ProfileScreen")
        }}
      />
      <Button
        title="กดไปลงทะเบียน"
        onPress={() => {
          navigation.navigate("RegisterScreen")
        }}
      />
    </View>
  )
}

export default LoginScreen