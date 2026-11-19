import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Circulo {
    id: number;
    color: string;
}

export default function PrincipalScreen() {
    const [circulos, setCirculos] = useState<Circulo[]>([]);
    const [tipoWrap, setTipoWrap] = useState<'wrap' | 'nowrap'>('wrap');
    const [tipoDirection, setTipoDirection] = useState<'row' | 'column'>('row');

    const generarColor = () => {
        const r = Math.min(255, Math.floor(Math.random() * 120) + 140);
        const g = Math.min(255, Math.floor(Math.random() * 120) + 140);
        const b = Math.min(255, Math.floor(Math.random() * 120) + 140);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const agregarCirculo = () => {
        const nuevoCirculo: Circulo = {
            id: circulos.length + 1,
            color: generarColor(),
        };
        setCirculos([...circulos, nuevoCirculo]);
    };

    const alternarWrap = () => {
        setTipoWrap(prev => (prev === 'wrap' ? 'nowrap' : 'wrap'));
    };

    const alternarDirection = () => {
        setTipoDirection(prev => (prev === 'row' ? 'column' : 'row'));
    };

    return (
        <View style={styles.contenedorPrincipal}>
            <View style={styles.panelBotones}>
                <TouchableOpacity style={styles.botonAgregar} onPress={agregarCirculo}>
                    <Text style={styles.textoBoton}>AGREGAR CÍRCULO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonWrap} onPress={alternarWrap}>
                    <Text style={styles.textoBoton}>{tipoWrap}. Pulse para cambiar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonDirection} onPress={alternarDirection}>
                    <Text style={styles.textoBoton}>{tipoDirection}. Pulse para cambiar</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.escenario, { flexWrap: tipoWrap, flexDirection: tipoDirection }]}>
                {circulos.map((item) => (
                    <View
                        key={item.id}
                        style={[styles.circulo, { backgroundColor: item.color }]}
                    >
                        <Text style={styles.textoCirculo}>C {item.id}</Text>
                    </View>
                ))}
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
    panelBotones: {
        gap: 6,
        marginBottom: 12,
    },
    botonAgregar: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        borderRadius: 4,
        alignItems: 'center',
    },
    botonWrap: {
        backgroundColor: '#9e2a2b',
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    botonDirection: {
        backgroundColor: '#fca311',
        paddingVertical: 8,
        borderRadius: 20,
        alignItems: 'center',
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
        gap: 10,
    },
    circulo: {
        width: 85,
        height: 85,
        borderRadius: 42.5,
        borderWidth: 2,
        borderColor: '#555555',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoCirculo: {
        color: '#444444',
        fontWeight: 'bold',
        fontSize: 13,
    },
});