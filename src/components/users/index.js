import Userdetails from "../userdetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const userDetails =[
    {
        uniqueno:1,
        imageurl:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png',
        name:'Rohit',
        role:'opener'
    },
    {
        uniqueno:2,
        imageurl:'https://images.news18.com/ibnlive/uploads/2023/01/shubman-gill-century-odi-ap.jpg',
        name:'Gill',
        role:'opener'
    },
    {
        uniqueno:3,
        imageurl:'https://c.ndtvimg.com/2023-05/cnhq30fo_virat-kohli-afp_625x300_12_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605',
        name:'Virat',
        role:'Captain'
    },
    {
        uniqueno:4,
        imageurl:'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg',
        name:'Dhoni',
        role:'Keeper'
    },
    {
        uniqueno:5,
        imageurl:'https://assets.thehansindia.com/h-upload/2022/07/10/1302163-bhuvneshwar-kumar.webp',
        name:'Bhuvi',
        role:'Bowler'
    }
]

const Users=()=>{

    const navigate=useNavigate();

    const [usertext,setusertext] =useState('');
    const [userslist,setuserslist]=useState(userDetails);

    const onChangeusertext=(event)=>{
        setusertext(event.target.value)
        const filteredList=userDetails.filter((each)=>
        each.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setuserslist(filteredList)
    }
    console.log(usertext);
    console.log(userslist);

    const onDeleteUser =uniqueno=>{
        const removedItemList=userslist.filter(each=>each.uniqueno !==uniqueno)
        setuserslist(removedItemList)
    }

    const navigatenext=()=>{
        navigate("/resize")
    }
    return(
        <div>
            <h1>Users list</h1>
            <input type="search" value={usertext} onChange={onChangeusertext}/>
            <ul>
                {
                    userslist.map((each)=>(
                        <Userdetails 
                        eachuserdetails={each}
                        key={each.uniqueno}
                        onDelete={onDeleteUser}
                        
                        />
                    ))
                }
            </ul>
            <button className="btn btn-success" onClick={navigatenext}>next task</button>
           
        </div>
    )
}

export default Users;