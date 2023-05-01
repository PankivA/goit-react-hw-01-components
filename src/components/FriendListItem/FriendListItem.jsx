import css from './FriendListItem.module.css'
import PropTypes from 'prop-types';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {(
    <li key={id} className={css.item}>
        {isOnline? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>)}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}