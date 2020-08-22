import React, { Component } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import Axios from "axios";

export default class PostRead extends Component {
    constructor(props) {
        super(props);
        this.state={
            uemail:localStorage.getItem('email'),
            posts:[]
        }
        // this.onChange=this.onChange.bind(this)
        // this.onSubmit=this.onSubmit.bind(this)
    }
    componentDidMount() {
        Axios.get(`https://reactpostsapi.herokuapp.com/Post/Myposts/${localStorage.getItem('email')}`).then(res=>{
            console.log(res)
            if(res.data){
                console.log(res.data)
                this.setState({
                    posts:res.data
                })
            }
        })
    }

    render() {
        return (
            <div className='container mb-5 pb-5 w-50'>
                {this.state.posts.map(x=>(
                    <div className='card mt-5 shadow-lg'>
                        <div className='card-header'>{x.email}</div>
                        <div className='card-body'>
                            <div>{x.content}</div>
                            <div className='row card-footer d-flex justify-content-between'>
                                <div>
                                    <Button as='div' labelPosition='right'>
                                        <Button color='green'>
                                            <Icon name='thumbs up' />
                                        </Button>
                                        <Label as='a' basic color='green' pointing='left'>
                                           {x.likes}
                                        </Label>
                                    </Button>
                                    </div>
                                <div>
                                    <div className='mt-2'>{x.time}</div>
                                </div>
                                <div>
                                    <Button as='div' labelPosition='right'>
                                        <Button color='red'>
                                            <Icon name='thumbs down' />

                                        </Button>
                                        <Label as='a' basic color='red' pointing='left'>
                                           {x.dislikes}
                                        </Label>
                                    </Button>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        )
    }
}