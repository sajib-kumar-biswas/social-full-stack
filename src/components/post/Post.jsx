import './post.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {
  const user = Users.filter((u) => u.id === post.userId);

  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(() => (isLiked ? like - 1: like + 1));
    setIsLiked(() => (!isLiked));
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={user[0].profilePicture}
              alt=""
              className="postProfileImage"
            />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="postLikeIcon" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="" className="postLikeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">
              {post.comment} people commented
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
