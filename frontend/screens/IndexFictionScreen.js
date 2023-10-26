import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeChapterId, addBookShelf, changeChapterIndex } from "../store/actions/paramsAction";

const IndexFiction = ({ route, navigation }) => {
  const novelId = useSelector((state) => state.params.novelId);
  const novel3Id = useSelector((state) => state.params.novel3Id);
  const [Novel, setNovel] = useState([]);
  const [BookShelf, setBookShelf] = useState([]);
  const [Follow, setFollow] = useState([]);
  const [IconLike, setIconLike] = useState(true);
  const [IconReport, setIconReport] = useState(true);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.params.userId);
  const [oneNovel, setOneNovel] = useState({})

  function setBook(){
    axios.get("http://10.0.2.2:3500/novel/getBookshelfByUserId", {
      params: {
        userId: userId
      }
    }).then((response) => setBookShelf(response.data))
    .catch((err) => console.log(err));
  }

  function setFol(){
    axios.get("http://10.0.2.2:3500/user/getAuthorFollower", {
      params: {
        userId: userId
      }
    }).then((response) => setFollow(response.data))
    .catch((err) => console.log(err));
  }
  const fetchNovels = () => {
    axios
      .get("http://10.0.2.2:3500/novel/getNovels")
      .then((response) => setNovel(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setBook()
    setFol()
    axios
      .get("http://10.0.2.2:3500/novel/getNovel", {
        params: {
          novelId: novelId,
          userId: userId,
          
        }
      })
      .then((response) => {
        setOneNovel(response.data)
      })
      .catch((err) => console.log(err));
    fetchNovels();
    // Set up an interval to fetch novels every second
    const intervalId = setInterval(() => {
      fetchNovels();
    }, 3000); // 1000 milliseconds = 1 second

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
    
  }, []);

  // console.log(novelId)

  const onBookShelfHandler = async (event) => {
    try {
      const response = await axios.post(`http://10.0.2.2:3500/novel/addOrRemoveNovelToBookshelf`, {
        novelId,
        userId,
      });
      if (response.status === 200) {
        // alert(userId);
        setBook()
      } else {
        throw new Error("An error has occurred1");
      }
    } catch (error) {
      alert(userId);
    }
  };


  
  const onFollowHandler = async (event) => {
    console.log(userId, oneNovel?.owner._id, "test");
    try {
      const response = await axios.post(`http://10.0.2.2:3500/user/addOrRemoveFollower`, {
        userId: oneNovel?.owner._id,
        yourUserId: userId,
      });
      if (response.status === 200) {
        setFol()
      } else {
        throw new Error("An error has occurred1");
      }
    } catch (error) {
      alert("An error has occurred2");
    }
  };


  const chapterIdHandler = (navigation, chapterId, novel2Id, chapterNum, i) => {
    dispatch(changeChapterId(chapterId, novel2Id, chapterNum));
    dispatch(changeChapterIndex(i))
    navigation.navigate("ChapterFiction");
  };

  const toggleIconReport = () => {
    setIconReport(!IconReport);
  };
  // const toggleFollow = () => {
  //   setFollow(!Follow);
  // };
  const LikeHandler = (chapterId) => {
    axios.post("http://10.0.2.2:3500/novel/addOrRemoveLike",  {
        novelId: novelId,
        chapterId: chapterId,
        userId: userId
    }).then((res)=>fetchNovels())
    // console.log(userId);
  }
  const renderNovel = ({ item }) => {
    return item._id === novelId ? (
      <View>
        <Image
          style={styles.titleimage}
          source={{ uri: `http://10.0.2.2:3500/img/${item.images}`}}
        />
        {/* ในกล่องทั้งหมด */}
        <View style={{ marginTop: 260 }}>
          <ScrollView style={{ borderRadius: 20 }}>
            {/* เนื้อหานิยาย */}
            <View style={{ backgroundColor: "#fff", borderRadius: 20 }}>
              {/* ชื่อเรื่อง */}
              <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
                {item.title}
              </Text>
              {/* นักเขียน */}
              <View
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginTop: 0,
                  marginBottom: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ marginRight: 10, fontSize: 17, }}>
                  นักเขียน {item.owner.username}
                </Text>

                <TouchableOpacity
                onPress={() => {
                  onFollowHandler()
                }}
                >
                <View
                  style={{
                    backgroundColor: "#7FD6C2",
                    borderRadius: 8,
                    padding: 4,
                  }}
                >
                  {Follow.some(item => item._id === oneNovel?.owner._id) ? (
                      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13 }} >เลิกติดตาม </Text>
                    ) : (
                      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 13 }} >ติดตาม </Text>
                    )}
                  
                </View>
                </TouchableOpacity>

              </View>

              {/* แท็ก */}
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 10,
                  marginTop: 0,
                  marginBottom: 5,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#F8C678",
                    borderRadius: 8,
                    padding: 4,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 13 }}
                  >
                    {item.category == "love"
                    ? "นิยายรัก"
                    : item.category == "adult"
                    ? "นิยาย18+"
                    : item.category == "y"
                    ? "นิยายวาย"
                    : item.category == "fantasy"
                    ? "นิยายแฟนตาซี"
                    : item.category == "investigate"
                    ? "นิยายสืบสวน"
                    : "error"}
                  </Text>
                </View>
              </View>
              {/* คำโปรย */}
              <View style={{ margin: 10 }}>
                <Text>{item.description}</Text>
              </View>
              {/* 3 ปุ่มข้างล่าง */}
              <View
                style={{
                  flexDirection: "row",
                  margin: 10
                }}
              >
                <TouchableOpacity
                  onPress={onBookShelfHandler}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      padding: 10,
                      paddingLeft: 30,
                      paddingRight: 30,
                      backgroundColor: "#AF97E4",
                      borderRadius: 8,
                      marginLeft: 10
                    }}
                  >
                    {BookShelf.some(item => item._id === novelId) ? (
                      <AntDesign name="checkcircle" size={24} color="#fff" />
                      ) : (
                        <AntDesign name="pluscircleo" size={24} color="#fff" />
                      )
                    }
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 15,
                        marginLeft: 1,
                      }}
                    > เพิ่มลงชั้นหนังสือ</Text>
                  </View>
                </TouchableOpacity>

                
                
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: 5,
                    marginRight: 5,
                    padding: 10,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor: "#fff",
                    borderRadius: 8,
                  }}
                >
                  {IconReport ? (
                      <AntDesign name="exclamationcircleo" size={24} color="#fff" />
                    ) : (
                      <AntDesign name="checkcircle" size={24} color="#fff" />
                    )
                  }
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 15,
                      marginLeft: 4,
                    }}
                  >  </Text>
                </View>
                

              </View>
              {/* จบ 3 ปุ่มข้างล่าง */}
            </View>
          </ScrollView>
        </View>
      </View>
    ) : null;
  };
  const renderChapter = ({ item }) => {
    if (item._id === novelId) {
      var myChapter = [];
      myChapter.push(
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: 4,
            marginBottom: 5,
            backgroundColor: "#fff",
          }}
        >
          ตอนทั้งหมด ({item.chapter.length})
        </Text>
      );
      for (let i = 0; i < item.chapter.length; i++) {
        myChapter.push(
          <View key={i}>
            <View>
              {/* Box Chapter */}
              <TouchableOpacity
                onPress={() => {
                  chapterIdHandler(
                    navigation,
                    item.chapter[i]._id,
                    novelId,
                    item.chapter.length,
                    i
                  );
                }}
              >
                <View
                  style={{
                    padding: 10,
                    borderColor: "#dcdcdc",
                    borderWidth: 1,
                    flexDirection: 'row'
                  }}
                >
                  <View>
                  <Text style={{ fontSize: 18, marginLeft: 2 }}>#{i + 1}</Text>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, marginLeft: 4 }}
                  >
                    ตอนที่ {i + 1} {item.chapter[i].title}
                  </Text>
                  {/* 3icon 3text bottom */}
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 30,
                        marginLeft: 4,
                        marginBottom: 5,
                        marginTop: 5,
                      }}
                    >
                        <AntDesign name="hearto" size={19} color="#7B7D7D" />
                      {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                      {/* <AntDesign name="heart" size={19} color="#7B7D7D" /> */}
                      <Text style={{ marginLeft: 10 }}>
                        {item.chapter[i].like.length}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 30,
                        marginLeft: 4,
                        marginBottom: 5,
                        marginTop: 5,
                      }}
                    >
                      <Ionicons name="eye" size={19} color="#7B7D7D" />
                      <Text style={{ marginLeft: 10 }}>
                        {item.chapter[i].views.length}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 30,
                        marginLeft: 4,
                        marginBottom: 5,
                        marginTop: 5,
                      }}
                    >
                      <FontAwesome
                        name="comments-o"
                        size={22}
                        color="#7B7D7D"
                      />
                      <Text style={{ marginLeft: 10 }}>
                        {item.chapter[i].comments.length}
                      </Text>
                    </View>
                  </View>
                  </View>
                  <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                      {/* ไอคอนไลค์ */}
                      <TouchableWithoutFeedback onPress={()=>LikeHandler(item.chapter[i]._id)}>
                        {
                          Novel.length && item.chapter[i].like.includes(userId) ? (
                            <AntDesign name="heart" size={35} color="#FF6B7D" />
                          ) : (
                          <AntDesign name="hearto" size={35} color="#FF6B7D" />
                          )
                        }
                      </TouchableWithoutFeedback>
                      {/* ไอคอนเมื่อกดถูกใจแล้ว */}
                  </View>

                </View>

              </TouchableOpacity>
              
              {/* End Box ตอนที่ */}
              
            </View>
            
          </View>
        );
      }
    }
    return item._id === novelId ? <View>{myChapter}</View> : null;
  };

  return (
    <View>
      <ScrollView>
      <FlatList
        data={Novel}
        keyExtractor={(item) => item._id}
        renderItem={renderNovel}
        // numColumns={14}
      />
      {/* <Button title="qwe" onPress={()=>console.log(oneNovel.owner)} />
      <Button title="id" onPress={()=>console.log(userId)} /> */}
      
      <FlatList
        data={Novel}
        keyExtractor={(item) => item._id}
        renderItem={renderChapter}
        // numColumns={14}
      />
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  titleimage: {
    width: "100%",
    height: 450,
    position: "absolute",
  },
});
export default IndexFiction;
