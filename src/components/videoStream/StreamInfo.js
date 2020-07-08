import React from 'react'

import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'

export default class ListMovies extends React.Component{

    constructor(props){
        super(props)

        this.handle=this.handle.bind(this)
        this.deleteMovie=this.deleteMovie.bind(this)

        let stream_name=props.streams.stream_name
           let enabled_stream=props.streams.enabled_stream
            let description=props.streams.description
            let video_source_type=props.streams.video_source_type
            let resolution=props.streams.resolution
            let frame_rate=props.streams.frame_rate
            let recording_quality=props.streams.recording_quality
            let video_length=props.streams.video_length
            let enabled_auto_schedule=props.streams.enabled_auto_schedule
            let schedule_start=props.streams.schedule_start
            let schedule_end=props.streams.schedule_end
            let enabled_compression=props.streams.enabled_compression
            
            let compression_quality=props.streams.compression_quality

        let id=props.streams.id
        let isVisible="collapse"
        let response

        this.state={
          stream_name,
            description,
            enabled_stream,
            video_source_type,
            resolution,
            frame_rate,
            recording_quality,
            video_length,
            enabled_auto_schedule,
            schedule_start,
            schedule_end,
            enabled_compression,
            compression_quality,
            id,
            isVisible,
            response
        }


    }

    deleteMovie(id) {
      const token = localStorage.getItem("token")
        
      axios.delete('http://localhost:5000/stream_api/v1/stream/'+id,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then(res =>{ 
          console.log(res.data)

          this.setState({
            response:res.data
          })
          window.location = '/';
        
        });
        
    }

    handle(){
      if(this.state.isVisible==="collapse"){
      this.setState({
        isVisible:"show"
      })
    }else{
      this.setState({
        isVisible:"collapse"
      })
    }
    }

    render(){
      
          
        return(
            <div class="col-sm-4">
                                <div class="card bg-light">
                                 <div class="card-body" >
                                    
                                    <table class="table">
                                    
                                    <tbody>
                                      <tr>
                                      
                                        <td><b>Stream Name</b></td>
                                        <td>{this.state.stream_name}</td>
                                        
                                      </tr>
                                      <tr>
                                      
                                        <td><b>Enabled Stream</b></td>
                                        <td>{this.state.enabled_stream}</td>
                                        
                                      </tr>
                                      <tr>
                                      
                                        <td><b>Video source type</b></td>
                                        <td>{this.state.video_source_type}</td>
                                        
                                      </tr>
                                      
                                      <tr>
                                          
                                            <td><b>Recording Quality</b></td>
                                            <td>{this.state.recording_quality}</td>
                                            
                                          </tr>
                                      <tr>
                                          
                                            <td><b>Frame Rate</b></td>
                                            <td>{this.state.frame_rate}</td>
                                            
                                          </tr>
                                      
                                      
                                    <tr>
                                    <td>
                                    
                                        <Link to={"/"} data-toggle="collapse" onClick={this.handle}  role="button" aria-expanded="false" >
                                        <i class="fa fa-expand fa-fw"/>
                                            Expand
                                        </Link> | <Link to={"/edit/"+this.state.id}><i class="fa fa-pencil fa-fw"/>Edit</Link> | <Link  to={"/"}  onClick={() => { this.deleteMovie(this.state.id) }}><i class="fa fa-trash-o fa-fw"/>Delete</Link>
                                    
                                    </td>
                                    
                                    </tr>

                                    

                                    </tbody>
                                  </table>
                                    </div>
                                    

                                    <div class={this.state.isVisible}  >
                                        <div class=" card-body" >
                                        <table class="table">
                                    
                                        <tbody>
                                        <tr>
                                      
                                        <td><b>Resolution</b></td>
                                        <td>{this.state.resolution}</td>
                                        
                                      </tr>
                                          <tr>
                                          
                                            <td><b>Description</b></td>
                                            <td>{this.state.description}</td>
                                            
                                          </tr>
                                          
                                          <tr>
                                      
                                        <td><b>Video length</b></td>
                                        <td>{this.state.video_length}</td>
                                        
                                      </tr>
                                          <tr>
                                          
                                            <td><b>Enabled auto schedule</b></td>
                                            <td>{this.state.enabled_auto_schedule}</td>
                                            
                                          </tr>

                                          <tr>
                                          
                                            <td><b>Schedule start time</b></td>
                                            <td>{this.state.schedule_start}</td>
                                            
                                          </tr>

                                          <tr>
                                          
                                            <td><b>schedule end time</b></td>
                                            <td>{this.state.schedule_end}</td>
                                            
                                          </tr>

                                          <tr>
                                          
                                            <td><b>Enabled compresion</b></td>
                                            <td>{this.state.enabled_compression}</td>
                                            
                                          </tr>

                                          <tr>
                                          
                                            <td><b>Compression Quality</b></td>
                                            <td>{this.state.compression_quality}</td>
                                            
                                          </tr>
                                          </tbody>
                                          </table></div>
                                    </div>
                                </div>
                                </div>
        )
    }
}