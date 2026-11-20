import { Stack } from 'expo-router';

export default function Practica11Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 11 - Apartados' }} />
      <Stack.Screen name="HookPersonalizado" options={{ title: 'Hook Personalizado' }} />
      <Stack.Screen name="Alertas" options={{ title: 'Alertas' }} />
    </Stack>
  );
}
