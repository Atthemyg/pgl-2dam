import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TeclaCalculadora } from '../components/TeclaCalculadora';

type Operador = '/' | 'x' | '-' | '+' | null;

export default function CalculadoraScreen() {
    const [pantalla, setPantalla] = useState<string>('0');
    const [valorAnterior, setValorAnterior] = useState<number | null>(null);
    const [operador, setOperador] = useState<Operador>(null);
    const [esperandoNuevoNumero, setEsperandoNuevoNumero] = useState<boolean>(false);

    const limpiarTodo = () => {
        setPantalla('0');
        setValorAnterior(null);
        setOperador(null);
        setEsperandoNuevoNumero(false);
    };

    const pulsarNumero = (digito: string) => {
        if (esperandoNuevoNumero) {
            setPantalla(digito);
            setEsperandoNuevoNumero(false);
            return;
        }

        if (pantalla === '0') {
            setPantalla(digito);
        } else if (pantalla.length < 12) {
            setPantalla(pantalla + digito);
        }
    };

    const pulsarPunto = () => {
        if (esperandoNuevoNumero) {
            setPantalla('0.');
            setEsperandoNuevoNumero(false);
            return;
        }

        if (!pantalla.includes('.')) {
            setPantalla(pantalla + '.');
        }
    };

    const cambiarSigno = () => {
        if (pantalla === '0' || pantalla === 'Error') return;

        if (pantalla.startsWith('-')) {
            setPantalla(pantalla.slice(1));
        } else {
            setPantalla('-' + pantalla);
        }
    };

    const calcularPorcentaje = () => {
        const numero = parseFloat(pantalla);
        if (isNaN(numero)) return;
        setPantalla(String(numero / 100));
    };

    const ejecutarOperacion = (a: number, b: number, op: Operador): number | 'Error' => {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case 'x':
                return a * b;
            case '/':
                return b === 0 ? 'Error' : a / b;
            default:
                return b;
        }
    };

    const seleccionarOperador = (siguienteOperador: Operador) => {
        const valorActual = parseFloat(pantalla);

        if (isNaN(valorActual)) {
            limpiarTodo();
            return;
        }

        if (valorAnterior === null) {
            setValorAnterior(valorActual);
        } else if (operador && !esperandoNuevoNumero) {
            const resultado = ejecutarOperacion(valorAnterior, valorActual, operador);
            if (resultado === 'Error') {
                setPantalla('Error');
                setValorAnterior(null);
                setOperador(null);
                setEsperandoNuevoNumero(true);
                return;
            }
            const resultadoFormateado = Number(resultado.toFixed(8));
            setPantalla(String(resultadoFormateado));
            setValorAnterior(resultadoFormateado);
        }

        setEsperandoNuevoNumero(true);
        setOperador(siguienteOperador);
    };

    const calcularIgual = () => {
        if (operador === null || valorAnterior === null) return;

        const valorActual = parseFloat(pantalla);
        const resultado = ejecutarOperacion(valorAnterior, valorActual, operador);

        if (resultado === 'Error') {
            setPantalla('Error');
        } else {
            const resultadoFormateado = Number(resultado.toFixed(8));
            setPantalla(String(resultadoFormateado));
        }

        setValorAnterior(null);
        setOperador(null);
        setEsperandoNuevoNumero(true);
    };

    return (
        <SafeAreaView style={styles.contenedor}>
            {/* Visor de resultados */}
            <View style={styles.visor}>
                <Text
                    style={styles.textoResultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {pantalla}
                </Text>
            </View>

            {/* Teclado */}
            <View style={styles.teclado}>
                {/* Fila 1 */}
                <View style={styles.fila}>
                    <TeclaCalculadora texto="AC" tipo="funcion" onPress={limpiarTodo} />
                    <TeclaCalculadora texto="±" tipo="funcion" onPress={cambiarSigno} />
                    <TeclaCalculadora texto="%" tipo="funcion" onPress={calcularPorcentaje} />
                    <TeclaCalculadora texto="/" tipo="operador" onPress={() => seleccionarOperador('/')} />
                </View>

                {/* Fila 2 */}
                <View style={styles.fila}>
                    <TeclaCalculadora texto="7" onPress={() => pulsarNumero('7')} />
                    <TeclaCalculadora texto="8" onPress={() => pulsarNumero('8')} />
                    <TeclaCalculadora texto="9" onPress={() => pulsarNumero('9')} />
                    <TeclaCalculadora texto="x" tipo="operador" onPress={() => seleccionarOperador('x')} />
                </View>

                {/* Fila 3 */}
                <View style={styles.fila}>
                    <TeclaCalculadora texto="4" onPress={() => pulsarNumero('4')} />
                    <TeclaCalculadora texto="5" onPress={() => pulsarNumero('5')} />
                    <TeclaCalculadora texto="6" onPress={() => pulsarNumero('6')} />
                    <TeclaCalculadora texto="-" tipo="operador" onPress={() => seleccionarOperador('-')} />
                </View>

                {/* Fila 4 */}
                <View style={styles.fila}>
                    <TeclaCalculadora texto="1" onPress={() => pulsarNumero('1')} />
                    <TeclaCalculadora texto="2" onPress={() => pulsarNumero('2')} />
                    <TeclaCalculadora texto="3" onPress={() => pulsarNumero('3')} />
                    <TeclaCalculadora texto="+" tipo="operador" onPress={() => seleccionarOperador('+')} />
                </View>

                {/* Fila 5 */}
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
