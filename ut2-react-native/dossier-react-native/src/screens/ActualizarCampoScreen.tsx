import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Switch,
    StyleSheet,
    Button,
    Alert,
} from 'react-native';

type DatosPersona = {
    nombre: string;
    edad: string;
    casado: boolean;
    jubilado: boolean;
};

export default function FormulariosScreen() {

    const [datos, setDatos] = useState<DatosPersona>({
        nombre: '',
        edad: '',
        casado: false,
        jubilado: false,
    });

    function cambiarCampo<K extends keyof DatosPersona>(
        campo: K,
        valor: DatosPersona[K]
    ) {
        setDatos(actual => ({
            ...actual,
            [campo]: valor,
        }));
    }

    function enviarFormulario() {

        const edadNumero = Number(datos.edad);

        if (datos.nombre.trim() === '') {
            Alert.alert('Error', 'Introduce tu nombre');
            return;
        }

        if (
            datos.edad.trim() === '' ||
            !Number.isFinite(edadNumero) ||
            edadNumero < 0
        ) {
            Alert.alert('Error', 'Introduce una edad válida');
            return;
        }

        Alert.alert(
            'Formulario enviado',
            `Nombre: ${datos.nombre}
            Edad: ${edadNumero}
            Casado: ${datos.casado ? 'Sí' : 'No'}
            Jubilado: ${datos.jubilado ? 'Sí' : 'No'}`
        );
    }

    return (
        <View style={styles.contenedor}>

            <Text style={styles.titulo}>
                Formulario de persona
            </Text>

            <Text style={styles.etiqueta}>
                Nombre:
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce tu nombre"
                value={datos.nombre}
                onChangeText={v => cambiarCampo('nombre', v)}
            />

            <Text style={styles.etiqueta}>
                Edad:
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce tu edad"
                keyboardType="numeric"
                value={datos.edad}
                onChangeText={v => cambiarCampo('edad', v)}
            />

            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    Casado:
                </Text>

                <Switch
                    value={datos.casado}
                    onValueChange={v => cambiarCampo('casado', v)}
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    Jubilado:
                </Text>

                <Switch
                    value={datos.jubilado}
                    onValueChange={v => cambiarCampo('jubilado', v)}
                />
            </View>

            <View style={styles.boton}>
                <Button
                    title="Enviar formulario"
                    onPress={enviarFormulario}
                />
            </View>

            <Text style={styles.subtitulo}>
                Datos introducidos:
            </Text>

            <Text style={styles.resultado}>
                {JSON.stringify(datos, null, 2)}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },

    etiqueta: {
        fontSize: 17,
        marginBottom: 10,
    },

    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },

    boton: {
        marginTop: 20,
        marginBottom: 25,
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    resultado: {
        fontSize: 14,
        backgroundColor: '#eeeeee',
        padding: 12,
        borderRadius: 8,
    },

});
