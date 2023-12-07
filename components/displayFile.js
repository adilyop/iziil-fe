import React, { useState, useEffect } from "react";
import axiosInstance from '../services/httpInterceptor'

// const API_URL = 'http://localhost:4000'
const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

export default function DisplayFile(props) {
  const [fileJson, setFileJson] = useState(props.fileJson);
  const [file64, setFile64] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFile(fileJson)
  }, []);
  function closeModal() {
    props.onChangeFile(true);
  }
  function getFile(file) {
    const url = `${API_URL}/files/download?patient=${localStorage.patientID}`;
    axiosInstance.post(url, file).then(response => response.data)
      .then((result) => {
        setFile64(result)
        setLoading(false);
      }
      );
  }

  function onDocumentLoadSuccess(document) {
    setNumPages(document.numPages);
  }

  return (
    <div
    >
      {!loading &&
        <div className="file__body">
          <img src={`data:${fileJson.mimeType};base64,${file64}`} className="image-content" />
        </div>
      }
    </div>
  );
}