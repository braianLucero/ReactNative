import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    let api = reqResApi; // lo adapto a mi gusto 

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {

        api.get<ReqResListado>('/users')
            .then(res => {
                console.log(res.data.data);
            })
            .catch(console.log);
    }, [])

    return (
        <>
            <h3>Usuarios:</h3>

            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre </th>
                        <th>Email</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}
