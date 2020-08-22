import React, { Component } from 'react'
import {Button, Icon, Input, Label,TextArea} from 'semantic-ui-react'
import Axios from "axios";

export default class PostNew extends Component {
    constructor(props) {
        super(props);
        this.state={
            uemail:localStorage.getItem('email'),
            ucontent:'',
            errmsg:''
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    onSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        Axios.post('https://reactpostsapi.herokuapp.com/Post/New',{
            email:this.state.uemail,
            content:this.state.ucontent
        }).then(res=>{
            console.log(res)
            if(res.data.Post){
                console.log(res.data.Post)
                // localStorage.setItem('Post',res.data.Post)
                this.props.history.push('/Post')
                window.history.go(0)
            }
            else{
                this.setState({
                    errmsg:res.data
                })
            }
        })
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div className='container jumbotron mt-5'>
                {this.state.errmsg !==''?
                    <Label content={this.state.errmsg} style={{width:'300px',fontsize:'20px'}} color='red'></Label> :null
                }
                <form  onSubmit={this.onSubmit}>
                    <div className='mt-3'>
                        <Label content='Username' className='m-2 p-3' color='blue'></Label>
                        <Input type='email' name='uemail' icon='user' value={this.state.uemail} onChange={this.onChange} disabled ></Input>
                    </div>
                    <div className='mt-1'>
                        <Label content='Content / Message' style={{width:'300px'}} className='m-2 p-3' color='blue'></Label>
                        <br/>
                        <TextArea type='text' style={{width:'300px'}} name='ucontent'  icon='lock' onChange={this.onChange}></TextArea>
                    </div>
                    <div className='mt-3'>
                        <Button content='Add Post' type='submit' color='green'></Button>
                    </div>
                </form>
            </div>
        );
    }
}