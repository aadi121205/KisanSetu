from ultralytics import YOLO

# Initialize model
model = YOLO('yolov8n-cls.pt')

# Train

results = model.train(data='data', epochs=300, patience = 30)
