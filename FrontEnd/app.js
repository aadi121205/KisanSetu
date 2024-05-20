const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
    const python = spawn('python', ['script.py', req.file.path]);
    let output = '';

    python.stdout.on('data', (data) => {
        output += data.toString();
    });

    python.on('close', (code) => {
        res.send(output);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});