import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';

// LOCAL IMPORTS

export default function App() {

  let [firstNumber, setFN] = useState('');
  let [secondNumber, setSN] = useState('');
  let [operation, setOperation] = useState('')

  const numeros = [7, 8, 9, 'x', 4, 5, 6, '-', 3, 2, 1, '+']

  const result = () => {

    let resultado = 0;

    if (operation == '+'){resultado = Number(firstNumber) + Number(secondNumber)}

    if (operation == '-'){resultado = firstNumber - secondNumber}

    if (operation == '/'){resultado = firstNumber / secondNumber}

    if (operation == 'x'){resultado = firstNumber * secondNumber}
    clear();
    setFN(resultado)
  }

  const clear = () => {
    setOperation('')
    setFN('')
    setSN('')
  }

  const conta = num => {
    operation == ""?    
    setFN(firstNumber += num)
    :
    setSN(secondNumber += num)
  }

  const remover = () => {
    operation == ""?
    setFN(firstNumber = firstNumber.slice(0, firstNumber.length-1))
    :
    setSN(secondNumber = secondNumber.slice(0, secondNumber.length-1))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style = {styles.screen}>
        {operation == ""?
          <Text style = {styles.textScreen}>{firstNumber}</Text>
          :
          <View>
            <Text style = {styles.textScreenHide}>{firstNumber.toString() + " " + operation}</Text>
            <Text style = {styles.textScreen}>{secondNumber}</Text>
          </View>
          
          }
      </View>
      <View style = {styles.calculatorGroup}>

        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'} onPress = {() => clear()}>C</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>+/-</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>%</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'} onPress = {() => setOperation('/')}>/</AwesomeButton>
        </View>

        <View style = {styles.calculatorStyle}>
          {numeros.slice(0, 4).map(i => 
            !isNaN(i)?
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#504c4f'} 
            onPress = {() => conta(i.toString())}>
              {i.toString()}
            </AwesomeButton>
            :
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#fd6680'} 
            onPress = {() => setOperation(i.toString())}>
              {i.toString()}
            </AwesomeButton>
          )}
        </View>

        <View style = {styles.calculatorStyle}>
          {numeros.slice(4, 8).map(i => 
            !isNaN(i)?
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#504c4f'} 
            onPress = {() => conta(i.toString())}>
              {i.toString()}
            </AwesomeButton>
            :
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#fd6680'} 
            onPress = {() => setOperation(i.toString())}>
              {i.toString()}
            </AwesomeButton>
          )}
        </View>

        <View style = {styles.calculatorStyle}>
          {numeros.slice(8, 12).map(i => 
            !isNaN(i)?
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#504c4f'} 
            onPress = {() => conta(i.toString())}>
              {i.toString()}
            </AwesomeButton>
            :
            <AwesomeButton borderRadius={18} width={63} textSize = {23} 
            raiseLevel = {0.1} backgroundColor = {'#fd6680'} 
            onPress = {() => setOperation(i.toString())}>
              {i.toString()}
            </AwesomeButton>
          )}
        </View>
        
        <View style = {styles.calculatorStyle}>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} onPress = {() => conta('.')}>.</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} onPress = {() => conta('0')}>0</AwesomeButton>
          <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'}  onPress = {() => remover()}>
            <Ionicons name='backspace' size={23} color = 'white'/>
          </AwesomeButton>
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
    color: 'white',
    fontSize: 35,
    alignSelf: 'flex-end'
  },  

  textScreenHide: {
    fontWeight: '300',
    color: 'gray',
    fontSize: 28
  },

  calculatorGroup:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 10
  }
});