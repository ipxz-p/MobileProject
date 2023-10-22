// import library ที่จำเป็น
//<<Ing>> import library
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import axios from "axios";
//<<Bae>> import library
//Icon
import { EvilIcons , MaterialCommunityIcons, Ionicons, AntDesign, SimpleLineIcons   } from '@expo/vector-icons'; 

// import screen ที่เกี่ยวข้อง
//<<Ing>> Index & Reading
import HomeScreen from "../screens/HomeScreen";
import IndexFictionScreen from "../screens/IndexFictionScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ChapterFictionScreen from "../screens/ChapterFictionScreen";
import BookShelfScreen from "../screens/BookShelfScreen";
import FollowScreen from "../screens/FollowScreen";
import AuthorScreen from "../screens/AuthorScreen";
import SearchsScreen from "../screens/SearchsScreen";
import CatagoryScreen from '../screens/CatagoryScreen'
//<<Bae>> Writing & Profile & Regis Login
import WritingScreen from "../screens/WritingScreen";
import AddEditWritingScreen from "../screens/AddEditWritingScreen";
import AddEditChapterScreen from "../screens/AddEditChapterScreen";
import ContentChpaterScreen from "../screens/ContentChpaterScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";


// สร้าง navigator (ไว้ใช้ตรง <....Navigator> <....Screen>)
//<<Ing>> สร้าง Navigator
const HomeNavigator = createNativeStackNavigator();
const ReadTabNavigator = createMaterialTopTabNavigator();
const ReadNavigator = createNativeStackNavigator();
const BookShelfNavigator = createNativeStackNavigator();
const CatagoryNavigator = createNativeStackNavigator();
const NotiNavigator = createNativeStackNavigator();
const SearchNavigator = createNativeStackNavigator();
const FollowNavigator = createNativeStackNavigator();
const MainTabNavigator = createBottomTabNavigator();
//<<Bae>> สร้าง Navigator
const WriteNavigator = createNativeStackNavigator();
const ProfilesNavigator = createNativeStackNavigator();

