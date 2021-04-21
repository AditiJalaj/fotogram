
import {useState,useEffect} from 'react'
import {projectStorage,projectFirestore,timestamp} from '../firebase/config'

const useStorage=(file)=>{
    const [progress,setProgress]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)
   

    useEffect(()=>{
        const storageRef=projectStorage.ref(file.name)
        const collectionRef=projectFirestore.collection('images')
        


        storageRef.put(file).on('state_changed',(snapshot)=>{
            let percentage=(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
        },(error)=>{
            setError(error)
        },async()=>{
            const url=await storageRef.getDownloadURL()
            collectionRef.add({url:url,createdAt:timestamp()})
            setUrl(url)
        }
        )

        // const deletefromFirebase=(url)=>{
        //     let pictureRef=projectStorage.refFromURL(url);
        //     pictureRef.delete().then(()=>{
        //         setDocs(docs.filter((doc)=>doc!==url))
        //         alert("picture is deleted successfully")
        //     }).catch((err)=>{
        //         console.log(err)
        //     })
        // }
        

    },[file])
    return {progress,url,error}
}

export default useStorage

   