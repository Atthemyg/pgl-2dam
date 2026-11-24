import { useState } from 'react';
import { Alert } from 'react-native';

type Operador = '+' | '-' | 'x' | '/';

export const useCalculadora = () => {
    const [pantalla, setPantalla] = useState<string>('0');
    const [valorAnterior, setValorAnterior] = useState<number | null>(null);
    const [operador, setOperador] = useState<Operador | null>(null);
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
        } else if (pantalla === '-0') {
            setPantalla('-' + digito);
        } else {
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
        if (pantalla === '0') return;

        if (pantalla.startsWith('-')) {
            setPantalla(pantalla.slice(1));
        } else {
            setPantalla('-' + pantalla);
        }
    };

    const calcularPorcentaje = () => {
        const valorActual = parseFloat(pantalla);
        if (isNaN(valorActual)) return;

        const resultado = valorActual / 100;
        setPantalla(String(resultado));
    };

    const ejecutarOperacion = (a: number, b: number, op: Operador): number | null => {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case 'x':
                return a * b;
            case '/':
                if (b === 0) {
                    Alert.alert('Error', 'No se puede dividir entre cero');
                    return null;
                }
                return a / b;
        }
    };

    const seleccionarOperador = (nuevoOperador: Operador) => {
        const valorActual = parseFloat(pantalla);

        if (valorAnterior !== null && operador !== null && !esperandoNuevoNumero) {
            const resultado = ejecutarOperacion(valorAnterior, valorActual, operador);
            if (resultado === null) {
                limpiarTodo();
                return;
            }
            setPantalla(String(resultado));
            setValorAnterior(resultado);
        } else {
            setValorAnterior(valorActual);
        }

        setOperador(nuevoOperador);
        setEsperandoNuevoNumero(true);
    };

    const calcularIgual = () => {
        if (valorAnterior === null || operador === null) return;

        const valorActual = parseFloat(pantalla);
        const resultado = ejecutarOperacion(valorAnterior, valorActual, operador);

        if (resultado === null) {
            limpiarTodo();
            return;
        }

        setPantalla(String(resultado));
        setValorAnterior(null);
        setOperador(null);
        setEsperandoNuevoNumero(true);
    };

    return {
        pantalla,
        limpiarTodo,
        pulsarNumero,
        pulsarPunto,
        cambiarSigno,
        calcularPorcentaje,
        seleccionarOperador,
        calcularIgual,
    };
};
