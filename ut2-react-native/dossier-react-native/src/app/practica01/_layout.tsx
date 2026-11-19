import { Stack } from 'expo-router';

export default function Practica01Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 1 - Apartados' }} />
      <Stack.Screen name="apartado1" options={{ title: 'Apartado 1' }} />
      <Stack.Screen name="apartado2" options={{ title: 'Apartado 2' }} />
    </Stack>
  );
}
