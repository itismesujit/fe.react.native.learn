import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";


export default function App(){

  return(
    <View style={{flex:1, backgroundColor:'plum', padding:60}}>
      <Button 
      title="Click" 
      onPress={()=> alert('hello sujit')}
      color="midnightblue"
      disabled
      />
    </View>
  )
}
