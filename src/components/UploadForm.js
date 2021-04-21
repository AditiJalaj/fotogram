import React, {useState}  from 'react'
import ProgressBar from './ProgressBar'

const UploadForm=()=>{
    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)
    const allowedTypes=["image/jpeg","image/png"]

    const changeHandler=(e)=>{
        let selected=e.target.files[0]

        if(selected && allowedTypes.includes(selected.type)){
            setFile(selected)
            setError('')
        }
        else{
            setFile(null)
            setError("Please select a jpeg/png file only")
        }
    }

    return(
        <form>
        <label> 
        <input type="file" onChange={changeHandler}></input>
        <span>+</span>
        </label>
        <div className="output">
        <div className="error">{error}</div>
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} /> } 
        </div>
        </form>
    )
}

export default UploadForm