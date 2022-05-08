import './post.css';
import { MoreVert } from '@material-ui/icons';

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper"> 
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postProfileImage" />
            <span className="postUsername">she</span>
            <span className="postDate">5 min ago</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
            <span className='postText'>
                Hey it's my first post:)
            </span>
            <img src="/assets/post/1.jpeg" alt="" className="postImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="/assets/like.png" alt="" className="postLikeIcon" />
                <img src="/assets/heart.png" alt="" className="postLikeIcon" />
                <span className="postLikeCounter">32 people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentCounter">
                    9 people commented
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
