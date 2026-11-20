import { Stack } from 'expo-router';

export default function Practica10Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 10 - Apartados' }} />
      <Stack.Screen name="Calculadora" options={{ title: 'Calculadora' }} />
    </Stack>
  );
}
