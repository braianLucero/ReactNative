import { useReducer } from "react"

interface AuthState {
    initialState: {
        validando: boolean;
        token: string | null;
        username: string;
        nombre: string;
    }
}


const initialState: AuthState = {
    validando: true,
    token: null,
    username: "",
    nombre: ""

}

type AuthAction = {
    type: "logout"
};


const authReducer = (state: AuthState, action: AuthAction): AuthState => {

}


export const Login = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                validando...
            </div>


            <div className="alert alert-danger">
                No autenticado
            </div>

            <div className="alert alert-success">
                Autenticado
            </div>

            <button className="btn btn-primary">
                Login
            </button>
            &nbsp;
            <button className="btn btn-danger">
                About
            </button>
        </>
    )
}
