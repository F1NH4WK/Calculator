import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';

// LOCAL IMPORTS


export default function App() {

  const [calculus, setCalculus] = useState({
    firstNumber: '',
    operation: '',
    secondNumber: '',
    result: '',
  })

  const result = () => {

    let resultado = 0;
    console.log(calculus.operation)

    switch(calculus.operation){
      case 'x':
         resultado = Number(calculus.firstNumber) * Number(calculus.secondNumber)
      case '+':
        resultado  = Number(calculus.firstNumber) + Number(calculus.secondNumber)
      case '-':
        resultado  = Number(calculus.firstNumber) - Number(calculus.secondNumber)
      case '/':
        resultado  = Number(calculus.firstNumber) / Number(calculus.secondNumber)
    }
    clear();
    calculus.result = resultado;
    setCalculus(calculus);
  }

  const clear = () => {
    setCalculus({
      firstNumber: '',
      operation: '',
      secondNumber: '',
      result: '',
    })

  }

  const conta = num => {
    if (calculus.operation == ""){
      calculus.firstNumber = calculus.firstNumber + num
      console.log(calculus.firstNumber)
    }
    else{
      calculus.secondNumber = calculus.secondNumber + num
      console.log(calculus.secondNumber)
    }

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style = {styles.screen}>
        <Text style = {styles.textScreen}>{calculus.result}</Text>
      </View>
      <View style = {styles.calculatorGroup}>
        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'} onPress = {() => clear()}>C</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>+/-</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>%</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => {calculus.operation = '/'; setCalculus((calculus))}}>/</AwesomeButton>
        </View>
        <View style = {styles.calculatorStyle}>
        <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(7)}>7</AwesomeButton>
        <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(8)}>8</AwesomeButton>
        <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(9)}>9</AwesomeButton>
        <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => {calculus.operation = 'x'; setCalculus((calculus))}}>x</AwesomeButton>
        </View>
        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(4)}>4</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(5)}>5</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(6)}>6</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => {calculus.operation = '-'; setCalculus((calculus))}}>-</AwesomeButton>
        </View>
        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(1)}>1</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(2)}>2</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'} onPress = {() => conta(3)}>3</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => {calculus.operation = '+'; setCalculus((calculus))}}>+</AwesomeButton>
        </View>
        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>.</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>0</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}><Ionicons name='backspace' size={23} color = 'white'/></AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => result()}>=</AwesomeButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#272529',
    alignItems: 'center',
    // color: #272529, #504c4f, #fd6680
  },

  screen: {
    height: '30%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    marginBottom: 20
  },

  calculatorStyle: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    height: '18%',
    alignItems: 'center',
    padding: 5
    
  },

  textScreen:{
    fontWeight: '300',
    color: 'green',
    fontSize: 35,
  },  

  calculatorGroup:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 10
  }
});