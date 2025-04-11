import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { Picker,} from '@react-native-picker/picker';

const calculo = () => {
  const [kwh, setKwh] = useState(0);
  const [kwhcalculo, setKwmcalculo] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const [valobdverde] = useState(0.50);
  const [valorbdamarela] = useState(0.55);
  const [valorbdvermelha1] = useState(0.60);
  const [valorbdvermelha2] = useState(0.70);


  return (
    <View>
      <Text>Quantos kWh foram gastos ?</Text>
      <TextInput
        value={kwh}
        onChangeText={setKwh}
        placeholder="kWh Gastos"
      />

      <Picker
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Bandeira Verde" value={valobdverde} />
        <Picker.Item label="Bandeira Amarela " value={valorbdamarela} />
        <Picker.Item label="Bandeira Vermelha 1" value={valorbdvermelha1} />
        <Picker.Item label="Bandeira Vermelha 2" value={valorbdvermelha2} />
      </Picker>

      <Button
        title="Calcular"
        color="blue"
        onPress={() => {
          setKwmcalculo(selectedLanguage * kwh)
        }}
      />
      <Text>Ira pagar: {kwhcalculo}</Text>
    </View>
  );
};

export default calculo;