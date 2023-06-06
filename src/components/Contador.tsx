import { useState } from 'react';


export const Contador = () => {

    const [contador, setContador] = useState(0)


    const suma = () => {
        setContador(contador + 1)
    }

    const restando = () => {
        setContador(contador - 1)
    }

    return (
        <>

            <h3>Contador:{contador}</h3>

            <button className="btn btn-success" onClick={suma}>
                +
            </button>
            &nbsp;
            &nbsp;

            <button className="btn btn-success" onClick={restando}>
                -
            </button >
        </>

    )
}
