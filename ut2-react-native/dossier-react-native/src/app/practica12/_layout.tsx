import { Stack } from 'expo-router';

export default function Practica12Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 12 - Apartados' }} />
      <Stack.Screen name="ColorAleatorio" options={{ title: 'Color Aleatorio' }} />
      <Stack.Screen name="SolicitarTexto" options={{ title: 'Solicitar Texto' }} />
    </Stack>
  );
}
