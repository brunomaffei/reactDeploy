import './styles.css';

export const PostCard = ({ title, cover, body }) => (
    <div className="post">
        <img src={cover} alt={title} />
        <div className="posts-content">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
);