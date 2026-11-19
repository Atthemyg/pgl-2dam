import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type TipoTecla = 'numero' | 'operador' | 'funcion';

interface TeclaCalculadoraProps {
    texto: string;
    tipo?: TipoTecla;
    anchoDoble?: boolean;
    onPress: () => void;
}

export function TeclaCalculadora({
    texto,
    tipo = 'numero',
    anchoDoble = false,
    onPress,
}: TeclaCalculadoraProps) {
    const estiloFondo =
        tipo === 'operador'
            ? styles.fondoOperador
            : tipo === 'funcion'
            ? styles.fondoFuncion
            : styles.fondoNumero;

    const estiloTexto =
        tipo === 'funcion' ? styles.textoOscuro : styles.textoClaro;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[
                styles.tecla,
                estiloFondo,
                anchoDoble ? styles.teclaDoble : styles.teclaNormal,
            ]}
        >
            <Text style={[styles.texto, estiloTexto]}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tecla: {
        height: 75,
        borderRadius: 40,
        justifyContent: 'center',
    },
    teclaNormal: {
        flex: 1,
        alignItems: 'center',
    },
    teclaDoble: {
        flex: 2.15,
        alignItems: 'flex-start',
        paddingLeft: 30,
    },
    fondoNumero: {
        backgroundColor: '#333333',
    },
    fondoOperador: {
        backgroundColor: '#FF9F0A',
    },
    fondoFuncion: {
        backgroundColor: '#A5A5A5',
    },
    texto: {
        fontSize: 32,
        fontWeight: '400',
    },
    textoClaro: {
        color: '#FFFFFF',
    },
    textoOscuro: {
        color: '#000000',
    },
});
