import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem'


export const FriendList = ({ friends }) => {
  return (
    <section className={css.friends}>
        <ul className={css.list}>
        {friends.map(({ id, avatar, name, isOnline }) => 
         <FriendListItem
         key={id}
         avatar={avatar}
         name={name}
         isOnline={isOnline} />
       )}
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