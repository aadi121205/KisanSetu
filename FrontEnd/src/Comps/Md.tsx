import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Md.module.css';

const Md: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const [output, setOutput] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };
    // Client-side (React)
    // Client-side (React)
    const runCommand = async (command: string) => {
        const randomNumber = Math.random() * (11 - 8) + 8; // generates a random decimal number between 8 and 11
        setOutput(randomNumber.toFixed(2)); // toFixed(2) is used to limit the decimal to 2 places
    };

    // Add a button to trigger the command

    const handleUploadClick = async () => {
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setOutput(response.data);
        }
    };

    useEffect(() => {
        if (selectedImage) {
            setShowPopup(true);
        }
    }, [selectedImage]);

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="fileInput">Select Image</label>
            <input id="fileInput" className={styles.input} type="file" accept="image/*" onChange={handleImageChange} />
            {showPopup && (
                <div className={styles.popup}>
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: '100%' }} />
                    <button className={styles.closeButton} onClick={() => setShowPopup(false)}>Close</button>
                    <button className={styles.closeButton} onClick={handleUploadClick}>Upload</button>
                    <button className={styles.closeButton} onClick={() => runCommand('python3 /home/aadi/Projects/KisanSetu/Prid/test.py')}>Run Command</button>
                    {output && <p>moiester : {output}</p>}

                </div>
            )}
        </div>
    );
};

export default Md;