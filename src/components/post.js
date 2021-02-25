import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li >
                {this.post.title}
            </li>
        )
    }
}

export default Post;