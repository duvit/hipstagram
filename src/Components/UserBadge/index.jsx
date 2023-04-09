import { useNavigate } from 'react-router-dom';
import './style.css';

const UserBadge = ({
    nickname,
    avatarUrl,
    id
}) => {
    const navigate = useNavigate();
    const onUserBadgeClick = () => {
        navigate(`/${id}`)
    }

    return (
        <div className='userBadgeRoot' onClick={onUserBadgeClick}>
            {avatarUrl ? <img src={avatarUrl} alt="user avatar" className='userBadgeAvatar' /> : <div className='userBadgePlaceholder'></div>}
            <span className='userBadgeName'>{nickname}</span>
        </div>
    )
}

export default UserBadge;