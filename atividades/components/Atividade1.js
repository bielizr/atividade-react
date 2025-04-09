import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const calculo = () => {
  const [salario, setSalario] = useState(0);
  const [horario, setHorario] = useState(0);
  const [hrspassadas, setHrspassadas] = useState(0);
  const [hrsextra, setHrsextra] = useState(0);
  const [valorhora, setValorhora] = useState(0);
  const [calculohr, setCalculohr] = useState(0);
  const [calculofinal, setCalculofinal] = useState(0);
  const [resultado, setResultado] = useState(0);


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
        color="green"
        onPress={() => {
          setValorhora(salario / 160 );
          setHrspassadas(horario - 160);
          setHrsextra(valorhora * 50 / 100);
          setCalculohr(hrsextra + valorhora);
          setCalculofinal(calculohr * hrspassadas);
          setResultado(calculofinal + salario);
        }}
      />
      <Text>As suas horas extras são: {resultado}</Text>
    </View>
  );
};

export default calculo;