
const Userdetails=(props)=>{
    const {eachuserdetails,onDelete}=props
    const {imageurl,role,name,uniqueno}=eachuserdetails
    const onRemoveuser=()=>{
        onDelete(uniqueno);
    }
    return(
        <div>
           <div className="container">
           <div className="row"> 
           <div className="col-md-4"></div>
        <div className="col-md-4 card mb-3 listgrop">    
            <li style={{listStyleType:"none"}}>
                <img src={imageurl} width={100}/>
                <h2>{name}</h2>
                <h2>{role}</h2>
                <button onClick={onRemoveuser}>
                    <img src="https://cdn-icons-png.flaticon.com/512/0/39.png" width={50}/>
                </button>


            </li>
           
            
        </div>
        
        </div>
        </div>
        </div>
    )
}

export default Userdetails;