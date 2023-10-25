import 'react-native-gesture-handler'
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Navigator from "./navigation/MyNavigator"
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import paramsReducer from './store/reducers/paramsReducer';
import { useNavigation } from '@react-navigation/native';
import { useSelector} from 'react-redux';
// import คอมโพเนนต์ที่จำเป็น
const rootReducer = combineReducers({
  params: paramsReducer,
 });
 const store = createStore(rootReducer);

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  // const userId = useSelector((state) => state.params.userId);
  // const navigation = useNavigation()
  // if (!userId.trim()){
  //   navigation.navigate('LoginScreen');
  // }
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
