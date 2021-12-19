import React, { useState } from 'react';
import {
    collection,
    addDoc,
    doc,arrayUnion,
    updateDoc,
} from 'firebase/firestore';
import { database } from '../firebase/firebase';
import Loader from '../component/Loader';
import MultiSelect from '../component/MultiSelect';
import ProductInfo from '../component/ProductInfo';
import TextField from '../component/TextField';
import { storage } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export default function ProductUpload() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState([]);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [color, setColor] = useState("");
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [showAlert, setShowAlert] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const onSelect = (val) => {
        const index = size.indexOf(val);
        if (index !== -1) {
            setSize(size.filter(x => x !== val))
        } else {
            setSize([...size, val])
        }
    }

    const uploadDetails = async (e) => {
        e.preventDefault();
        setLoading(true)
        addDoc(collection(database, 'products'), {
            id,
            name,
            size,
            price,
            purchasePrice, color,
            createdAt: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
        }).then(docRef =>{
            var imagessss = []
            images.map((image) => {
                const storageRef = ref(storage, `images/${image.name}`);
                uploadBytesResumable(storageRef, image).then(async snapshot => {
                    const downloadURL = await getDownloadURL(storageRef)
                       console.log(`Downloading   {} `,image.name);
                       imagessss.push(downloadURL);
                       updateDoc(doc(database, 'products', docRef.id), {
                         downloadURL:arrayUnion(downloadURL)
                     },{ merge: true })
    
                });
            });
        });
        setLoading(false);
        restForm();
    }

    const restForm = () => {
        setId("");
        setUrls(["https://via.placeholder.com/400x300"]);
        setColor("");
        setName("");
        setPrice("");
        setSize([]);
        setPurchasePrice("")
    }

    const handleImageChange = e => {
        const files = e.target.files;
        setImages([...files]);
        var urls = Object.keys(files).map((key) => URL.createObjectURL(files[key]));
        setUrls([...urls]);
    };

    return (
        <div className="h-screen md:flex ">
            {isLoading && <Loader />}
            {showAlert && <div className="bg-green-600   absolute bottom-10 shadow-lg  right-10  border-l-4 border-green-500 text-white p-2" role="alert">
                <p>Uploaded Successfully</p>
            </div>
            }

            <ProductInfo />

            <div className="flex justify-center py-10 p-2 items-center bg-white">
                <div className="grid grid-cols-2 gap-1 h-full ">
                    <form className="w-full max-w-sm ">

                        <TextField
                            label="Id"
                            onChange={setId}
                            value={id}
                            id="id"
                            type="text"
                        />
                        <TextField
                            label="Name"
                            onChange={setName}
                            value={name}
                            id="name"
                            type="text"
                        />
                        <TextField
                            label="Color"
                            onChange={setColor}
                            value={color}
                            id="color"
                            type="text"
                        />
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="label" htmlFor="inline-password">
                                    Price(Sale/Pur)
                                </label>
                            </div>
                            <div className="md:w-2/3 flex">
                                <input className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="price" value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    type="number" />
                                <input className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" value={purchasePrice}
                                    id="purchase_price"
                                    type="number" onChange={e => setPurchasePrice(e.target.value)} />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="label" htmlFor="size">
                                    Size
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <label className="block text-left" style={{ "maxWidth": "300px" }}>
``                                    <MultiSelect
                                        onSelect={onSelect}
                                        items={sizes}
                                        selected={size}
                                    />

                                </label>
                            </div>
                        </div>


                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="label" htmlFor="inline-password">
                                    Image
                                </label>
                            </div>
                            <div className="md:w-2/3 relative">
                                <input
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                    className="form-control block opacity-80 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    " type="file" id="formFile" />

                            </div>   </div>

                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="flex md:w-2/3 justify-center content-center">
                                <button
                                    onClick={uploadDetails}
                                    className="btn focus:shadow-outline focus:outline-none" type="button">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="grid grid-cols-1 gap-1  w-full  ml-12 mb-12  justify-center content-center">
                        {urls && urls.map((u, index) =>
                            <img key={index + u}
                                className=" justify-center h-36 border-gray-100  rounded border-4"
                                src={u}
                                alt="Uploaded Images"
                                height="100"
                                width="200" />
                        )
                        }

                    </div>
                </div>
            </div>
        </div>
    );


}
