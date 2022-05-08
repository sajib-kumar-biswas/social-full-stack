import './rightbar.css';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            {' '}
            <strong>Foisal Hasan</strong> and <strong>3 Others</strong> have
            birthdays today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
            <li className="rightbarFriend">
                <div className="rightbarProfileImageContainer">
                    <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImage" />
                    <span className="isOnline"></span>
                </div>
                <span className="rightbarUsername">Page Carter</span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
