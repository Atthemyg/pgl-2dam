import { Stack } from 'expo-router';

export default function Practica18Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 18 - Diario de emociones' }} />
      <Stack.Screen name="DiarioEmociones" options={{ title: 'DiarioEmociones' }} />
    </Stack>
  );
}
