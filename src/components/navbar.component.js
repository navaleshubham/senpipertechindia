import React,{Component} from 'react'
import { Button,Header } from 'semantic-ui-react'

export default class Navbar extends Component {

    render() {
        return (

            <div  className='d-flex justify-content-between mt-3 mx-5'>

                <Header content='CRUD Application' color="blue" />
                <div>
                    {localStorage.getItem('user')!==null?

                        <span className='d-flex justify-content-center'>
                            <Button content='All Posts' primary href='/' />
                            <Button content='My Posts' color='green' href='/Post' />
                            <Button content='New Post' primary href='/New' />
                            <Button content='Update Post'  color='yellow' href='/Update' />
                            <Button content='Delete Post' color='orange' href='/Delete' />
                        </span>:null
                    }
                </div>
                <div>
                    {localStorage.getItem('user')===null?
                        <span>
                            <Button content='Posts' primary href='/' />
                            <Button content='Login'  color='red' href='/Login' />
                        </span>:
                        <Button content={localStorage.getItem('user')}  onClick={()=>{localStorage.removeItem('user')}} color='red' href='/' />
                    }
                </div>
            </div>
        )
    }
}