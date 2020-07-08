import React from 'react'
import axios from 'axios'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Navbar from '../Navbar'

import DateTimePicker from 'react-datetime-picker'
import "react-datepicker/dist/react-datepicker.css";


export default class AddStreamInfo extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeScheduleStart = this.onChangeScheduleStart.bind(this)
        this.onChangeScheduleEnd = this.onChangeScheduleEnd.bind(this)
        this.onSchedule = this.onSchedule.bind(this)
        this.onCompressed=this.onCompressed.bind(this)

        
        this.onChangeDescription = this.onChangeDescription.bind(this)
        this.onChangeStreamName=this.onChangeStreamName.bind(this)
        this.onChageEnabledStream=this.onChageEnabledStream.bind(this)
        this.onChangeVideoSourceType=this.onChangeVideoSourceType.bind(this)
        this.onChangeVideoResolution=this.onChangeVideoResolution.bind(this)
        this.onChangeFrameRate=this.onChangeFrameRate.bind(this)
        this.onChangeRecodingQuality=this.onChangeRecodingQuality.bind(this)
        this.onChangeVideoLength=this.onChangeVideoLength.bind(this)
        
        

        this.onChangeCompressionQuality = this.onChangeCompressionQuality.bind(this)

        let successMessage = "alert alert-success alert-dismissible fade"

        let isSchedule = "d-none"
        let isCompressed = "d-none"

        this.state = {
            isSchedule,
            isCompressed,
            stream_name: '',
            description:'',
            enabled_stream: '',
            video_source_type: '',
            resolution: '',
            frame_rate: '',
            recording_quality: '',
            video_length: '',
            enabled_auto_schedule:'',
            schedule_start: new Date(),
            schedule_end: new Date(),
            enabled_compression:'',
            compression_quality:50,
            successMessage

        }
    }


    componentDidMount() {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:5000/stream_api/v1/stream/'+this.props.match.params.id,{ headers: {"Authorization" : `Bearer ${token}`} })
         .then(response => {
            console.log(response.data)
           
           this.setState({ 
            stream_name: response.data.stream_name,
            enabled_stream: response.data.enabled_stream,
            description:response.data.description,
            video_source_type: response.data.video_source_type,
            resolution: response.data.resolution,
            frame_rate: response.data.frame_rate,
            recording_quality: response.data.recording_quality,
            video_length: response.data.video_length,
            enabled_auto_schedule:response.data.enabled_auto_schedule,
            schedule_start: response.data.schedule_start,
            schedule_end: response.data.schedule_end,
            enabled_compression:response.data.enabled_compression,
            
            compression_quality: response.data.compression_quality
            
            });
            
         })
         .catch((error) => {
            
            console.log(error);
         })
      }

    onChangeStreamName(e){
        this.setState({
            stream_name:e.target.value
        })
    }

    onChageEnabledStream(e){
        this.setState({
            enabled_stream:e.target.value
        })
    }

    onChangeVideoSourceType(e){
        this.setState({
            video_source_type:e.target.value
        })
    }

    onChangeVideoResolution(e){
        this.setState({
            resolution:e.target.value
        })
    }

    onChangeFrameRate(e){
        this.setState({
            frame_rate:e.target.value
        })
    }

    onChangeRecodingQuality(e){
        this.setState({
            recording_quality:e.target.value
        })
    }


    onChangeVideoLength(e){
        this.setState({
            video_length:e.target.value
        })
    }

    onChangeScheduleStart(schedule_start) {
        this.setState({
            schedule_start: schedule_start
        });
    }

    onChangeScheduleEnd(schedule_end) {
        this.setState({
            schedule_end: schedule_end
        });
    }

    

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    

    onChangeCompressionQuality(e) {
        this.setState({
            compression_quality: e.target.value
        })
    }


    onSchedule(e) {
        console.log("hellpo")
        if (e.target.value === "true") {
            this.setState({
                enabled_auto_schedule:e.target.value,
                isSchedule: "form-group col-md-3"
            })
        } else {
            this.setState({
                enabled_auto_schedule:e.target.value,
                isSchedule: "d-none"
            })
        }
    }

    onCompressed(e){
        if (e.target.value === "true") {
            this.setState({
                enabled_compression:e.target.value,
                isCompressed: "form-group col-md-2"
            })
        } else {
            this.setState({
                enabled_compression:e.target.value,
                isCompressed: "d-none"
            })
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const token = localStorage.getItem("token")

        const streaminfo = {
            stream_name: this.state.stream_name,
            enabled_stream: this.state.enabled_stream,
            description:this.state.description,
            video_source_type: this.state.video_source_type,
            resolution: this.state.resolution,
            frame_rate: this.state.frame_rate,
            recording_quality: this.state.recording_quality,
            video_length: this.state.video_length,
            enabled_auto_schedule:this.state.enabled_auto_schedule,
            schedule_start: this.state.schedule_start,
            schedule_end: this.state.schedule_end,
            enabled_compression:this.state.enabled_compression,
            
            compression_quality: this.state.compression_quality

        }
        console.log(streaminfo)
        axios.post("http://localhost:5000/stream_api/v1/stream",
        streaminfo
        )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        this.setState({
            stream_name: '',
            enabled_stream: '',
            video_source_type: '',
            resolution: '',
            frame_rate: '',
            recording_quality: '',
            video_length: '',
            enable_auto_schedule:'',
            schedule_start: new Date(),
            schedule_end: new Date(),
            enabled_compression:'',
            compression_quality:'',
            compression_quality: 50,
            successMessage: "alert alert-success alert-dismissible"
        })
    }



    render() {
        return (
            <div>
                <Navbar />

                <div class={this.state.successMessage}>
                    <strong>Success!</strong> Movies added successfully, Wanna add more Or<Link to="/dashboard"> Click here</Link> to see the result ^^
          <button type="button" class="close" data-dismiss="alert">&times;</button>
                </div>

                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Stream Name</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Stream Name" value={this.state.stream_name} onChange={this.onChangeStreamName} />
                            </div>

                            <div class="form-group col-md-8">
                                <label for="inputAddress">Description</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="description" value={this.state.description} onChange={this.onChangeDescription}/>
                            </div>

                        </div>


                        <div class="form-row">
                            <div class="form-group col-md-2">
                                <label for="inputState">Enabled stream</label>
                                <select id="inputState" class="form-control" onChange={this.onChageEnabledStream}>
                                    <option>Choose...</option>
                                    <option value={true}>Enable</option>
                                    <option value={false}>Disable</option>
                                </select>
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState">Video source type</label>
                                <select id="inputState" class="form-control" onChange={this.onChangeVideoSourceType}>
                                    <option >Choose...</option>
                                    <option value="MJPEG">MJPEG</option>
                                    <option value="H264">H264</option>
                                    <option value="H265">H265</option>
                                    <option value="OGG">OGG</option>
                                </select>
                            </div>


                            <div class="form-group col-md-2">
                                <label for="inputState">Video Resolution</label>
                                <select id="inputState" class="form-control" onChange={this.onChangeVideoResolution}>
                                    <option>Choose...</option>
                                    <option value="High (1920x1080)">High (1920x1080)</option>
                                    <option value="Medium (1280x720)">Medium (1280x720)</option>
                                    <option value="Low (640x480)">Low (640x480)</option>
                                </select>
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState">Frame Rate</label>
                                <select id="inputState" class="form-control" onChange={this.onChangeFrameRate}>
                                    <option>Choose...</option>
                                    <option value="5 fps">5 fps</option>
                                    <option value="7 fps">7 fps</option>
                                    <option value="9 fps">9 fps</option>
                                    <option value="10 fps">10 fps</option>
                                    <option value="15 fps">15 fps</option>
                                    <option value="20 fps">20 fps</option>
                                    <option value="25 fps">25 fps</option>
                                    <option value="30 fps">30 fps</option>
                                </select>
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState">Recording Quality</label>
                                <select id="inputState" class="form-control" onChange={this.onChangeRecodingQuality}>
                                    <option>Choose...</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState">Video length(In Seconds)</label>
                                <input type="number" class="form-control" id="inputEmail4" placeholder="Enter value" min="30" max="600" value={this.state.video_length} onChange={this.onChangeVideoLength} />
                            </div>

                        </div>

                        <div class="form-row">

                            <div class="form-group col-md-2">
                                <label for="inputState">Auto Schedule</label>
                                <select id="inputState" class="form-control" onChange={this.onSchedule}>
                                    <option>Choose...</option>
                                    <option value={true} >ON</option>
                                    <option value={false} >OFF</option>

                                </select>
                            </div>

                            <div className={this.state.isSchedule}>
                                <label>Auto Schedule Start Time </label>
                                <DateTimePicker

                                    onChange={this.onChangeScheduleStart}
                                    value={this.state.schedule_start} />
                            </div>

                            <div className={this.state.isSchedule}>
                                <label>Auto Schedule End Time</label>
                                <DateTimePicker

                                    onChange={this.onChangeScheduleEnd}
                                    value={this.state.schedule_end} />
                            </div>

                            <div class="form-group col-md-2">
                                <label for="inputState">Enabled Compression</label>
                                <select id="inputState" class="form-control" onChange={this.onCompressed}>
                                    <option>Choose...</option>
                                    <option value={true}>Enable</option>
                                    <option value={false}>Disable</option>
                                </select>
                            </div>

                            <div class={this.state.isCompressed}>
                                <label for="formControlRange">Compression Range</label>
                                <p id="range"><b>{this.state.compression_quality}</b></p>
                                <input type="range" class="form-control-range" id="formControlRange" min="0" max="100" onChange={this.onChangeCompressionQuality} />


                            </div>



                        </div>



                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>

        )
    }
}