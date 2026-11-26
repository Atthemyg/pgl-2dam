import { Stack } from 'expo-router';

export default function Practica20Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 20 - Primer Stack' }} />
      <Stack.Screen name="PrimerStack" options={{ title: 'PrimerStack' }} />
    </Stack>
  );
}
