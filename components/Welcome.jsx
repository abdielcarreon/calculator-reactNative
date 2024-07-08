import { View, Button, StyleSheet } from "react-native";
const Welcome = (props) => {
    return (
        
        <View style={styles.container}>
            <Button 
            style={styles.button}
            title="¡ Click to here for starting to reckon up !" 
            onPress= {() => props.navigation.navigate("App")}
            />
        </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
    }
})

export default Welcome;