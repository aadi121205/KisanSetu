from ultralytics import YOLO

# Initialize model
model = YOLO('yolov8m.pt')

# Test

results = model.predict()