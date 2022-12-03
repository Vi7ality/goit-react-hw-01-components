import PropTypes from 'prop-types';
import { FriendItem, Status, List } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <List>
    {friends.map(friend => (
      <FriendItem key={friend.id}>
        <Status isOnline={friend.isOnline}></Status>
        <img src={friend.avatar} alt="User avatar" width="48" height="48" />
        <p>{friend.name}</p>
      </FriendItem>
    ))}
  </List>
);

FriendList.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
