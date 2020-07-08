from app import db
from app import ma

# Videoinfo Class/Model
class Videoinfo(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  stream_name = db.Column(db.String(100))
  description = db.Column(db.String(200))
  enabled_stream=db.Column(db.String(100))
  video_source_type=db.Column(db.String(100))
  resolution=db.Column(db.String(100))
  frame_rate=db.Column(db.String(100))
  recording_quality=db.Column(db.String(100))
  video_length=db.Column(db.String(100))
  enabled_auto_schedule=db.Column(db.String(100))
  schedule_start=db.Column(db.String(100))
  schedule_end=db.Column(db.String(100))
  enabled_compression=db.Column(db.String(100))
  compression_quality=db.Column(db.Integer)
  

  def __init__(self, stream_name, description, enabled_stream, video_source_type, resolution, frame_rate, recording_quality, video_length, enabled_auto_schedule, schedule_start, schedule_end, enabled_compression, compression_quality):
    self.stream_name = stream_name
    self.description = description
    self.enabled_stream = enabled_stream
    self.video_source_type = video_source_type
    self.resolution = resolution
    self.frame_rate = frame_rate
    self.recording_quality = recording_quality
    self.video_length = video_length
    self.enabled_auto_schedule = enabled_auto_schedule
    self.schedule_start = schedule_start
    self.schedule_end = schedule_end
    self.enabled_compression = enabled_compression
    self.compression_quality = compression_quality



# Videoinfo Schema
class VideoinfoSchema(ma.Schema):
  class Meta:
    fields = ('id', 'stream_name', 'description', 'enabled_stream', 'video_source_type', 'resolution', 'frame_rate', 'recording_quality', 'video_length', 'enabled_auto_schedule', 'schedule_start', 'schedule_end', 'enabled_compression', 'compression_quality')


