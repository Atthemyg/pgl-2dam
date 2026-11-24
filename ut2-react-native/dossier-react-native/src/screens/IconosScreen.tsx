import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardPersonaIconos from './CardPersonaIconos';

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
                <TouchableOpacity onPress={agregarTarjeta}>
                    <Ionicons name="add-circle" size={44} color="#198754" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={ids}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CardPersonaIconos id={item} onEliminar={eliminarTarjeta} />
                )}
                ListEmptyComponent={
                    <Text style={styles.textoVacio}>
                        Pulsa el botón «+» para añadir una persona.
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
    textoVacio: {
        textAlign: 'center',
        color: '#6c757d',
        marginTop: 40,
        fontSize: 16,
    },
});
