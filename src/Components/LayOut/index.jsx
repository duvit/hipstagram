import "./style.css"
import Navbar from "../Navabar/index";

const Layout = ({
    nickname,
    avatarUrl,
    id,
    children
}) => {
    return (
        <div className="layoutRoot">
            <Navbar nickname={nickname} avatarUrl={avatarUrl} id={id}/>
            <div className="layoutBody">
                {children}
            </div>
        </div>
    )
}

export default Layout;