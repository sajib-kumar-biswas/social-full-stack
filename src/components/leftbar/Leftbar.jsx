import './leftbar.css';
import { RssFeed, Chat, Group, Bookmark, HelpOutline } from '@material-ui/icons';
import { PlayCircleFilledOutlined, WorkOutline,Event,School } from '@material-ui/icons';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftbarButton">Show more</button>
        <hr className='leftbarHr'/>
        <ul className="leftbarFriends">
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
            <li className="leftbarFriend">
                <img src="/assets/person/5.jpeg" alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">Page Denin</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
