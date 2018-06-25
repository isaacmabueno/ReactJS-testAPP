import React, {Component} from 'react'
import Photo from './Photo'

class ReactPhoto extends Component {
    render() {
        return
        <div className="photoGrid">
            {this.props.posts.map((post) => <Photo posts={post}/>)}
        </div>
    }
}

export default ReactPhoto
