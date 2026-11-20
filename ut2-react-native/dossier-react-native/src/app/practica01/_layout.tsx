import { Stack } from 'expo-router';

export default function Practica01Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 1 - Apartados' }} />
      <Stack.Screen name="HolaMundo" options={{ title: 'Hola mundo' }} />
      <Stack.Screen name="ComponentesLayout" options={{ title: 'Componentes básicos y layout' }} />
    </Stack>
  );
}