import { useSelector } from 'react-redux';

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว
// <<Ing>> Tab Navigator Home Reading Writing Profile
function Tab(){
  return (
    <MainTabNavigator.Navigator screenOptions={{
      tabBarActiveTintColor: "#5752C9",
      tabBarStyle: { backgroundColor: "white" },
      tabBarLabelStyle: { fontSize: 12 },
      headerShown: false,}} >
      <MainTabNavigator.Screen name="Home" component={HomeNavigatorss} options={{headerShown:false, title:"หน้าแรก",
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="BookShelfss" component={BookShelfsNavigator} options={{title:"ชั้นหนังสือ",
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="book" size={24} color={color} />
            // return <Ionicons name="book-outline" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Followss" component={FollowsNavigator} options={{title:"ติดตาม",
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="contacts" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Writing" component={WritingNavigator} options={{title:"งานเขียน", headerShown:false,
        tabBarIcon: ({ color, size }) => {
            return  <AntDesign name="edit" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Profile" component={ProfileNavigator} options={{title:"โปรไฟล์", headerShown:false,
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="user" size={24} color={color} />
        }
      }} />
    </MainTabNavigator.Navigator>
  )
}


// <<Ing>> Home Navigator
function HomeNavigatorss({route, navigation}) {
  const tabHiddenRoutess = ["IndexFiction","ChapterFiction", "Notifications", "SearchsScreens"];

  if(tabHiddenRoutess.includes(getFocusedRouteNameFromRoute(route))){
    navigation.setOptions({tabBarStyle: {display: 'none'}});
   } else {
   navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  return (
      <HomeNavigator.Navigator initialRouteName="HomeScreens" screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",headerBackTitleVisible: false}}>
        <HomeNavigator.Screen name="HomeScreens" options={{title:"Ink Journey",
      headerRight: () => (
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={() => { navigation.navigate("SearchsScreens") }}>
            <Text style={styles.topicon}>
              <AntDesign name="search1" size={22} color="white" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate("Notifications") }}>
            <Text style={styles.topicon}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            </Text>
          </TouchableOpacity>
        </View>
      )}} component={HomeScreen} />
        <HomeNavigator.Screen name="IndexFiction" options={{title:"IndexFiction", headerShown:false,}} component={IndexFictionScreen} />
        <HomeNavigator.Screen name="ChapterFiction" options={{title:"ตอนที่ 1 แต่งงานกันนะไอต้าว"}} component={ChapterFictionScreen} />
        <HomeNavigator.Screen name="Notifications" options={{title:"การแจ้งเตือน", headerShown:false,}} component={NotificationNavigator} />
        <HomeNavigator.Screen name="SearchsScreens" options={{headerShown:false,}} component={SerachsNavigator} />
        <HomeNavigator.Screen name="CatagorysNavigators" options={{headerShown:false,}} component={CatagorysNavigator} />
      </HomeNavigator.Navigator>
  );
}
function NotificationNavigator(){
  return (
    <NotiNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <NotiNavigator.Screen name="Notificationss" options={{title:"การแจ้งเตือน",}} component={NotificationsScreen} />
      <NotiNavigator.Screen name="ChapterFictionScreensssss" options={{title:"ตอนที่ 1 แต่งงานกันนะไอต้าว",headerBackTitleVisible: false}} component={ChapterFictionScreen} />
    </NotiNavigator.Navigator>
  )
}
function SerachsNavigator(){
  return (
    <SearchNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <SearchNavigator.Screen name="Notificationss" options={{title:"Search",headerShown:false,}} component={SearchsScreen} />
      <SearchNavigator.Screen name="IndexFictionsssss" options={{title:"IndexFiction", headerShown:false,}} component={IndexFictionScreen} />
      <SearchNavigator.Screen name="ChapterFictionScreennsssss" options={{title:"ตอนที่ 1 แต่งงานกันนะไอต้าว",headerBackTitleVisible: false}} component={ChapterFictionScreen} />
    </SearchNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator BookShelf Stack
function BookShelfsNavigator({route, navigation}){
  const tabHiddenRoutes = ["IndexFiction","ChapterFiction"];

  if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
    navigation.setOptions({tabBarStyle: {display: 'none'}});
   } else {
   navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  return(
    <BookShelfNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <BookShelfNavigator.Screen name="Bookshelf" options={{title:"ชั้นหนังสือ"}} component={BookShelfScreen} />
      <BookShelfNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false,}}/>
      <BookShelfNavigator.Screen name="ChapterFiction"  component={ChapterFictionScreen} options={{title:"ตอนที่ 1: แต่งงานกันนะไอต้าว" }}/>
    </BookShelfNavigator.Navigator>
  )
}
function CatagorysNavigator({route, navigation}){
  const tabHiddenRoutes = ["IndexFiction","ChapterFiction"];

  if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
  navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  const categoryType = useSelector((state) => state.params.categoryType);
  return(
    // ชื่อประเภท
    <CatagoryNavigator.Navigator initialRouteName="Catagory" screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <CatagoryNavigator.Screen name="Catagory" options={{title: categoryType == "love" ? "นิยายรัก" : categoryType == "adult" ? "นิยาย18+" : categoryType == "y" ? "นิยายวาย" : categoryType == "fantasy" ? "นิยายแฟนตาซี" : categoryType == "investigate" ? "นิยายสืบสวน" : "error"}} component={CatagoryScreen} />
      <CatagoryNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false,}}/>
      <CatagoryNavigator.Screen name="ChapterFiction"  component={ChapterFictionScreen} options={{title:"ตอนที่ 1: แต่งงานกันนะไอต้าว" }}/>
    </CatagoryNavigator.Navigator>
  )
}


