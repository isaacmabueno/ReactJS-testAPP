import React from 'react'
import Photo from './Photo'

function ReactPhoto(props) {
    return <div className="photoGrid">
        {props.posts.map((post, index) => <Photo key={index} post = {post}/>)}
    </div>
}

export default ReactPhoto
