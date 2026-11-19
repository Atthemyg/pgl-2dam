import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Índice de Prácticas' }} />
      <Stack.Screen name="practica01" options={{ title: 'Práctica 1' }} />
      <Stack.Screen name="practica02" options={{ title: 'Práctica 2' }} />
      <Stack.Screen name="practica03" options={{ title: 'Práctica 3' }} />
      <Stack.Screen name="practica04" options={{ title: 'Práctica 4' }} />
      <Stack.Screen name="practica05" options={{ title: 'Práctica 5' }} />
      <Stack.Screen name="practica06" options={{ title: 'Práctica 6' }} />
      <Stack.Screen name="practica07" options={{ title: 'Práctica 7' }} />
      <Stack.Screen name="practica08" options={{ title: 'Práctica 8' }} />
      <Stack.Screen name="practica09" options={{ title: 'Práctica 9' }} />
      <Stack.Screen name="practica10" options={{ title: 'Práctica 10' }} />
    </Stack>
  );
}
