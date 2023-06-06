import { useCounter } from './hooks/useCounter';

export const ContadorConHook = () => {

    const { contador, sumaResta } = useCounter(10);

    return (
        <>
            <h3>Contador con Hook:{contador}</h3>

            <button className="btn btn-success" onClick={() => { sumaResta(1) }}>
                +
            </button>
            &nbsp;
            &nbsp;

            <button className="btn btn-success" onClick={() => { sumaResta(-1) }}>
                -
            </button >
        </>

    )
}
