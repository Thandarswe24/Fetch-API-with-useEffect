import React, {useState,useEffect} from 'react'
import styled from 'styled-components';


const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       ;`
    
const H1 = styled.h1`
       font-weight:800;
       color:hsl(341, 100%, 64%)`;


const User = () => {

    const [user, setUser] = useState([]);
    
    useEffect(() => {

        fetch( 'https://jsonplaceholder.typicode.com/users')

                .then((res) => res.json())
                
                .then((response) => {
                    console.log(response);
                    setUser(response);
                })  
                .catch(error=>  console.log(error))
     
      
    }, [])
    
    
  return (
    <Main>
        <H1>User Email List</H1>
      <ul> {
            user.map((u,i)=> <li key={i}>{u.email}</li>
                )
        }
    </ul>
       
    </Main>
  )
}

export default User
