
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
} from 'react-native';

export default function AlertasScreen() {

    const [activo, setActivo] = useState(false);

    return (
        <View
            style={[
                styles.contenedor,
                activo && styles.bordeActivo,
            ]}
        >

            <Text style={styles.titulo}>
                Práctica 14
            </Text>

            <Text style={styles.texto}>
                Borde activado por Switch
            </Text>

            <Text style={styles.estado}>
                {activo ? 'Activado' : 'Desactivado'}
            </Text>

            <Switch
                value={activo}
                onValueChange={setActivo}
                thumbColor={activo ? 'orange' : 'brown'}
                trackColor={{
                    false: 'blue',
                    true: 'red',
                }}
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
        borderWidth: 0,
    },

    bordeActivo: {
        borderWidth: 6,
        borderColor: 'red',
    },

    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    texto: {
        fontSize: 20,
        marginBottom: 20,
    },

    estado: {
        fontSize: 18,
        marginBottom: 15,
    },

});