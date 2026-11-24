import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CardPersonaFamilia from './CardPersonaFamilia';

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
                <View style={styles.tituloContainer}>
                    <Ionicons name="fitness-outline" size={30} color="#198754" style={styles.iconoTitulo} />
                    <Text style={styles.titulo}>Calculadora IMC</Text>
                </View>
                <TouchableOpacity onPress={agregarTarjeta}>
                    <Ionicons name="add-circle" size={44} color="#198754" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={ids}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CardPersonaFamilia id={item} onEliminar={eliminarTarjeta} />
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
    tituloContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconoTitulo: {
        marginRight: 8,
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    textoVacio: {
        textAlign: 'center',
        color: '#6c757d',
        marginTop: 40,
        fontSize: 16,
    },
});
