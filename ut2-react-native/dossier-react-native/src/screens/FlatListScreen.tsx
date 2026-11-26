import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

type Pers = {
    nombre: string;
    edad: number;
};

const array: Pers[] = [
    { nombre: 'ana', edad: 21 },
    { nombre: 'pedro', edad: 12 },
    { nombre: 'marta', edad: 32 },
    { nombre: 'lito', edad: 23 },
    { nombre: 'silvia', edad: 28 },
    { nombre: 'lisa', edad: 68 },
    { nombre: 'evaristo', edad: 52 },
    { nombre: 'arminda', edad: 16 },
    { nombre: 'felo', edad: 14 },
];

export default function ListasScreen() {
    return (
        <View style={styles.contenedor}>
            <FlatList
                data={array}
                keyExtractor={(item, index) => item.nombre + index}
                renderItem={({ item, index }) => (
                    <View
                        style={[
                            styles.persona,
                            { backgroundColor: index % 2 ? '#eee' : '#fff' }
                        ]}
                    >
                        <Text style={styles.texto}>
                            Nombre: {item.nombre} - Edad: {item.edad}
                        </Text>
                    </View>
                )}
                ListHeaderComponent={
                    <Text style={styles.titulo}>Lista de personas</Text>
                }
                ItemSeparatorComponent={() => (
                    <View style={styles.separador} />
                )}
                ListEmptyComponent={
                    <Text style={styles.vacio}>No hay personas en la lista</Text>
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
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: 'black',
    },
    persona: {
        padding: 12,
    },
    texto: {
        fontSize: 16,
        color: 'black',
    },
    separador: {
        height: 1,
        backgroundColor: '#ccc',
    },
    vacio: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});