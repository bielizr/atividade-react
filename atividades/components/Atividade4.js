import { View, StyleSheet, Text} from 'react-native';
import Quadrado from './Quadrado'

const Flexbox3 = () => {
  return (

    <View styles={styles.container}>
        <Text style={{
            textAlign: 'center',
            margin: '20',
            fontWeight: '900',
        }}>
            Tabuleiro de Xadrez
        </Text>
      <View style={{
          flexDirection: 'row',
      }}>
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
      </View>
      <View style={{
          flexDirection: 'row',
      }}>
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
        
      </View>
      <View style={{
          flexDirection: 'row',
      }}>
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
      </View>
      <View style={{
          flexDirection: 'row',
      }}>
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
        <Quadrado cor='white' lado={65} altura={60} />
        <Quadrado cor='black' lado={65} altura={60} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  }
})

export default Flexbox3