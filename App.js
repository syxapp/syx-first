import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText]= useState("düşmeemmeme");
  return (
    <View style={{padding:50}}>

      <View>
<TextInput placeholder="AMAÇIMIZ"/>

<Button title="bas bana baby"/>

      </View>
      <View>
      <Text>{outputText}</Text>
      <Text>deneme 343343</Text>
      <Button title = "bas bas bas 24" onPress={()=>setOutputText("bastuj vala") }></Button>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
