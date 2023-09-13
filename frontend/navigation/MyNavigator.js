// import library ที่จำเป็น
//<<Ing>> import library
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//<<Bae>> import library


// import screen ที่เกี่ยวข้อง
//<<Ing>> Index & Reading
import HomeScreen from "../screens/HomeScreen";
import IndexFictionScreen from "../screens/IndexFictionScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ChapterFictionScreen from "../screens/ChapterFictionScreen";
import BookShelfScreen from "../screens/BookShelfScreen";
import FollowScreen from "../screens/FollowScreen";
import AuthorScreen from "../screens/AuthorScreen";
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
const FollowNavigator = createNativeStackNavigator();
const MainTabNavigator = createBottomTabNavigator();
//<<Bae>> สร้าง Navigator
const WriteNavigator = createNativeStackNavigator();
const ProfilesNavigator = createNativeStackNavigator();


// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว
// <<Ing>> Tab Navigator Home Reading Writing Profile
function Tab(){
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen name="Home" component={HomeNavigators} options={{headerShown:false}} />
      <MainTabNavigator.Screen name="Readings" component={ReadingNavigator} options={{headerShown:false}} />
      <MainTabNavigator.Screen name="Writing" component={WritingNavigator} options={{headerShown:false}} />
      <MainTabNavigator.Screen name="Profile" component={ProfileNavigator} options={{headerShown:false}} />
    </MainTabNavigator.Navigator>
  )
}

// <<Ing>> Home Navigator
function HomeNavigators() {
  return (
      <HomeNavigator.Navigator initialRouteName="HomeIndex" screenOptions={{headerStyle:{backgroundColor: "#4a148c"}, headerTintColor: "white",  }}>
        <HomeNavigator.Screen name="HomeIndex" options={{title:"Ink Journey"}} component={HomeScreen} />
        <HomeNavigator.Screen name="IndexFiction" options={{title:"IndexFiction",}} component={IndexFictionScreen} />
        <HomeNavigator.Screen name="ChapterFiction" options={{title:"ChapterFiction",}} component={ChapterFictionScreen} />
        <HomeNavigator.Screen name="Notifications" options={{title:"Notifications",}} component={NotificationsScreen} />
      </HomeNavigator.Navigator>
  );
}

// <<Ing>> Reading Navigator Stack
function ReadingNavigator(){
  return (
    <ReadNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#4a148c",}, headerTintColor: "white",}}>
      <ReadNavigator.Screen name="Readingpage" component={ReadingTabNavigator} />
    </ReadNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator Top Tab
function ReadingTabNavigator(){
  return (
    <ReadTabNavigator.Navigator>
      <ReadTabNavigator.Screen name="BookShelfpage" component={BookShelfsNavigator} />
      <ReadTabNavigator.Screen name="Followpage" component={FollowsNavigator} />
    </ReadTabNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator BookShelf Stack
function BookShelfsNavigator(){
  return(
    <BookShelfNavigator.Navigator>
      <BookShelfNavigator.Screen name="BookShelf" component={BookShelfScreen} options={{headerShown:false}} />
      <BookShelfNavigator.Screen name="IndexFiction" component={IndexFictionScreen} options={{headerShown:false}} />
      <BookShelfNavigator.Screen name="ChapterFiction" component={ChapterFictionScreen} options={{headerShown:false}} />
    </BookShelfNavigator.Navigator>
  )
}

// <<Ing>> Reading Navigator Follow Stack
function FollowsNavigator(){
  return(
    <FollowNavigator.Navigator>
      <FollowNavigator.Screen name="Follow" component={FollowScreen} options={{headerShown:false}} />
      <FollowNavigator.Screen name="Author" component={AuthorScreen} options={{headerShown:false}} />
    </FollowNavigator.Navigator>
  )
}

// <<Bae>> Writing Navigator
function WritingNavigator(){
  return (
    <WriteNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#4a148c"}, headerTintColor: "white", headerTitleAlign: "center"}}>
      <WriteNavigator.Screen name="Writings"  component={WritingScreen} />
      <WriteNavigator.Screen name="AddEditWritingScreen" component={AddEditWritingScreen} />
      <WriteNavigator.Screen name="AddEditChapterScreen" component={AddEditChapterScreen} />
      <WriteNavigator.Screen name="ContentChpaterScreen" component={ContentChpaterScreen} />
      {/* เพิ่มโค้ดหน้า Writing Navigator ตรงนี้ /> */}
    </WriteNavigator.Navigator>
  )
}

// <<Bae>> Profile Navigator
function ProfileNavigator(){
  return (
    <ProfilesNavigator.Navigator screenOptions={{headerStyle:{backgroundColor: "#4a148c"}, headerTintColor: "white",}}>
      <ProfilesNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfilesNavigator.Screen name="LoginScreen" component={LoginScreen} />
      <ProfilesNavigator.Screen name="RegisterScreen" component={RegisterScreen} />
      {/* เพิ่มโค้ดหน้า Profile Navigator ตรงนี้ /> */}
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
