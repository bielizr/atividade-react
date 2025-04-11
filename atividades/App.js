import {View, StyleSheet } from 'react-native';
import Atividade1 from './components/Atividade1';
import Atividade2 from './components/Atividade2';
import Atividade3 from './components/Atividade3';



export default function App() {
  return (
    <View style={styles.container}>
    
     <Atividade3 />
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

