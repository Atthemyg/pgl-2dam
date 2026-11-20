import { Stack } from 'expo-router';

export default function Practica13Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 13 - Apartados' }} />
      <Stack.Screen name="IntroducirColor" options={{ title: 'Introducir Color' }} />
    </Stack>
  );
}
