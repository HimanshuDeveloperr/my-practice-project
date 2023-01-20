import React ,{useState}from "react";

const UserForm=()=>{
    const[entereName,SetEntereName]=useState("")
    const[enteredAge,SetEnteredAge]=useState("")
    const[items,setitems]=useState([])

    const NameHandler=(event)=>{
    
        SetEntereName(event.target.value)
    }

    const AgeHandler=(event)=>{
        
        SetEnteredAge(event.target.value)
    }

    const SubmitHandler=(event)=>{
        event.preventDefault()
        setitems((oldItems)=>[
            ...oldItems,entereName,enteredAge

        ]
        )
        
        SetEntereName("")
        SetEnteredAge("")
    }


    return(
        <div>

            <form onSubmit={SubmitHandler}>
                <div>
                 <label>User Name</label>
                <input type="text" onChange={NameHandler}/>
                </div>
                <div>
                 <label>Age(Years)</label>
                <input type="number" onChange={AgeHandler} />
                </div>
                <button type="submit">Add user</button>
            </form>
                <div>
                    <ul>
                        {items.map((items,i)=>(
                            <li key={i}>{items}</li>
                        ))}
                    </ul>
                </div>
        </div>
    )
}

export default UserForm;