import { View, StyleSheet, } from 'react-native';
import Quadrado from './Quadrado'

const Flexbox3 = () => {
  return (

    <View styles={styles.container}>
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