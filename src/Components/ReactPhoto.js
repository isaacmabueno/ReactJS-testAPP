import React, {Component} from 'react'
import Photo from './Photo'


class ReactPhoto extends Component {
    render() {
        return
        <div>
            {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
        </div>
    }
}

export default ReactPhoto
