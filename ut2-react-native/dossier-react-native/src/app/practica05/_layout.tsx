import { Stack } from 'expo-router';

export default function Practica05Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 5 - Apartados' }} />
      <Stack.Screen name="FlexDinamico" options={{ title: 'Modificar flex dinámicamente' }} />
    </Stack>
  );
}
