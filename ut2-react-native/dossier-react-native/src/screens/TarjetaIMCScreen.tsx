import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import CardPersona from './CardPersona';

export default function ImcScreen() {
    const [ids, setIds] = useState<string[]>(['1']);
    const [contador, setContador] = useState<number>(2);

    const agregarTarjeta = () => {
        setIds((prevIds) => [...prevIds, contador.toString()]);
        setContador((prev) => prev + 1);
    };

    const eliminarTarjeta = (idAEliminar: string) => {
        setIds((prevIds) => prevIds.filter((id) => id !== idAEliminar));
    };

    return (
        <View style={styles.contenedor}>
            <View style={styles.cabecera}>
                <Text style={styles.titulo}>Calculadora IMC</Text>
                <TouchableOpacity
                    style={styles.botonAgregar}
                    onPress={agregarTarjeta}
                >
                    <Text style={styles.textoBotonAgregar}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={ids}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CardPersona id={item} onEliminar={eliminarTarjeta} />
                )}
                ListEmptyComponent={
                    <Text style={styles.textoVacio}>
                        Pulsa «+» para añadir una persona.
                    </Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    cabecera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    botonAgregar: {
        backgroundColor: '#198754',
        width: 45,
        height: 45,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotonAgregar: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 28,
    },
    textoVacio: {
        textAlign: 'center',
        color: '#6c757d',
        marginTop: 40,
        fontSize: 16,
    },
});
