import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogList} = props
  const {id, author, avatarUrl, imageUrl, title, topic} = blogList
  return (
    <li className="list">
      <Link to={`/blogs/${id}`}>
        <div className="background">
          <img src={imageUrl} className="image1" />
          <div className="background1">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="background2">
              <img src={avatarUrl} className="avatar" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
