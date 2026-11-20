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

                renderItem={({ item }) => (
                    <View style={styles.persona}>
                        <Text style={styles.texto}>
                            {JSON.stringify(item, null, 3)}
                        </Text>
                    </View>
                )}

                keyExtractor={(item, index) =>
                    item.nombre + index
                }

                ListHeaderComponent={() => (
                    <Text style={styles.titulo}>
                        Lista Personas
                    </Text>
                )}

                ItemSeparatorComponent={() => (
                    <Text style={styles.separador}>
                        ********************
                    </Text>
                )}
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
        borderWidth: 2,
        borderColor: 'gray',
        margin: 2,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#eeeeee',
    },

    texto: {
        fontSize: 16,
        color: 'black',
    },

    separador: {
        textAlign: 'center',
        color: 'gray',
        margin: 8,
    },

});
