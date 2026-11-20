import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Índice de Prácticas' }} />
      <Stack.Screen name="practica01" options={{ headerShown: false }} />
      <Stack.Screen name="practica02" options={{ headerShown: false }} />
      <Stack.Screen name="practica03" options={{ headerShown: false }} />
      <Stack.Screen name="practica04" options={{ headerShown: false }} />
      <Stack.Screen name="practica05" options={{ headerShown: false }} />
      <Stack.Screen name="practica06" options={{ headerShown: false }} />
      <Stack.Screen name="practica07" options={{ headerShown: false }} />
      <Stack.Screen name="practica08" options={{ headerShown: false }} />
      <Stack.Screen name="practica09" options={{ headerShown: false }} />
      <Stack.Screen name="practica10" options={{ headerShown: false }} />
      <Stack.Screen name="practica11" options={{ headerShown: false }} />
      <Stack.Screen name="practica12" options={{ headerShown: false }} />
      <Stack.Screen name="practica13" options={{ headerShown: false }} />
      <Stack.Screen name="practica14" options={{ headerShown: false }} />
      <Stack.Screen name="practica15" options={{ headerShown: false }} />
    </Stack>
  );
}
