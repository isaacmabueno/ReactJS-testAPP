import React, {Component} from 'react'

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container"></div>
            <button className="remove-button">Remove</button>
        </figure>
    }
}

export default Photo
