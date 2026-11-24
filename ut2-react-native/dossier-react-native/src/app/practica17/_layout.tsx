import { Stack } from 'expo-router';

export default function Practica17Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 17 - Tarjetas para calcular el IMC' }} />
      <Stack.Screen name="TarjetasIMC" options={{ title: 'TarjetasIMC' }} />
      <Stack.Screen name="Iconos" options={{ title: 'Iconos' }} />
      <Stack.Screen name="FamiliaCorrecta" options={{ title: 'FamiliaCorrecta' }} />
    </Stack>
  );
}
