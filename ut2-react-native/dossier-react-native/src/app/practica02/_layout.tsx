import { Stack } from 'expo-router';

export default function Practica02Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 2 - Apartados' }} />
      <Stack.Screen name="Contador" options={{ title: 'Contador' }} />
    </Stack>
  );
}
