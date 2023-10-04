import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"; // Importe a biblioteca jwt-decode

export function Header() {
    const navigate = useNavigate();

    // Obtém o token do localStorage
    const token = localStorage.getItem("token");

    // Decodifica o token para obter as informações (incluindo o nome)
    const decodedToken = jwt_decode(token);

    // Extrai o nome do token decodificado
    const userName = decodedToken.name;

    // Função para logout
    function handleSignOut() {
        // Remove o token do localStorage
        localStorage.removeItem('token');

        // Redireciona o usuário para login
        navigate("/");
    }

    return (
        <Container>
            <Profile>
                <div>
                    <span>Welcome</span>
                    <strong>{userName}</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine onClick={handleSignOut} />
            </Logout>
        </Container>
    );
}
