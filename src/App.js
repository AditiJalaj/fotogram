import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import {useState} from 'react'
import {projectStorage} from './firebase/config'

function App() {
  const [selectedImg, setSelectedImg]=useState(null)
  const [url,setUrl]=useState(null)
  const [docs,setDocs]=useState([])

  const deletefromFirebase=(url)=>{

    let pictureRef=projectStorage.refFromURL(url);
    pictureRef.delete().then(()=>{
        setDocs(docs.filter((doc)=>doc!==url))
        alert("picture is deleted successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

    return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} deletefromFirebase={deletefromFirebase}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
