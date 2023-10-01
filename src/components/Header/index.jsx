import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";



export function Header() {
    const { signOut } = useAuth();
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }
    return (
        <Container >
            <Profile>
                <div>
                    <span>Welcome</span>
                    <strong> Weslley Oliveira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine onClick={handleSignOut} />
            </Logout>
        </Container>
    )
}