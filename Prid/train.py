from ultralytics import YOLO

# Initialize model
model = YOLO('yolov8m.pt')

# Train

results = model.train(data='data.yaml', epochs=300, device='cuda', project='runs/train', name='exp', exist_ok=True, patience = 3)
