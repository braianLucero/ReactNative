import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../../api/reqRes';
import { ReqResListado, Usuario } from '../../interfaces/reqRes';

export const useUsuario = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios();
    }, [])


    const cargarUsuarios = async () => {
        const res = await reqResApi.get<ReqResListado>('/users', {
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

    }

    return {
        cargarUsuarios,
        usuarios
    }
}
