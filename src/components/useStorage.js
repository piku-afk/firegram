import { useState, useEffect } from 'react';
import { projectStorage, projectDatabase, timeStamp } from '../firebaseConfig'

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectDatabase.collection('images')

    storageRef.put(file).on('state_changed', 
    (snap) => {
      const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    },  
    (err) => {
      setError(err);
    },
    () => {
      storageRef.getDownloadURL()
        .then( url => {
          setUrl(url);
          const createdAt = timeStamp();
          collectionRef.add({
            url,
            createdAt,
            name: file.name
          });
        });
    }
    );
  }, [file]);

  return { progress, url, error };
}

export default useStorage;