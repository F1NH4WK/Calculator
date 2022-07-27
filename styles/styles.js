import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#272529',
        alignItems: 'center',
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

export default styles;