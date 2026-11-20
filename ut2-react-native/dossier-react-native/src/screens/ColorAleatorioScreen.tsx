
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function AlertasScreen() {

    const [colorPreferido, setColorPreferido] = useState('green');

    const colores = [
        { nombre: 'Rojo', valor: 'red' },
        { nombre: 'Azul', valor: 'blue' },
        { nombre: 'Amarillo', valor: 'yellow' },
        { nombre: 'Morado', valor: 'purple' },
        { nombre: 'Naranja', valor: 'orange' },
        { nombre: 'Rosa', valor: 'pink' },
        { nombre: 'Verde', valor: 'green' },
    ];

    function cambiarColor() {
        const colorAleatorio = colores[
            Math.floor(Math.random() * colores.length)
        ];

        Alert.alert(
            'Cambiar de color',
            `¿Quieres cambiar el fondo al color ${colorAleatorio.nombre}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                    onPress: () => console.log('No se cambia el color'),
                },
                {
                    text: 'Aceptar',
                    onPress: () => setColorPreferido(colorAleatorio.valor),
                },
            ]
        );
    }

    return (
        <View style={[styles.contenedor, { backgroundColor: colorPreferido }]}>

            <Text style={styles.titulo}>
                Práctica 12
            </Text>

            <Text style={styles.texto}>
                Color actual: {colorPreferido}
            </Text>

            <Button
                title="Cambiar de color"
                onPress={cambiarColor}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    texto: {
        fontSize: 20,
        color: 'white',
        marginBottom: 30,
    },
});
