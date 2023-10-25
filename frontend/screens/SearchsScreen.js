import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator, FlatList, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeNovelId, gotoCategory } from "../store/actions/paramsAction";
import filter from "lodash.filter"
import { useSelector } from "react-redux";

const SearchsScreen = ({route, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const ageFromUserId = useSelector((state) => state.params.ageFromUserId)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://10.0.2.2:3500/novel/getNovels")
      .then((response) => {
        setData(response.data);
        setFullData(response.data);
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(true));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const formattedQuery = query;
    const filteredData = filter(fullData, (item) => {
      return contains(item.title, formattedQuery);
    });
    setData(filteredData);
  }

  const contains = (novel, query) => {
    if (typeof novel === 'string' && novel.includes(query)) {
      console.log("true");
      return true;
      
    }
    console.log("false");
    return false;
  }

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color='#5652C9' />
      </View>
    )
  }

  const novelIdHandler = (navigation, novelId) => {
    console.log(novelId);
    dispatch(changeNovelId(novelId));
    navigation.navigate("IndexFiction");
  };

  const renderNovel = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => { novelIdHandler(navigation, item._id); }}>
    <View style={styles.boxnoti}>
      <Image style={styles.imagebox} source={{ uri: `http://10.0.2.2:3500/img/${item.images}`}} />
      <View>
      <Text style={styles.textbox1}>{item.title}</Text>
      <View style={styles.usercard}>
        <FontAwesome5 name="user-alt" size={16} color="#909090" />
        <Text style={styles.textbox2}>  {item.owner.username}</Text>
      </View>
      <View style={styles.count}>
        <Ionicons name="eye" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.chapterViewsSum}  </Text>
        <Ionicons name="heart-sharp" size={18} color="#909090" />
        <Text style={styles.textbox2}> {item.chapterLikeSum}</Text>
      </View>
      </View>
    </View>
    </TouchableOpacity>
      </View>
    )
  };



  return (
    <View>
      
      <View style={{height: 55,}}></View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginBottom: 10}}>
        <TextInput style={{ borderWidth: 1, height: 42, width: '85%', borderColor: '#dcdcdc', padding: 8, fontSize: 17, alignItems: 'flex-end', borderTopLeftRadius: 10, borderBottomLeftRadius: 10,}}
        placeholder="พิมพ์นิยายที่ต้องการค้นหา"
        clearButtonMode='always'
        autoCapitalize='none'
        value={searchQuery}
        autoCorrect={false}
        onChangeText={(query) => handleSearch(query)}></TextInput>
        <View style={{backgroundColor: "#dcdcdc", width: '11%', padding: 10, height: 42, borderTopRightRadius: 10, borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#dcdcdc'}}>
          <AntDesign name="search1" size={21} color="white" />
        </View>
      </View>

      

  <ScrollView style={{borderRadius: 10, marginBottom:100}}>
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={renderNovel}
    />
    <View style={{marginBottom:30}}></View>
  </ScrollView>






    </View>
  )
}
const styles = StyleSheet.create({
  boxnoti: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#dcdcdc',
    borderWidth: 1,
  },
  imagebox: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  textbox1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textbox2: {
    color: '#7B7D7D',
    margin: 2
  },
  usercard: {
    flexDirection: 'row',
    marginBottom: 4,
    
  },
  count: {
    flexDirection: 'row',
  },
});
export default SearchsScreen