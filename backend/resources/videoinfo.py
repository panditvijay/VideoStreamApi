from flask import Response, request, jsonify
from flask_restful import Resource

from app import db
from app import ma

from model.videoinfo import Videoinfo, VideoinfoSchema

# Init schema
videoinfo_schema = VideoinfoSchema()
videosinfo_schema = VideoinfoSchema(many=True)


class VideosinfoApi(Resource):
    def get(self):
        all_videos = Videoinfo.query.all()
        result = videosinfo_schema.dump(all_videos)
        return jsonify(result)
    def post(self):
        stream_name = request.json['stream_name']
        print(stream_name)
        description = request.json['description']

        enabled_stream = request.json['enabled_stream']
        video_source_type=request.json['video_source_type']
        resolution=request.json['resolution']
        frame_rate=request.json['frame_rate']
        recording_quality=request.json['recording_quality']
        video_length=request.json['video_length']
        enabled_auto_schedule=request.json['enabled_auto_schedule']
        schedule_start=request.json['schedule_start']
        print("Date ",type(schedule_start))
        schedule_end=request.json['schedule_end']
        enabled_compression=request.json['enabled_compression']
        compression_quality=request.json['compression_quality']

        new_video = Videoinfo(stream_name, description, enabled_stream, video_source_type, resolution, frame_rate, recording_quality, video_length, enabled_auto_schedule, schedule_start, schedule_end, enabled_compression, compression_quality)

        db.session.add(new_video)
        db.session.commit()

        return videoinfo_schema.jsonify(new_video)


class VideoinfoApi(Resource):
    # Get Single Products

    def get(self,id):
        videoinfo = Videoinfo.query.get(id)

        
        return videoinfo_schema.jsonify(videoinfo)


# Update a Product

    def put(self,id):
        videoinfo = Videoinfo.query.get(id)

        stream_name = request.json['stream_name']
        description = request.json['description']

        enabled_stream = request.json['enabled_stream']
        video_source_type=request.json['video_source_type']
        resolution=request.json['resolution']
        frame_rate=request.json['frame_rate']
        recording_quality=request.json['recording_quality']
        video_length=request.json['video_length']
        enabled_auto_schedule=request.json['enabled_auto_schedule']
        schedule_start=request.json['schedule_start']
        schedule_end=request.json['schedule_end']
        enabled_compression=request.json['enabled_compression']
        compression_quality=request.json['compression_quality']

        videoinfo.stream_name = stream_name
        videoinfo.description = description
        videoinfo.enabled_stream = enabled_stream
        videoinfo.video_source_type = video_source_type
        videoinfo.resolution = resolution
        videoinfo.frame_rate = frame_rate
        videoinfo.recording_quality = recording_quality
        videoinfo.video_length = video_length
        videoinfo.enabled_auto_schedule = enabled_auto_schedule
        videoinfo.schedule_start = schedule_start
        videoinfo.schedule_end = schedule_end
        videoinfo.enabled_compression = enabled_compression
        videoinfo.compression_quality = compression_quality

        db.session.commit()

        return videoinfo_schema.jsonify(videoinfo)

# Delete Product

    def delete(self,id):
        videoinfo = Videoinfo.query.get(id)
        print(videoinfo)
        db.session.delete(videoinfo)
        db.session.commit()

        return videoinfo_schema.jsonify(videoinfo)
