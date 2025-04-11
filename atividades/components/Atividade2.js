import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const calculo = () => {
  const [salario, setSalario] = useState(0);
  const [horario, setHorario] = useState(0);
  const [resultado, setResultado] = useState();


  return (
    <View>
      <Text>Calculo de Horas Extras</Text>
      <Text>Digite o seu salario base</Text>
      <TextInput
        value={salario}
        onChangeText={setSalario}
        placeholder="Seu Salario"
      />
      <Text>Digite suas horas trabalhadas</Text>
      <TextInput
        value={horario}
        onChangeText={setHorario}
        placeholder="Seu horario"
      />

      <Button
        title="Calcular"
        color="blue"
        onPress={() => {
          let valorhora = 0
          let horaExtra = 0
          let hrspassadas = 0
          let calculaHr = 0
          let calculofinal = 0
          let resultado = 0

          if (horario >= 160) {
            valorhora = +salario / 160 ;
            horaExtra = valorhora * (50 / 100);
            hrspassadas = +horario - 160;
            calculaHr = horaExtra + valorhora;
            calculofinal = calculaHr * hrspassadas;
            resultado = calculofinal + +salario;
          } 
          else {
            valorhora = +salario / 160 ;
            calculofinal = valorhora * +horario;
            resultado = calculofinal;
          }

          

          setResultado(resultado);
        }}
      />
      <Text>As suas horas extras são: {resultado}</Text>
    </View>
  );
};

export default calculo;