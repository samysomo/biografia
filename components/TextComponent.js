import { Text, View, StyleSheet } from "react-native"

const TextComponent = () => {
  return (
    <View>
        <Text style={styles.text} >Nombre: Samuel</Text>
        <Text style={styles.text}>Ocupación: Ingeniero de Software</Text>
        <Text style={styles.text}>Edad: 22</Text>
        <Text style={styles.text}>Fecha de Nacimineto: 12/05/2003</Text>
        <Text style={styles.text}>Sexo: Masculino</Text>
        <Text style={styles.text}>Sobre mi: Hey muy buenas a todos guapisimos aqui Vegetta777 en un gameplay directo de Planta Vegetta, y en el dia de hoy nos encontramos </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: "normal",
        fontFamily: "Helvetica",
        color: '#fff'
    }
  })

export default TextComponent