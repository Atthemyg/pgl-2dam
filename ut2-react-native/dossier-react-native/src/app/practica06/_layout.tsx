import { Stack } from 'expo-router';

export default function Practica06Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 6 - Apartados' }} />
      <Stack.Screen name="SustituirBotones" options={{ title: 'Sustituir los botones' }} />
      <Stack.Screen name="EstiloPorProps" options={{ title: 'Estilos recibidos por props' }} />
    </Stack>
  );
}
