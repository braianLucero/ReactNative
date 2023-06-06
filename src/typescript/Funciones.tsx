
export const Funciones = () => {

    const sumar = (a: number, b: number) => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>  resultado :{sumar(2, 4)}</span>
        </>
    )
}
