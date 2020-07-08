import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'

import Navbar from './Navbar'

import './user/signin.css'

import StreamInfo from './videoStream/StreamInfo'



export default class Dashboard extends React.Component {
    constructor(props) {

        super(props)

        

        const token = localStorage.getItem("token")
        let isLogedIn = true

        if (token == null) {
            isLogedIn = false
        }

        this.state = {
            isLogedIn,
            streams:[]
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:5000/stream_api/v1/stream')
         .then(response => {
             console.log(response.data)
           this.setState({ streams: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    

      streamsList() {
        return this.state.streams.map(currentstream => {
          return <StreamInfo streams={currentstream} deleteStream={this.deleteStream} key={currentstream.id}/>;
        })
      }

    
    render() {

        if (!this.state.isLogedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Navbar />
                <Link to="/addstream"><button type="button" class="btn btn-success pull-right">AddInfo</button></Link>

                
                <div className="container" >
                
                    <div class="row">
                        

                        {this.streamsList()}

                        

                    </div>
                </div>

            </div>

        )
    }
}