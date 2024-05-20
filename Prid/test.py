from ultralytics import YOLO

# Initialize model
model = YOLO('runs/classify/train/weights/last.pt')

# Test

results = model.predict('data/train/Healthy')