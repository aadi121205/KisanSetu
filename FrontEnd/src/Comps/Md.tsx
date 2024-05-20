import React, { useState, useEffect } from 'react';
import styles from './Md.module.css';

const Md: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
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
                    <button className={styles.closeButton}>Upload</button>
                    <button className={styles.closeButton} onClick={() => setSelectedImage(null)}>Check Score</button>
                </div>
            )}
        </div>
    );
};

export default Md;