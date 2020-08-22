import React, { Component } from 'react'
import {Button, Icon, Input, Label} from 'semantic-ui-react'
import Axios from "axios";

export default class Post extends Component {
     constructor(props) {
        super(props);
        this.state={
            uemail:localStorage.getItem('email'),
            posts:[],
            query:''
        }
        this.onChange=this.onChange.bind(this)
        // this.onSubmit=this.onSubmit.bind(this)
    }
    onChange=(e)=>{
        this.setState({posts:this.state.posts.filter(post=>post.content.includes(e.target.value))})
        if(e.target.value.length<=0){
           this.componentDidMount()
        }
    }
    componentDidMount() {
        Axios.get(`https://reactpostsapi.herokuapp.com/Post/Posts`).then(res=>{
            console.log(res)
            if(res.data){
                console.log(res.data)
                this.setState({
                    posts:res.data
                })
            }
        })
    }
    onClicklike(id){
         Axios.get(`https://reactpostsapi.herokuapp.com/Post/like/${id}`).then(res=>{
            if(res){
                this.setState({
                    posts:res.data
                })
                // this.props.history.push('/')
                // window.history.go(0)
            }
        })
    }
    onClickdislike(id){
           Axios.get(`https://reactpostsapi.herokuapp.com/Post/dislike/${id}`).then(res=>{
             if(res){
                this.setState({
                    posts:res.data
        })
             }})}

    render() {
        return (
            <div className='container mb-5 pb-5 w-50'>
                <div className='mx-auto'> <Input className='w-100' name='query' placeholder='serach posts' onChange={this.onChange}/></div>
                {this.state.posts.map(x=>(
                    <div className='card mt-5 shadow-lg' key={x._id}>
                        <div className='card-header'>{x.email}</div>
                        <div className='card-body'>
                            <div>{x.content}</div>
                            <div className='row card-footer d-flex justify-content-between'>
                                <div>
                                    <Button as='div' labelPosition='right' onClick={()=>{this.onClicklike(x._id)}}>
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
                                    <Button as='div' labelPosition='right' onClick={()=>{this.onClickdislike(x._id)}}>
                                        <Button color='red' >
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