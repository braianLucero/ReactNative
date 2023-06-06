import { useState } from 'react';

export const useCounter = (inicial: number = 0) => {

    const [contador, setContador] = useState(inicial)


    const sumaResta = (numero: number) => {
        setContador(contador + numero)
    }

    return {
        contador,
        sumaResta
    }

}
