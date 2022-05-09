import './profile.css';
import Leftbar from '../../components/leftbar/Leftbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                <img src="/assets/post/3.jpeg" alt="" className="profileCoverImage" />
                <img src="/assets/person/7.jpeg" alt="" className="profileUserImage" />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">sajib kumar biswas</h4>
                <span className="profileInfoDesc">Hello Programmers!</span>
              </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
