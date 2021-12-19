import React from 'react'
import { storage } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function useUpload(image) {
    const [downloadUrl, setUrl] = React.useState("https://via.placeholder.com/400x300");
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const storageRef = ref(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            },
            (error) => {

                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl(downloadURL);
                });
            }
        );
    },[image]);


    return { downloadUrl, progress };
}
