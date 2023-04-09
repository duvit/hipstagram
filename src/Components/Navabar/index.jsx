import './style.css';
import UserBadge from '../UserBadge'

const Navbar = ({
    nickname,
    avatarUrl,
    id,
    children
}) => {
    return (
        <div className='navbarRoot'>
            <div className='navbarWrapper'>
                <span>hipstagram</span>
                <UserBadge nickname={nickname} avatarUrl={avatarUrl} id={id}/>
            </div>
        </div>
    )
}

export default Navbar;