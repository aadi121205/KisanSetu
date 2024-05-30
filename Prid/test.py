from ultralytics import YOLO

# Initialize model
model = YOLO('/home/aadi/Projects/KisanSetu/Prid/runs/classify/train/weights/best.pt')

# Test

results = model.predict('data/train/Healthy')