import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Picker,} from '@react-native-picker/picker';

const calculo = () => {
  const [km, setKm] = useState(0);
  const [veiculo, setVeiculo] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [valorcarro] = useState(0.10);
  const [valormoto] = useState(0.05);
  const [valorcaminhao] = useState(0.15);


  return (
    <View>
      <Text>Quantos KM foram rodados ?</Text>
      <TextInput
        value={km}
        onChangeText={setKm}
        placeholder="KM Rodados"
      />

      <Picker
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Carro" value={valorcarro} />
        <Picker.Item label="Moto" value={valormoto} />
        <Picker.Item label="Caminhão" value={valorcaminhao} />
      </Picker>

      <Button
        title="Calcular"
        color="blue"
        onPress={() => {
          setVeiculo(selectedLanguage * km)
        }}
      />
      <Text>Ira pagar: {veiculo}</Text>
    </View>
  );
};

export default calculo;