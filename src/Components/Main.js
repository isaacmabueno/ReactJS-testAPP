import React, {Component} from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
// import List from './List'

class Main extends Component {
    render() {
        return(
            <div>
                <Title todo = {'React Photo'} />
                <SubTitle/>
                            </div>
        )
    }
}

export default Main
