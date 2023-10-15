// import library ที่จำเป็น
//<<Ing>> import library
import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
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
const NotiNavigator = createNativeStackNavigator();
const SearchNavigator = createNativeStackNavigator();
const FollowNavigator = createNativeStackNavigator();
const MainTabNavigator = createBottomTabNavigator();
//<<Bae>> สร้าง Navigator
const WriteNavigator = createNativeStackNavigator();
const ProfilesNavigator = createNativeStackNavigator();


// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว
// <<Ing>> Tab Navigator Home Reading Writing Profile
function Tab(){
  return (
    <MainTabNavigator.Navigator screenOptions={{
      tabBarActiveTintColor: "#5752C9",
      tabBarStyle: { backgroundColor: "white" },
      tabBarLabelStyle: { fontSize: 12 },
      headerShown: false,}} >
      <MainTabNavigator.Screen name="Home" component={HomeNavigatorss} options={{headerShown:false,
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="BookShelfss" component={BookShelfsNavigator} options={{title:"Bookself",
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="book" size={24} color={color} />
            // return <Ionicons name="book-outline" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Followss" component={FollowsNavigator} options={{title:"Follow",
        tabBarIcon: ({ color, size }) => {
            return <AntDesign name="contacts" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Writing" component={WritingNavigator} options={{headerShown:false,
        tabBarIcon: ({ color, size }) => {
            return  <AntDesign name="edit" size={24} color={color} />
        }
      }} />
      <MainTabNavigator.Screen name="Profile" component={ProfileNavigator} options={{headerShown:false,
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
      <HomeNavigator.Navigator initialRouteName="HomeIndex" screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",headerBackTitleVisible: false}}>
        <HomeNavigator.Screen name="HomeIndex" options={{title:"Ink Journey",
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
        <HomeNavigator.Screen name="ChapterFiction" options={{title:"Chapter1 แต่งงานกันนะไอต้าว"}} component={ChapterFictionScreen} />
        <HomeNavigator.Screen name="Notifications" options={{title:"Notifications", headerShown:false,}} component={NotificationNavigator} />
        <HomeNavigator.Screen name="SearchsScreens" options={{headerShown:false,}} component={SerachsNavigator} />
      </HomeNavigator.Navigator>
  );
}
function NotificationNavigator(){
  return (
    <NotiNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <NotiNavigator.Screen name="Notificationss" options={{title:"Notifications",}} component={NotificationsScreen} />
      <NotiNavigator.Screen name="ChapterFictionScreensssss" options={{title:"Chapter1 แต่งงานกันนะไอต้าว",headerBackTitleVisible: false}} component={ChapterFictionScreen} />
    </NotiNavigator.Navigator>
  )
}
function SerachsNavigator(){
  return (
    <SearchNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <SearchNavigator.Screen name="Notificationss" options={{title:"Search",headerShown:false,}} component={SearchsScreen} />
      <SearchNavigator.Screen name="IndexFictionsssss" options={{title:"IndexFiction", headerShown:false,}} component={IndexFictionScreen} />
      <SearchNavigator.Screen name="ChapterFictionScreennsssss" options={{title:"Chapter1 แต่งงานกันนะไอต้าว",headerBackTitleVisible: false}} component={ChapterFictionScreen} />
    </SearchNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator Stack
function ReadingNavigator(){
  return (
    <ReadNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      {/* Readingpage is not error */}
      <ReadNavigator.Screen name="Readings" options={{title:"Reading",}} component={ReadingTabNavigator} />
      {/* <ReadNavigator.Screen name="BookShelfScreens" options={{title:"BookShelfScreen",}} component={BookShelfScreen} />
      <ReadNavigator.Screen name="IndexFictionScreens" options={{title:"IndexFictionScreen",}} component={IndexFictionScreen} /> */}
    </ReadNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator Top Tab
function ReadingTabNavigator(){
  return (
    <ReadTabNavigator.Navigator >
      <ReadTabNavigator.Screen name="ชั้นหนังสือ" component={BookShelfsNavigator} />
      {/* <ReadTabNavigator.Screen name="ชั้นหนังสือ" component={BookShelfScreen} /> ได้แล้ว แต่มันกลับไปหน้าแรก*/}
      <ReadTabNavigator.Screen name="ติดตามผู้แต่ง" component={FollowsNavigator} />
    </ReadTabNavigator.Navigator>
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
      <BookShelfNavigator.Screen name="Bookself" component={BookShelfScreen} />
      <BookShelfNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false,}}/>
      <BookShelfNavigator.Screen name="ChapterFiction" component={ChapterFictionScreen} options={{}}/>
    </BookShelfNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator Follow Stack
function FollowsNavigator(){
  return(
    <FollowNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <FollowNavigator.Screen name="Follow" component={FollowScreen} />
      <FollowNavigator.Screen name="Author" options={{title:"rwit suwanna", headerBackTitleVisible: false}} component={AuthorScreen} />
      <BookShelfNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false,}}/>
      <BookShelfNavigator.Screen name="ChapterFiction" component={ChapterFictionScreen} options={{}}/>
    </FollowNavigator.Navigator>
  )
}

// <<Bae>> Writing Navigator
function WritingNavigator({route, navigation}){

  return (
    <WriteNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <WriteNavigator.Screen name="WritingScreens" options={{title:"Writing"}} component={WritingScreen} />
      <WriteNavigator.Screen name="AddEditWritingScreen" options={{title:"สร้างนิยาย", headerBackTitleVisible: false}} component={AddEditWritingScreen} />
      <WriteNavigator.Screen name="AddEditChapterScreen" options={{title:"สร้างตอน", headerBackTitleVisible: false}} component={AddEditChapterScreen} />
      <WriteNavigator.Screen name="ContentChpaterScreen" options={{title:"สร้างเนื้อความ", headerBackTitleVisible: false, 
      headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("WritingScreens")}><Text style={{color: 'white'}}>บันทึก</Text></TouchableOpacity>)
      }} component={ContentChpaterScreen} />
    </WriteNavigator.Navigator>
  )
}

// <<Bae>> Profile Navigator
function ProfileNavigator(){
  return (
    <ProfilesNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#5752C9"}, headerTintColor: "white",}}>
      <ProfilesNavigator.Screen name="ProfileScreen" options={{title:"Profile", headerBackTitleVisible: false}}  component={ProfileScreen} />
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