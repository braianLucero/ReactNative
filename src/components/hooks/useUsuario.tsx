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
        } else {
            paginaRef.current--
            alert('no hay mas registros ')
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--
            cargarUsuarios()
        }
    }


    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
