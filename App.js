import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,TextInput ,ScrollView, FlatList} from 'react-native';

export default function App() {
  const [outputText, setOutputText]= useState("düşmeemmeme");
  const [enteredGoal, setEnteredGoal]=useState("");
  const [courseGoals,setCourseGoals]=useState([]);

const goalInputHandler=(enteredText)=>
{
setEnteredGoal(enteredText);

}

const addGoalHandler = () => {
  setCourseGoals(currentGoals => [
    ...currentGoals,
    { id: Math.random().toString(), value: enteredGoal }
  ]);
};

  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}> 
<TextInput placeholder="AMAÇIM vIZ"   
style = {{borderColor:'black', borderWidth:5,width:"70%"}}
onChangeText={goalInputHandler}
value = {enteredGoal}

/>

<Button title="Ekleyelim +"
onPress={addGoalHandler}
/>

      </View>
      <View>
      <Text>{outputText}</Text>
      <Text>deneme 343343</Text>
      <Button title = "bas bas bas 24" onPress={()=>setOutputText("bastuj vala") }></Button>
      </View>

{/* <ScrollView>

{courseGoals.map((goal)=><Text style={styles.listItem} key={goal}>{goal}</Text>)}

</ScrollView> */}

<FlatList
keyExtractor={(item,index)=>item.id}
data={courseGoals}
renderItem = {itemData=>(
<View >
<Text  style={styles.listItem}  >{itemData.item.value}</Text>
</View>
)} 


/>


    </View>
  );
}

const styles = StyleSheet.create({

screen:{padding:100},
inputContainer:{flexDirection:"row", justifyContent:'space-between',alignItems:'center'},

listItem:{padding:10,
backgroundColor:'blue',
borderColor:'black',
borderWidth:1,
color:'white',
marginVertical:5
}



}


);