import { StyleSheet, View, Text } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import { Ionicons } from '@expo/vector-icons'; 

export default function Buttons(props){

    const chars = [7,8,9, 'x', 4, 5, 6, '-', 1, 2, 3, '+']

    return(
        <View>
            <View style = {styles.calculatorStyle}>
                {chars.map(() => {
                    <AwesomeButton/>
                })}
            </View>
        </View>
        
    )
}

{/* <View style = {styles.calculatorGroup}>
<View style = {styles.calculatorStyle}>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>C</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>+/-</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'black'}>%</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'}>/</AwesomeButton>
</View>
<View style = {styles.calculatorStyle}>
<AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>7</AwesomeButton>
<AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>8</AwesomeButton>
<AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>9</AwesomeButton>
<AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'}>x</AwesomeButton>
</View>
<View style = {styles.calculatorStyle}>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>4</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>5</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>6</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'}>-</AwesomeButton>
</View>
<View style = {styles.calculatorStyle}>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>1</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>2</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>3</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'}>+</AwesomeButton>
</View>
<View style = {styles.calculatorStyle}>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>.</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}>0</AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#504c4f'} textColor = {'white'}><Ionicons name='backspace' size={23} color = 'white'/></AwesomeButton>
  <AwesomeButton borderRadius={18} width={63} textSize = {23} raiseLevel = {0.1} backgroundColor = {'#fd6680'}>=</AwesomeButton>
</View>
</View> */}

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