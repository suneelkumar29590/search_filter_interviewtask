import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const userDetails = [
    {
        uniqueno: 1,
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ys_jagan.png",
        name: "ys.jagan",
        roll: "young cm"
    },
    {
        uniqueno: 2,
        imageurl: "https://media.licdn.com/dms/image/C5603AQF7GqUZZFskGQ/profile-displayphoto-shrink_800_800/0/1516969228369?e=2147483647&v=beta&t=zqGiyRTnyWLAqZ1FXrWwrCH13nsjhxdVNGHag9Vg1ks",
        name: "chandhra babu nadiu",
        roll: "cm"
    },
    {
        uniqueno: 3,
        imageurl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png",
        name: "modi",
        roll: "prime minster"
    },
    {
        uniqueno: 4,
        imageurl: "https://cdn.123telugu.com/content/wp-content/uploads/2014/11/chiranjivi.jpg",
        name: "chiranjivi",
        roll: "actor"
    }

]




const Fillter = () => {
    const navigate=useNavigate()
    const [usertext, setusertext] = useState("");
    const [userlist, setuserlist] = useState(userDetails)
    const onChangeText = (event) => {
        setusertext(event.target.value)
        const fillterCheifs = userDetails.filter((each) =>
            each.name.toLowerCase().includes(event.target.value.toLowerCase())
        )

        setuserlist(fillterCheifs)

    }
    console.log(usertext)
    console.log(userlist)

    const DeleteUser = uniqueno => {
        const removeItem=userlist.filter(each=>each.uniqueno !==uniqueno)
        setuserlist(removeItem)


    }

    const firstpage=()=>{
        navigate("/")
    }


    return (
        <div>
            <div>
                <div className="text-center">
                    <h1 >UserList</h1>
                    <input type="search" onChange={onChangeText} value={usertext} />
                </div>

                {

                    userlist.map((each) => (
                        <div className="text-center" key={each.uniqueno}>
                            <img src={each.imageurl} width={120} />
                            <h3>{each.name}</h3>
                            <h3>{each.roll}</h3>
                            <h3>{each.uniqueno}</h3>
                            <button  onClick={() => DeleteUser(each.uniqueno)}>Delete</button>
                        </div>
                    ))
                }



            </div>

<button className="btn btn-danger" onClick={firstpage}>Done&move to first task</button>

        </div>
    )


}

export default Fillter;