import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";


export function Header() {
    return (
        <Container >
            <Profile to='/profile'>
                <img src="https://github.com/weslleyolli.png" alt="user Photo" />

                <div>
                    <span>Welcome</span>
                    <strong> Weslley Oliveira</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}