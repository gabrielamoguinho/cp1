import { BiHome } from "react-icons/bi"
import { Link } from "react-router-dom"
import { FiFilePlus, FiUser } from "react-icons/fi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return (
            <StyledMenu>
                <StyledWrapperMenu>
                    <StyledMenuItem> 
                        <BiHome size="1.5rem" color="#38aede"/>
                        <Link style={{ color: '#38aede' }} to="/">Home</Link>
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <FiFilePlus size="1.5rem" color="#38aede"/>
                        <Link style={{ color: '#38aede' }} to="/novalista">Nova Lista</Link>
                    </StyledMenuItem>

                    <StyledMenuItem>
                        <FiUser size="1.5rem" color="#38aede"/>
                        <Link style={{ color: '#38aede' }} to="/perfil">Perfil</Link>
                    </StyledMenuItem>
                </StyledWrapperMenu>
            </StyledMenu>
    )
}