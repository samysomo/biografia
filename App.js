import { View, Text, SafeAreaView, StyleSheet, ScrollView, Image} from "react-native";
import TextComponent from "./components/TextComponent";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Mi Biografia</Text>
        <View style={styles.container}>
          <Image style={styles.image} source={require("./assets/images/napo.jpg")}/>
          <View style={styles.textContainer}>
            <TextComponent></TextComponent>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      gap: 40,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: '#66b4cc',
      padding: 25
  },
  image: {
    marginTop: 40,
    width: 200,
    height: 300
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#dfe6e9",
    textAlign: "center",
    padding: 10
  },
  textContainer:{
    alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "55%",
      backgroundColor: '#e2e8e1',
      padding: 15,
      borderRadius: 50
  }
})

export default App;