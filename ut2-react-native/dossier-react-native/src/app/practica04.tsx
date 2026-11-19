import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PrincipalScreen() {
    const [valorFlex, setValorFlex] = useState(0);
    return (
        <View style={styles.contenedorPrincipal}>
            <Text style={styles.titulo}>Contenedor Principal</Text>

            <View style={styles.escenario}>
                <View style={[styles.caja, { backgroundColor: '#7f624e' }]} />
                <View style={[styles.caja2, { backgroundColor: '#769ed1' }]} />
                <View style={[styles.caja3, { backgroundColor: '#346417' }]} />
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
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'yellow',
        textAlign: 'center',
        marginBottom: 15,
    },
    escenario: {
        flex: 1,
        backgroundColor: '#cfcbcb',
        padding: 15,
        gap: 15,
    },
    caja: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    caja2: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
    caja3: {
        width: 100,
        //height: 100,
        borderWidth: 2,
        borderColor: 'black',
    },
});