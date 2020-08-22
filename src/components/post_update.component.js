import React, { Component } from 'react'
import {Button, Icon, Label, TextArea} from 'semantic-ui-react'
import Axios from "axios";

export default class PostUpdate extends Component {
     constructor(props) {
        super(props);
        this.state={
            uemail:localStorage.getItem('email'),
            posts:[],
            content:'',
            disable:true
        }
        this.onUpdate=this.onUpdate.bind(this)
        this.onChange=this.onChange.bind(this)
    }
    onChange=(e)=>{
         this.setState({
             content:[e.target.value]
         })
    }
    onUpdate(id,content){

         console.log(id,this.state.content)

        Axios.put(`https://reactpostsapi.herokuapp.com/Post/Update`,{
            did:id,
            content:this.state.content[0]
        }).then(res=>{
            if(res.data){
                this.props.history.push('/Update')
                window.history.go(0)
            }
        })
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
                        <div className='card-header'><span className='d-flex justify-content-between'><span>{x.email}</span><Button icon='edit' color='red' onClick={()=>{this.onUpdate(x._id)}}></Button></span> </div>
                        <div className='card-body'>
                            <TextArea onChange={this.onChange} placeholder={x.content} name='content' style={{width:'100%'}}></TextArea>
                            {/*<div>{x.content}</div>*/}
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