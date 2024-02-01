import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import TextComponent from "./components/TextComponent";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mi Biografia</Text>
        <Image style={styles.image} source={require("./assets/images/napo.jpg")}/>
        <TextComponent></TextComponent>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: '#487eb0'
  },
  image: {
    width: 100,
    height: 100
  },
  title: {
    fontSize: 14,
    fontWeight:"normal",
    color: "#dfe6e9"
  }
})

export default App;