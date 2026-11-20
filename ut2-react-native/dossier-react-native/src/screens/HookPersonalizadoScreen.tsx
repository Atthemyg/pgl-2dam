
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TeclaCalculadora } from '../components/TeclaCalculadora';
import { useCalculadora } from '../hooks/useCalculadora';

export default function HookPersonalizadoScreen() {
    const {
        pantalla,
        limpiarTodo,
        pulsarNumero,
        pulsarPunto,
        cambiarSigno,
        calcularPorcentaje,
        seleccionarOperador,
        calcularIgual,
    } = useCalculadora();

    return (
        <SafeAreaView style={styles.contenedor}>
            <View style={styles.visor}>
                <Text
                    style={styles.textoResultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {pantalla}
                </Text>
            </View>

            <View style={styles.teclado}>
                <View style={styles.fila}>
                    <TeclaCalculadora texto="AC" tipo="funcion" onPress={limpiarTodo} />
                    <TeclaCalculadora texto="±" tipo="funcion" onPress={cambiarSigno} />
                    <TeclaCalculadora texto="%" tipo="funcion" onPress={calcularPorcentaje} />
                    <TeclaCalculadora texto="/" tipo="operador" onPress={() => seleccionarOperador('/')} />
                </View>

                <View style={styles.fila}>
                    <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
                    <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
                    <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
                    <TeclaCalculadora texto="x" tipo="operador" onPress={() => seleccionarOperador('x')} />
                </View>

                <View style={styles.fila}>
                    <TeclaCalculadora texto="4" onPress={() => pulsarNumero('4')} />
                    <TeclaCalculadora texto="5" onPress={() => pulsarNumero('5')} />
                    <TeclaCalculadora texto="6" onPress={() => pulsarNumero('6')} />
                    <TeclaCalculadora texto="-" tipo="operador" onPress={() => seleccionarOperador('-')} />
                </View>

                <View style={styles.fila}>
                    <TeclaCalculadora texto="1" onPress={() => pulsarNumero('1')} />
                    <TeclaCalculadora texto="2" onPress={() => pulsarNumero('2')} />
                    <TeclaCalculadora texto="3" onPress={() => pulsarNumero('3')} />
                    <TeclaCalculadora texto="+" tipo="operador" onPress={() => seleccionarOperador('+')} />
                </View>

                <View style={styles.fila}>
                    <TeclaCalculadora texto="0" anchoDoble onPress={() => pulsarNumero('0')} />
                    <TeclaCalculadora texto="." onPress={pulsarPunto} />
                    <TeclaCalculadora texto="=" tipo="operador" onPress={calcularIgual} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#000000',
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    visor: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    textoResultado: {
        color: '#FFFFFF',
        fontSize: 76,
        fontWeight: '300',
    },
    teclado: {
        rowGap: 14,
    },
    fila: {
        flexDirection: 'row',
        columnGap: 14,
    },
});
