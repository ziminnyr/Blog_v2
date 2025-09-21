import { Link } from "react-router-dom";
import { Icon } from "../../../../components";
import styled from "styled-components";

const PostCardContainer = ({ className, id, title, imageUrl, publishedAt, commentsCount }) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              <Icon inactive={true} id="fa-calendar-o" margin="0 8px 0 0" size="18px" />
              {publishedAt}
            </div>
            <div className="comments-count">
              <Icon inactive={true} id="fa-comment-o" margin="0 8px 0 0" size="18px" />
              {commentsCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 9px;
  border: 1px solid #aaa;
  border-radius: 10px;

  & img {
    display: block;
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  & .post-card-footer {
    padding: 5px;
    border-top: 1px solid #aaa;
  }

  & h4 {
    margin: 0;
  }

  & .post-card-info {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  & .published-at {
    display: flex;
  }

  & .comments-count {
    display: flex;
  }
`;
