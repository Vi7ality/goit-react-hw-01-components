
import PropTypes from "prop-types";
import { ProfileBlock, Description, Avatar } from "./Profile.styled";

export const Profile = ( { username, tag, location, avatar, stats: { followers, views, likes} }) => (
<ProfileBlock>
  <Description>
    <Avatar
      src={avatar}
      alt='User avatar'
    />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
  </Description>

  <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</ProfileBlock>
)

Profile.propTypes = {
  
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,

    
}