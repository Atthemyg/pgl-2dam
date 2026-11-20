import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type JustifyContentType =
      'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

type AlignItemsType = 'stretch' | 'center' | 'flex-start' | 'flex-end';

const VALORES_JUSTIFY: JustifyContentType[] = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
];

const imagenes = [
    { nombre: 'estrella', source: require('../../assets/estrella.png') },
    { nombre: 'gato', source: require('../../assets/gato.jpeg') },
];

export default function ColeccionImagenesScreen() {
    const [textoInput, setTextoInput] = useState<string>('space-around');
    const [justifyActual, setJustifyActual] = useState<JustifyContentType>('space-around');
    const [alignActual, setAlignActual] = useState<AlignItemsType>('center');
    const [indice, setIndice] = useState<number>(0);

    const elegida = imagenes[indice];

    const manejarCambioTexto = (texto: string) => {
        setTextoInput(texto);
        const valorLimpio = texto.trim().toLowerCase() as JustifyContentType;

        if (VALORES_JUSTIFY.includes(valorLimpio)) {
            setJustifyActual(valorLimpio);
        }
    };

    const cambiarImagen = () => {
        setIndice((prev) => (prev + 1) % imagenes.length);
    };

    return (
        <View style={styles.contenedorPrincipal}>
            <TextInput
                style={styles.input}
                placeholder="center, space-around, space-between..."
                value={textoInput}
                onChangeText={manejarCambioTexto}
                autoCapitalize="none"
            />

            <View style={styles.panelBotones}>
                <TouchableOpacity
                    style={[styles.boton, alignActual === 'stretch' && styles.botonActivo]}
                    onPress={() => setAlignActual('stretch')}
                >
                    <Text style={styles.textoBoton}>STRETCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'center' && styles.botonActivo]}
                    onPress={() => setAlignActual('center')}
                >
                    <Text style={styles.textoBoton}>CENTER</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-start' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-start')}
                >
                    <Text style={styles.textoBoton}>FLEX-START</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.boton, alignActual === 'flex-end' && styles.botonActivo]}
                    onPress={() => setAlignActual('flex-end')}
                >
                    <Text style={styles.textoBoton}>FLEX-END</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botonCambiarImagen} onPress={cambiarImagen}>
                <Text style={styles.textoBoton}>
                    CAMBIAR IMAGEN ({elegida.nombre})
                </Text>
            </TouchableOpacity>

            <View style={styles.panelEstado}>
                <Text style={styles.textoEstado}>
                    justifyContent: {justifyActual} | alignItems: {alignActual}
                </Text>
            </View>

            <View
                style={[
                    styles.escenario,
                    {
                        flexWrap: 'nowrap',
                        justifyContent: justifyActual,
                        alignItems: alignActual,
                    },
                ]}
            >
                <View style={styles.cajaImagen}>
                    <Image
                        source={elegida.source}
                        style={styles.imagenSecundaria}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                        style={styles.imagenSecundaria}
                    />
                </View>

                <View style={styles.cajaImagen}>
                    <Image
                        source={require('../../assets/estrella.png')}
                        style={styles.imagenSecundaria}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#a39f9f',
    },
    input: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#555555',
        borderRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 14,
        marginBottom: 8,
    },
    panelBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 4,
        marginBottom: 8,
    },
    boton: {
        flex: 1,
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonActivo: {
        backgroundColor: '#0d47a1',
        borderWidth: 1.5,
        borderColor: '#ffffff',
    },
    botonCambiarImagen: {
        backgroundColor: '#9e2a2b',
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 8,
    },
    textoBoton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    panelEstado: {
        backgroundColor: '#444444',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 4,
        marginBottom: 10,
        alignItems: 'center',
    },
    textoEstado: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
    },
    cajaImagen: {
        backgroundColor: '#f5f5f5',
        padding: 6,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagenSecundaria: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});