// <<Ing>> Reading Navigator Follow Stack
function FollowsNavigator(){
  return(
    <FollowNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <FollowNavigator.Screen name="Follow" options={{title:"ติดตาม"}} component={FollowScreen} />
      <FollowNavigator.Screen name="Author" options={{title:""}} component={AuthorScreen} />
      <BookShelfNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false,}}/>
      <BookShelfNavigator.Screen name="ChapterFiction" component={ChapterFictionScreen} options={{}}/>
    </FollowNavigator.Navigator>
  )
}

// <<Bae>> Writing Navigator
function WritingNavigator({route, navigation}){

  const novelFromUserId = useSelector((state) => state.params.novelFromUserId);
  const chapterTitle = useSelector((state) => state.params.chapterTitle);
  const chapterContent = useSelector((state) => state.params.chapterContent);
  const chapterFromNovelId = useSelector((state) => state.params.chapterFromNovelId);

  const onSubmitFormHandler = async () => {

    if (!chapterContent.trim()) {
      alert("กรุณาเนื้อหา");
    }

    try {
      const response = await axios.post(`http://10.0.2.2:3500/novel/createChapter`, {
        novelId: novelFromUserId,
        title: chapterTitle,
        content: chapterContent
      })
  
      if (response.status === 200) {
        alert('สร้างตอนเรียบร้อยแล้ว');
        navigation.navigate('WritingScreen');
      } 
      
    } catch (error) {
      console.log("ในการสร้างตอน : " + error.message); 
    }
   
  }

  const onUpdateFormHandler = async () => {

    if (!chapterContent.trim()) {
      alert("กรุณาเนื้อหา");
    }

    try {
      const response = await axios.put(`http://10.0.2.2:3500/novel/editChapter`, {
        novelId: novelFromUserId,
        chapterId : chapterFromNovelId,
        title: chapterTitle,
        content: chapterContent
      })
  
      if (response.status === 200) {
        alert('แก้ไขตอนเรียบร้อยแล้ว');
        navigation.navigate('WritingScreen');
      } 
      
    } catch (error) {
      console.log("ในการแก้ไขตอน : " + error.message); 
    }
   
  }

  return (
    <WriteNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <WriteNavigator.Screen name="WritingScreen" options={{title:"งานเขียน"}} component={WritingScreen} />
      <WriteNavigator.Screen name="AddEditWritingScreen" options={{title: novelFromUserId == '' ? "สร้างนิยาย" : "แก้ไขนิยาย", headerBackTitleVisible: false}} component={AddEditWritingScreen} />
      <WriteNavigator.Screen name="AddEditChapterScreen" options={{title: chapterFromNovelId == '' ? "สร้างตอน" : "แก้ไขตอน", headerBackTitleVisible: false}} component={AddEditChapterScreen} />
      <WriteNavigator.Screen name="ContentChpaterScreen" options={{title:chapterFromNovelId == '' ? "สร้างเนื้อความ" : "แก้ไขเนื้อความ", headerBackTitleVisible: false, 
      headerRight: () => (
      <TouchableOpacity onPress={chapterFromNovelId ? onUpdateFormHandler : onSubmitFormHandler}><Text style={{color: 'white'}}>บันทึก</Text></TouchableOpacity>)
      }} component={ContentChpaterScreen} />
    </WriteNavigator.Navigator>
  )
}

// <<Bae>> Profile Navigator
function ProfileNavigator(){
  return (
    <ProfilesNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <ProfilesNavigator.Screen name="ProfileScreen" options={{title:"โปรไฟล์", headerBackTitleVisible: false}}  component={ProfileScreen} />
      <ProfilesNavigator.Screen name="LoginScreen" options={{title:"Ink Journey", headerBackTitleVisible: false}} component={LoginScreen} />
      <ProfilesNavigator.Screen name="RegisterScreen" options={{title:"Ink Journey", headerBackTitleVisible: false}} component={RegisterScreen} />
    </ProfilesNavigator.Navigator>
  )
}









// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );

  

}
const styles = StyleSheet.create({
  topicon: {
    marginLeft: 12,
  }
});