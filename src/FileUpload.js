import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';


function FileUpload() {

    const { getAccessTokenSilently } = useAuth0();

    const onDrop = async (files) => {
        files.forEach(async (file) => {
            try {
                // Get the pre-signed URL
                const apiUrl = process.env.REACT_APP_UPLOAD_ENDPOINT;
                const token = await getAccessTokenSilently({
                  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                  scope: "read:current_user",
                });
                console.log('token ', token)
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json', // Ensure the server expects JSON
                      'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                      fileName: file.name,
                      fileType: file.type
                    })
                });

                console.log(response)

                const data = await response.json(); 
                const url = data.url
                // Upload the file to the pre-signed URL
                const options = {
                    headers: {
                        'Content-Type': file.type
                    }
                };

                await axios.put(url, file, options);
                console.log('File successfully uploaded');
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        });
    };

    return (
      <div className="file-upload-container">
          <Dropzone onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone">
                      <input {...getInputProps()} />
                      <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
              )}
          </Dropzone>
      </div>
    );
}

export default FileUpload;