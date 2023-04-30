import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
        <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <li key={id} className={css.item}>
                {isOnline? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>))}
        </ul>
    </section>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
  ),
}