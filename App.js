import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable } from "react-native";



export default function App(){

  const logoImage = require('./assets/adaptive-icon.png');
  
  return(
    <View style={{flex:1, backgroundColor:'plum', padding:60}}>
      <Button 
      title="Click" 
      onPress={()=> alert('hello sujit')}
      color="midnightblue"
      />

      <Image source={logoImage} style={{width:300, height:300}}/>
      <Image source={{uri:'https://picsum.photos/300'}} style={{width:300, height:300}}/>
    </View>
  )
}
