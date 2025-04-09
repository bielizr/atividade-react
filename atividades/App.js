import {View, StyleSheet } from 'react-native';
import Atividade1 from './components/Atividade1';



export default function App() {
  return (
    <View style={styles.container}>
    
     <Atividade1 />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(245,245,245)',
    padding: 8,
  }
});

