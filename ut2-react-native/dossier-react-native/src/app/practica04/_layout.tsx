import { Stack } from 'expo-router';

export default function Practica04Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 4 - Apartados' }} />
      <Stack.Screen name="TresCajas" options={{ title: 'Tres cajas' }} />
    </Stack>
  );
}
