import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

function ReactPhoto(props) {
    return <div className="photoGrid">
        {props.posts.map((post, index) => <Photo key={index} post = {post} onRemovePhoto={props.onRemovePhoto}/>)}
    </div>
}

ReactPhoto.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired

}

export default ReactPhoto
