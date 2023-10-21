import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 
const ChapterFiction = () => {
  return (
    <View>



      <ScrollView>
      <Text style={{fontSize: 15, textAlign: 'center', margin: 10, color: '#7B7D7D', marginTop: 30}}>เรื่อง: รักเธอที่สุด นายมาเฟีย</Text>
      <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', margin: 10}}>ตอนที่1 แต่งงานกันนะไอต้าว</Text>
      <Text style={{fontSize: 15, textAlign: 'center', margin: 10, color: '#7B7D7D', marginBottom: 30}}>โดย ingfah bbibbi</Text>
      {/* เนื้อเรื่อง */}
      <View style={{margin: 15}}>
        <Text style={{fontSize: 16}} >          ชื่อนายเฟียคือคำแปลว่าความเคยชินในความมืดและความกลัวในใจของหลายคนในยุคสมัยนี้ หน้ากากนายเฟียปิดหน้าชั้นหน้าความหวังและความรัก แต่บางครั้ง อาจมีความรักแสนจริงของเขาที่ซ่อนอยู่ใต้หน้ากากมาเฟียนี้{'\n'}</Text>
        <Text style={{fontSize: 16}} >          เมืองใหญ่ที่มีความมืดของการอาศัยอยู่ร่วมกันกับความสุขและความรักที่สวยงาม แต่ในแง่อีกแง่นึง เมืองใหญ่นี้เป็นสถานที่ของความอันตรายและการคุกคาม{'\n'}</Text>
        <Text style={{fontSize: 16}} >          นายเฟีย ผู้ครอบครองมาเฟียที่หล่อมาก ดีใจและมีความเฉลียวฉลาด เขามีอำนาจในมือและเป็นคนที่แข็งแกร่ง แต่ในภายหลัง เขากลับมีปัญหาที่ซ่อนอยู่ในส่วนในที่หลบเลี่ยงไม่ได้ มาเฟียมากคนหนึ่งที่อยากครองเมืองใหญ่นี้และเขาไม่รักใครนอกจากตัวเขาเอง แต่จากคนรักคนหนึ่งที่กลับเข้ามาเปลี่ยนแปลงชีวิตและหัวใจของเขา{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          เป็นเรื่องราวของความรักที่ทำให้นายเฟียต้องเลือก รักและหวงให้ใจตัวเองหรือรักคนหนึ่งที่สามารถเปลี่ยนแปลงสถานการณ์และอารมณ์ของเขาได้ จะเลือกอะไร และเรื่องราวนี้จะมีอย่างไรต่อไป...{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          เป็นเรื่องราวของความรักที่ทำให้นายเฟียต้องเลือก รักและหวงให้ใจตัวเองหรือรักคนหนึ่งที่สามารถเปลี่ยนแปลงสถานการณ์และอารมณ์ของเขาได้ จะเลือกอะไร และเรื่องราวนี้จะมีอย่างไรต่อไป...{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          ชื่อนายเฟียคือคำแปลว่าความเคยชินในความมืดและความกลัวในใจของหลายคนในยุคสมัยนี้ หน้ากากนายเฟียปิดหน้าชั้นหน้าความหวังและความรัก แต่บางครั้ง อาจมีความรักแสนจริงของเขาที่ซ่อนอยู่ใต้หน้ากากมาเฟียนี้{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          เมืองใหญ่ที่มีความมืดของการอาศัยอยู่ร่วมกันกับความสุขและความรักที่สวยงาม แต่ในแง่อีกแง่นึง เมืองใหญ่นี้เป็นสถานที่ของความอันตรายและการคุกคาม{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          นายเฟีย ผู้ครอบครองมาเฟียที่หล่อมาก ดีใจและมีความเฉลียวฉลาด เขามีอำนาจในมือและเป็นคนที่แข็งแกร่ง แต่ในภายหลัง เขากลับมีปัญหาที่ซ่อนอยู่ในส่วนในที่หลบเลี่ยงไม่ได้ มาเฟียมากคนหนึ่งที่อยากครองเมืองใหญ่นี้และเขาไม่รักใครนอกจากตัวเขาเอง แต่จากคนรักคนหนึ่งที่กลับเข้ามาเปลี่ยนแปลงชีวิตและหัวใจของเขา{'\n'}{'\n'}</Text>
        <Text style={{fontSize: 16}} >          เป็นเรื่องราวของความรักที่ทำให้นายเฟียต้องเลือก รักและหวงให้ใจตัวเองหรือรักคนหนึ่งที่สามารถเปลี่ยนแปลงสถานการณ์และอารมณ์ของเขาได้ จะเลือกอะไร และเรื่องราวนี้จะมีอย่างไรต่อไป...{'\n'}</Text>
      
      </View>
      {/* จบบบบบบ เนื้อเรื่อง */}

      {/* ปุ่มมมมมมตอนต่อไป */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={{ color: '#FE83EA', fontSize: 18, }}>ตอนต่อไป</Text>
      </TouchableOpacity>
      {/* จบบบบ ปุ่มมมมมมตอนต่อไป */}
      {/* ความคิดเห็นนนนนนนนนนน */}
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 20, marginLeft: 10}}>เพิ่มความคิดเห็น</Text>
        <TextInput style={{ borderWidth: 1, borderRadius: 5, height: 80, borderColor: '#dcdcdc', padding: 20, fontSize: 14, marginBottom: 20, margin: 20}}  placeholder="พิมพ์ความคิดเห็นที่นี่..."></TextInput>
        <TouchableOpacity style={styles.addButton2}>
          <Text style={{ color: '#fff', fontSize: 18, }}>ส่งความคิดเห็น</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: 'bold', fontSize: 18, margin: 10}}>ความคิดเห็น (1)</Text>
      </View>
      {/* กล่องความคิดเห็น */}
      <View style={{margin: 10, borderWidth: 1, borderRadius: 5, borderColor: '#dcdcdc', padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginLeft: 5, color: '#7B7D7D', }}>Palm Pongsu</Text>
          <Feather name="trash-2" size={20} color="#7B7D7D" />
        </View>
        <Text style={{padding: 8}}>ตอนนี้สนุกและมีสาระสำคัญเกี่ยวกับการค้นพบความสนุกในชีวิตที่ดูน่าเบื่อแกเป็นการเน้นถึงความสำคัญของการเปิดใจและพยายามสร้างความสุขในทุก ๆ วัน</Text>
      </View>
      {/* จบกล่องความคิดเห็น */}
      <View style={{height: 300}}></View>
      {/* จบ ความคิดเห็นนนนนนนนนนน */}


      </ScrollView>






    </View>
  )
}
const styles = StyleSheet.create({

  addButton:{
    borderWidth: 2,
    borderColor: '#FE83EA',
    width: 318,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
  },
  addButton2:{
    backgroundColor: "#FE83EA",
    width: 318,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
  }
})
export default ChapterFiction