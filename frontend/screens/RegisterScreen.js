import { View, Text, Button } from 'react-native'
import React from 'react'

const RegisterScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button
        title="กรอกเสร็จ กดเข้าสู่ระบบไปหน้าProfile"
        onPress={() => {
          navigation.navigate("ProfileScreen")
        }}
      />
      <Button
        title="กดไปหน้าlogin"
        onPress={() => {
          navigation.navigate("LoginScreen")
        }}
      />
    </View>
  )
}

export default RegisterScreen