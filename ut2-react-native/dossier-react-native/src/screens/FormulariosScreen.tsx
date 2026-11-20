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

type FormData = {
    nombre: string;
    edad: number;
    casado: boolean;
    jubilado: boolean;
};

export default function FormulariosScreen() {

    const [formdata, setFormdata] = useState<DatosPersona>({
        nombre: '',
        edad: '',
        casado: false,
        jubilado: false,
    });

    function fillFormData(
        value: boolean | string,
        field: keyof DatosPersona
    ) {
        setFormdata({
            ...formdata,
            [field]: value,
        });
    }

    function enviarFormulario() {

        const edadNumero = Number(formdata.edad);

        if (!formdata.nombre.trim()) {
            Alert.alert('Error', 'Introduce tu nombre');
            return;
        }

        if (
            formdata.edad.trim() === '' ||
            !Number.isInteger(edadNumero) ||
            edadNumero < 0
        ) {
            Alert.alert('Error', 'Introduce una edad válida');
            return;
        }

        const datosFinales: FormData = {
            nombre: formdata.nombre,
            edad: edadNumero,
            casado: formdata.casado,
            jubilado: formdata.jubilado,
        };

        Alert.alert(
            'Datos del formulario',
            JSON.stringify(datosFinales, null, 2)
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
                value={formdata.nombre}
                onChangeText={(texto) =>
                    fillFormData(texto, 'nombre')
                }
            />

            <Text style={styles.etiqueta}>
                Edad:
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce tu edad"
                keyboardType="numeric"
                value={formdata.edad}
                onChangeText={(texto) =>
                    fillFormData(texto, 'edad')
                }
            />

            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    Casado:
                </Text>

                <Switch
                    value={formdata.casado}
                    onValueChange={(valor) =>
                        fillFormData(valor, 'casado')
                    }
                />
            </View>

            <View style={styles.fila}>
                <Text style={styles.etiqueta}>
                    Jubilado:
                </Text>

                <Switch
                    value={formdata.jubilado}
                    onValueChange={(valor) =>
                        fillFormData(valor, 'jubilado')
                    }
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
                {JSON.stringify(formdata, null, 2)}
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
