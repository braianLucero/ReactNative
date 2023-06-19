import { useUsuario } from './hooks/useUsuario';
import { Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

    const { cargarUsuarios, usuarios } = useUsuario();


    const renderItem = (usuario: Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <th><img src={usuario.avatar} style={{ width: 60, borderRadius: 100 }} alt="Avatar" /></th>
                <th>{usuario.first_name} {usuario.last_name}</th>
                <th>{usuario.email}</th>
            </tr>
        )
    }



    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr >
                        <th>Avatar</th>
                        <th>Nombre </th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button className='btn btn-primary' onClick={cargarUsuarios}>
                siguiente
            </button>
            &nbsp;
            <button className='btn btn-primary' onClick={cargarUsuarios}>
                Anteriores
            </button>


        </>
    )
}


{/* <table className="table">
<thead>
    <tr>
        <th>Avatar</th>
        <th>Nombre </th>
        <th>Email</th>
    </tr>
</thead>
                                                        <--------------------   otra forma de extraer el Json 
<tbody>
    {usuario.map((usuario, index) => (
        <tr key={index}>
            <td><img src={usuario.avatar} alt="Avatar" /></td>
            <td>{usuario.first_name} {usuario.last_name}</td>
            <td>{usuario.email}</td>
        </tr>
    ))}
</tbody>

</table> */}