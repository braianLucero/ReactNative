interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string,
    direccion: number
}

export const ObjLiterales = () => {

    const description: string = "Objetos Literales";
    const persona: Persona = {
        nombreCompleto: "brian",
        edad: 20,
        direccion: {
            pais: "argentina",
            direccion: 1266

        }
    }
    return (
        <>
            <h3>{description}</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>

        </>
    )
}
