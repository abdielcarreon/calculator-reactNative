import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonResult = (props) => {
    const styles = StyleSheet.create({
        buttonClear: {
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: props.color ? props.color : "#d6d0d0",
            width: '95%',
            height: 70,
            borderRadius: 38,
            margin: 5
        },
        text: {
            fontSize: 40,
            color: "#fff"
        }
     }) 
    
        return (
            
            <TouchableOpacity onPress={() => props.onButtonPress(props.value)} style={styles.buttonClear}>
                <Text style={styles.text}>{props.value}</Text>
            </TouchableOpacity>
        
        )
}

export default ButtonResult
