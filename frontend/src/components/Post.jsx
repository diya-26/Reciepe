import React from 'react'
import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart, faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import Like from './Like';
function Post({ author = "gaurav", likes, description = "xys" }) {
    return (
        <div className='centered-container'>
            <div className='post-body'>
                <div className='post-header'>
                    <div className="profile-pic">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Profile Icon" className="profile-icon" />
                        <span className="username">{author}</span>
                        <div className="right-content">
                            <FontAwesomeIcon icon={farBookmark} size="1x" className="bookmark-icon" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1711477326347-721652a2a763?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='post-body' />
                </div>
                {/* like-comment-bookmark icon */}
                <Like recipeId="65f5deae39d4d5ebd8dd729c" likes="3"></Like>
                <div className="user-profile">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Post