import React, {Component} from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import List from './List'

class Main extends Component {
    render() {
        return(
            <div>
                <Title todo = {'toDos'} />
                <SubTitle/>
                <List tasks =   {[
                                    'Pack bags to head back to Chicago',
                                    'download podcasts for the drive home',
                                    'Make sure we arent leaving baby stuff behind'
                                ]}/>

                <List tasks =   {[
                                    'Go to breakfast with family',
                                    'Drive home to from MI',
                                    'Watch the NBA Finals'
                                ]}/>
            </div>
        )
    }
}

export default Main
