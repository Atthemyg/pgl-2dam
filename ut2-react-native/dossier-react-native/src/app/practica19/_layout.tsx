import { Stack } from 'expo-router';

export default function Practica19Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Práctica 19 - Insertar emoticonos en el texto' }} />
      <Stack.Screen name="InsertarEmoticonos" options={{ title: 'InsertarEmoticonos' }} />
    </Stack>
  );
}
