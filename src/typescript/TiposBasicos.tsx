
export const TiposBasicos = () => {

    const nombre: string = 'fernando';
    const number: number = 123;
    const estaActivo: boolean = true;
    const poderes: string[] = ['volar', 'saltar', 'fuerza'];

    return (
        <>
            <h3>Tipos basicos </h3>
            {nombre} ,{number} , {(estaActivo) ? 'activo ' : 'no hay nada '};
            <br />
            {poderes.join(',')}

        </>
    )
}
