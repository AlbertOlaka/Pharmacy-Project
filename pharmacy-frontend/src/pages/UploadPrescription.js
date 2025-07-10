import React, { useState } from "react";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import "./UploadPrescription.css";

const UploadPrescription = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!name || !description || !price || !imageFile) {
      setMessage("❌ Please fill in all fields.");
      return;
    }

    setUploading(true);
    setMessage("");

    try {
      const imageRef = ref(storage, `prescriptions/${imageFile.name}_${Date.now()}`);
      const uploadTask = uploadBytesResumable(imageRef, imageFile);

      uploadTask.on(
        "state_changed",
        null,
        (error) => {
          console.error("Upload error:", error);
          setMessage("❌ Image upload failed.");
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          await addDoc(collection(db, "products"), {
            name,
            description,
            price: Number(price),
            imageUrl: downloadURL,
            uploadedAt: Timestamp.now(),
          });

          setMessage("✅ Prescription added successfully!");
          setName("");
          setDescription("");
          setPrice("");
          setImageFile(null);
          setUploading(false);
        }
      );
    } catch (err) {
      console.error("Error:", err);
      setMessage("❌ Something went wrong.");
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>📤 Add New Prescription</h2>

      <input
        type="text"
        placeholder="Medicine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Prescription"}
      </button>

      {message && <p className="upload-message">{message}</p>}
    </div>
  );
};

export default UploadPrescription;
