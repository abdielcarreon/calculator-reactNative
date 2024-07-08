import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Buttons";
import ButtonResult from '../components/ButtonResult';
import { useState } from "react";



const App = () => {

    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState(null);
    const [waitingForNewValue,  setWaitingForNewValue] = useState(false)
    
    const handleButtonPress = (value) => {
        if (['+', '-', '*', '/'].includes(value)) {
            if (operator && waitingForNewValue) {
              setOperator(value);
              return;
            }
      
            if (previousValue === '') {
              setPreviousValue(currentValue);
            } else if (operator) {
              const calculatedResult = calculate(previousValue, currentValue, operator);
              setPreviousValue(calculatedResult);
              setCurrentValue(calculatedResult);
            }
      
            setOperator(value);
            setWaitingForNewValue(true);
          } else if (value === '=') {
            if (operator && previousValue !== '' && currentValue !== '') {
              const calculatedResult = calculate(previousValue, currentValue, operator);
              setCurrentValue(calculatedResult);
              setPreviousValue('');
              setOperator(null);
              setWaitingForNewValue(false);
            }
          } else if (value === 'C') {
            setCurrentValue('0');
            setPreviousValue('');
            setOperator(null);
            setWaitingForNewValue(false);
          } else {
            if (waitingForNewValue) {
              setCurrentValue(value);
              setWaitingForNewValue(false);
            } else {
              setCurrentValue(currentValue === '0' ? value : currentValue + value);
            }
          }
    }

    const calculate = (prev, curr, op) => {
        const prevNum = parseFloat(prev);
        const currNum = parseFloat(curr);
        if (op === '+') return (prevNum + currNum).toString();
        if (op === '-') return (prevNum - currNum).toString();
        if (op === '*') return (prevNum * currNum).toString();
        if (op === '/') return (prevNum / currNum).toString();
        return '';
      };

    return (
        <View style={styles.container}>
          <View style={styles.displayResultContainer}>
            <Text style={styles.displayResult}>{currentValue}</Text>
          </View>
            <View style={styles.buttonsContainer}>
                  
            {[
                {value:'7'},
                {value:'8'},
                {value:'9'},
                {value:'/'}]
                .map((item) => {
                return <Button value={item.value} 
                onButtonPress = {handleButtonPress} 
                color={item.color}/>
                })}

            {[
                {value:'4'},
                {value:'5'},
                {value:'6'},
                {value:'*'}]
                .map((item) => {
                return <Button value={item.value} 
                onButtonPress = {handleButtonPress} 
                color={item.color}/>
                })}

            {[
                {value:'1'},
                {value:'2'},
                {value:'3'},
                {value:'-'}]
                .map((item) => {
                return <Button value={item.value} 
                onButtonPress = {handleButtonPress} 
                color={item.color}/>
                })}
                
            {[
                {value:'0'},
                {value:'.'},
                {value:'C'},
                {value:'+'}]
                .map((item) => {
                return <Button value={item.value} 
                onButtonPress = {handleButtonPress} 
                color={item.color}/>
                })}
            </View>
            <View style={styles.clearButtonContainer}>
              <ButtonResult value={"="} onButtonPress = {handleButtonPress} color={"#d4a217"}/>
            </View>
          </View>
          
        
    )
}
{/* <Button value={"+"} color={"#e3ac14"} onButtonPress = {handleButtonPress}/> */}  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "black"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    clearButtonContainer: {
      marginVertical: 5,
      marginEnd: 3,
      borderRadius: 15,
      width: '95%'
    },
    displayResultContainer: {
      marginEnd: 10
    },
    displayResult: {
        fontSize: 65,
        margin: 15,
        color: "#fff"
    }
})

export default App;