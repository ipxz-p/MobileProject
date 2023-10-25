import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {actions, RichEditor} from "react-native-pell-rich-editor";
import { changeChapterIndex } from "../store/actions/paramsAction";
const ChapterFiction = ({ route, navigation }) => {
  const chapterId = useSelector((state) => state.params.chapterId);
  const novel2Id = useSelector((state) => state.params.novel2Id);
  const chapterNum = useSelector((state) => state.params.chapterNum);
  const chapterIndex = useSelector((state) => state.params.chapterIndex);
  const [Novel, setNovel] = useState();
  const [hasFetchedData, setHasFetchedData] = useState(true);
  const dispatch = useDispatch();
  const [IconLike, setIconLike] = useState(true);
  const userId = useSelector((state) => state.params.userId);
  const [ChapterId2, setChapterId2] = useState(chapterId);
  //SendComment authorเอามาจากเบอีกที novel2Id chapterId มีแล้ววววว
  const [comment, setComment] = useState("");
  const [novelId, setNovelId] = useState(novel2Id);
  const [index, setIndex] = useState(0);
  const [TestComment, setTestComment] = useState("");
  const toggleIconLike = () => {
    setIconLike(!IconLike);
  };

  const onChangeCommentHandler = (comment) => {
    setComment(comment);
  };
  const onSubmitFormHandler = async (event) => {
    try {
      const response = await axios.post(
        `http://10.0.2.2:3500/novel/sendComment`,
        {
            novelId: novelId,
            chapterId: chapterId,
            author: userId,
            comment: comment,
        }
      );
      if (response.status === 200) {
        fetchData()
        // alert("แสดงความคิดเห็นสำเร็จ");
        setComment("");
      } else {
        throw new Error("An error has occurred1");
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  const onDeleteCommentHandler = async (event) => {
    try {
      const response = await axios.delete(
        `http://10.0.2.2:3500/novel/deleteComment`,
        { 
          data: {
            novelId: novelId,
            chapterId: chapterId,
            commentId: event,
          }
        }
      );

      if (response.status === 200) {
        fetchData()
        alert("ลบสำเร็จ");
      } else {
        throw new Error("An error has occurred1");
      }
    } catch (error) {
      alert("An error has occurred2");
    }
  };
  async function fetchData() {
    try {
      const response = await axios.get(
        "http://10.0.2.2:3500/novel/getChapters",
        {
          params: {
            novelId: novel2Id,
          },
        }
      );
      setNovel(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    axios.get("http://10.0.2.2:3500/novel/getChapter", {
      params: {
        novelId: novel2Id,
        chapterId: chapterId,
        userId: userId
      },
    })
    setIndex(chapterIndex);
    fetchData();
  }, []);

  const renderComment = ({ item }) => {
    if (item._id === Novel[index]._id) {
      // setChapterId2(Novel[index]._id)
      var myChapter = [];
      myChapter.push(
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: 4,
            marginBottom: 5,
            borderColor: "#dcdcdc",
            marginTop: 10,
          }}
        >
          ความคิดเห็น ({item.comments.length})
        </Text>
      );
      for (let i = 0; i < item.comments.length; i++) {
        myChapter.push(
          <View key={i}>
            {/* กล่องความคิดเห็น */}
            <View
              style={{
                margin: 10,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "#dcdcdc",
                padding: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    marginLeft: 5,
                    color: "#7B7D7D",
                  }}
                >
                  {item.comments[i].author.username}
                </Text>
                {/* ลบคอมเม้น */}
                <TouchableOpacity
                  onPress={() => {
                    onDeleteCommentHandler(item.comments[i].author._id === userId ? item.comments[i]._id : null);
                  }}
                >
                  {item.comments[i].author._id === userId ? <Feather name="trash-2" size={20} color="#FF6B7D" /> : <View></View>}
                </TouchableOpacity>
              </View>
              <Text style={{ padding: 8 }}>{item.comments[i].comment}</Text>
            </View>
            {/* จบกล่องความคิดเห็น */}
          </View>
        );
      }
    }
    return item._id === chapterId ? <View>{myChapter}</View> : null;
  };

  const renderChapter = ({ item }) => {
    return item._id === chapterId ? (
      <View>
        {/* <Text style={{fontSize: 15, textAlign: 'center', margin: 10, color: '#7B7D7D', marginTop: 30}}>เรื่อง {novel2Id}</Text> */}
        <View style={{ marginTop: 30 }}></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            margin: 10,
          }}
        >
          ตอนที่{chapterNum} {item.title}
        </Text>
        {/* เนื้อเรื่อง */}
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 16 }}>{item.content}</Text>
        </View>
        {/* จบบบบบบ เนื้อเรื่อง */}
      </View>
    ) : null;
  };

  const renderNextChapter = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        {/* <FlatList
        data={Novel}
        keyExtractor={(item) => item._id}
        renderItem={renderChapter}
      /> */}

        {/* กดตอนต่อไปอะหื่ออ */}
        {/* <FlatList
        data={Novel} // ใช้ filter เพื่อเลือกตัวที่ 1 เท่านั้น
        keyExtractor={(item) => item._id}
        renderItem={renderNextChapter}
      /> */}

        {/* {Novel ? setTestComment(Novel[index]._id) : null} */}
        {Novel ? (
          <View>
            <View>
              {/* <Text style={{fontSize: 15, textAlign: 'center', margin: 10, color: '#7B7D7D', marginTop: 30}}>เรื่อง {novel2Id}</Text> */}
              <View style={{ marginTop: 30 }}></View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  textAlign: "center",
                  margin: 10,
                }}
              >
                ตอนที่{index + 1} {Novel[index].title}
                {/* -----{Novel[index]._id} */}
              </Text>
              {/* เนื้อเรื่อง */}
              <View style={{ margin: 15 }}>
              <RichEditor initialContentHTML={Novel[index].content} disabled={true} editorStyle={{color: 'black',backgroundColor: null}}/>
                {/* <Text style={{ fontSize: 16 }}>{Novel[index].content}</Text> */}
              </View>
              {/* จบบบบบบ เนื้อเรื่อง */}
            </View>
          </View>
        ) : null}

        {/* ปุ่มมมมมมตอนต่อไป */}
        {/* {
          index !== 0 ?
          <TouchableOpacity style={styles.addButton} onPress={()=>setIndex(index-1)}>
          <Text style={{color: '#FE83EA', fontWeight: "bold", fontSize: 15,}}>ตอนก่อนหน้า</Text>
        </TouchableOpacity> : null
        }
        {
          Novel && (index+1 < Novel.length) ? 
          <TouchableOpacity style={styles.addButton} onPress={()=>setIndex(index+1)}>
          <Text style={{color: '#FE83EA', fontWeight: "bold", fontSize: 15,}}>ตอนต่อไป</Text>
        </TouchableOpacity>: null
        } */}

        {/* <TouchableOpacity onPress={setIndex(index+1)}>ตอนต่อไป</TouchableOpacity>
          <TouchableOpacity onPress={setIndex(index-1)}>ตอนก่อนหน้า</TouchableOpacity> */}

        {/* ปุ่มกดถูกใจจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา!!!!!!!!!! */}
        {/* <TouchableOpacity onPress={() => { toggleIconLike(); }}>
        <View style={{ backgroundColor: "#FE83EA",}}>
          {IconLike ? 
            (<AntDesign name="hearto" size={24} color="#fff" />) : ( <AntDesign name="heart" size={23} color="red" />)
          }
        </View>
        
      
      </TouchableOpacity> */}
        {/* จบบบบ ปุ่มมมมมมตอนต่อไป */}
        {/* ความคิดเห็นนนนนนนนนนน */}
        {/* <Button title="qwe" onPress={()=>console.log(userId)} /> */}
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            เพิ่มความคิดเห็น
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 5,
              height: 80,
              borderColor: "#dcdcdc",
              padding: 20,
              fontSize: 14,
              marginBottom: 20,
              margin: 20,
            }}
            placeholder="พิมพ์ความคิดเห็นที่นี่..."
            value={comment}
            onChangeText={onChangeCommentHandler}
          ></TextInput>
          <TouchableOpacity
            style={styles.addButton2}
            onPress={onSubmitFormHandler}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>ส่งความคิดเห็น</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={Novel}
          keyExtractor={(item) => item._id}
          renderItem={renderComment}
        />

        <View style={{ height: 300 }}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  addButton: {
    borderWidth: 2,
    borderColor: "#FE83EA",
    width: 318,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  addButton2: {
    backgroundColor: "#FE83EA",
    width: 318,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
  },
});
export default ChapterFiction;
