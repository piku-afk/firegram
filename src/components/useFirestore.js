import { useState, useEffect } from 'react';
import { projectDatabase } from '../firebaseConfig';

export default function useFirestore(collectionName) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectDatabase.collection(collectionName)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

      return () => {
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
        unsub();
      }
  }, [collectionName]);

  return { docs };
}