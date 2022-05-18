import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({isOnline, avatar, name }) => {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.isOnline : s.isOffline}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};