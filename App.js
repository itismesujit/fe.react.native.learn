import { useState } from "react";
import {
  View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar,
  ActivityIndicator,
  Alert
} from "react-native";






// example.Alert
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "red" }}>
      <Button
        title="Alert"
        onPress={()=> Alert.alert("Invalid Data!")}
      />
      <Button
        title="Alert 2"
        onPress={()=> Alert.alert("Invalid Data!", "DOB Incorrect!")}
      />
      <Button
        title="Alert 3"
        onPress={()=> Alert.alert("Invalid Data!", "DOB Incorrect", [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed!'),
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed!')
          }
        ])}
      />
    </View>
  )
}


/* 
// example.ActivityIndicator
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "red" }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator size="large" color="midnightblue" animating={false} />
    </View>
  )
} */

/* 
// example.statusBar
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: "red" }}>

      <StatusBar 
        backgroundColor="purple"
        barStyle="light-content" //default, dark-content, light-content
        hidden // status bar will be hidden
      />
      
    </View>
  )
} */


/* 
// example.model
export default function App() {
  const [isModelVisible, setIsModelVisible] = useState(false);

  return (
    <View style={{ flex: 1, padding: 60 }}>

      <Button
        title="Open Model"
        onPress={() => setIsModelVisible(true)}
        color="purple"
      />

      <Modal
        visible={isModelVisible}
        onRequestClose={() => setIsModelVisible(false)}
        animationType="slide" // none, slide, fade
        presentationStyle="pageSheet" // formSheet, fullScree, pageSheet | only for ios
      >
        <View style={{ flex: 1, backgroundColor: 'plum', padding: 60 }}>
          <Text>Model Content</Text>
          <Button title="close" color="powderblue" onPress={() => setIsModelVisible(false)} />
        </View>
      </Modal>

    </View>
  )
} */

/* 
// example.view
export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
    </View>
  )
} */

/* 
// example.text
export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
      <Text>Hello Sujit</Text>
    </View>
  )
} */

/* 
// example.text.pressable
export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>

      <Pressable onPress={() => alert('Pressed!!')}>
        <Text>I am pressable text!</Text>
      </Pressable>

    </View>
  )
} */


/* 
// example.image
export default function App() {
  const logoImage = require('./assets/adaptive-icon.png')
  
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>

      <Image source={logoImage} style={{ width: 300, height: 300 }} />
      <Image source={{ uri: 'https://picsum.photos/300' }} style={{ width: 300, height: 300 }} />

    </View>
  )
} */


/* 
// example.button
export default function App() {
  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>

      <Button
        title="Click"
        onPress={() => alert('hello sujit')}
        color="midnightblue"
      />

    </View>
  )
} */

/* todo
// example.image.background
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
    </View>
  )
} */

/* todo
// example.scroll.view
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
    </View>
  )
} */

/* 
// example.template
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
    </View>
  )
} */

/* 
// example.template
export default function App() {

  return (
    <View style={{ flex: 1, padding: 60, backgroundColor: red }}>
    </View>
  )
} */


