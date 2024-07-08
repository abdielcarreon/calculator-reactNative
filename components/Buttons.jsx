import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) => {


const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: props.color ? props.color : "#585850",
        width: 80,
        height: 80,
        borderRadius: 38,
        padding: 20,
        margin: 5
    },
    text: {
        fontSize: 31,
        color: "#fff"
    }
 }) 

    return (
        
        <TouchableOpacity onPress={() => props.onButtonPress(props.value)} style={styles.button}>
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    
    )
}



export default Button;