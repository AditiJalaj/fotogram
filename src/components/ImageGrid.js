import React from 'react'
import useFirestore from '../custom-hooks/useFirestore'
import {motion} from 'framer-motion'


const ImageGrid=({setSelectedImg,deletefromFirebase})=>{
    const {docs}=useFirestore('images')
    console.log(docs)
    
    return(
        <div className="img-grid">
        {docs && docs.map(doc=>(
            
            <motion.div className="img-wrap" key={doc.id}
            whileHover={{opacity:1}}
            layout
            onClick={()=>setSelectedImg(doc.url)}>

            <button className="delete-button" 
            onClick={()=>deletefromFirebase(doc.url)} >
            X
           </button>

            <motion.img src={doc.url} alt="uploaded image"
             initial={{opacity:0.1}}
             animate={{opacity:1}}
             transition={{delay:1}} />
            
            </motion.div>
           
        ))}
        
        </div>
    )
}

export default ImageGrid