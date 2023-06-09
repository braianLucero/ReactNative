import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    let api = reqResApi; // lo adapto a mi gusto 

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])


    const cargarUsuarios = async () => {
        const res = await api.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (res.data.data.length > 0) {
            setUsuarios(res.data.data);
            paginaRef.current++;
        } else {
            alert('no hay mas registros ')
        }

        setUsuarios(res.data.data);
    }





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