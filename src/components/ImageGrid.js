import React from 'react'
import useFirestore from '../custom-hooks/useFirestore'
import {motion} from 'framer-motion'
import {projectFirestore} from '../firebase/config'

const ImageGrid=({setSelectedImg})=>{
    const {docs}=useFirestore('images')
    console.log(docs)
    
    return(
        <div className="img-grid">
        {docs && docs.map(doc=>(
            <motion.div className="img-wrap" key={doc.id}
            whileHover={{opacity:1}}
            layout
            //for modal
            onClick={()=>setSelectedImg(doc.url)}>
            
            <motion.img src={doc.url} alt="uploaded image"
             initial={{opacity:0.1}}
             animate={{opacity:1}}
             transition={{delay:1}} />
            <button className="delete-button" onClick={()=>{
                projectFirestore.collection('images').doc(doc.id).delete().then(()=>{
                    setSelectedImg(null)
                    alert("Pic being deleted")

                })
            }}>Remove</button>
            </motion.div>
           
        ))}
        
        </div>
    )
}

export default ImageGrid