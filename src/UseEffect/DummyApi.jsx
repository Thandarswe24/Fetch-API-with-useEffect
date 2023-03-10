import React, {useState, useEffect} from 'react'
import styled from 'styled-components';


const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       ;`

const H2 = styled.h2`
        font-weight:800;
        color:hsl(341, 100%, 64%)`;

const H3 = styled.h3`
        font-weight:400;
        font-style:italic;
        color:hsl(341, 100%, 64%)`;

const DummyApi = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
      const url = 'https://jsonplaceholder.typicode.com/todos';

      const fetchData = async ()=> {
        try{
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data);
            setTodo(data);
        }catch(error){
            console.log('error',error);
        }
        
      };
      fetchData();
    }, []);

  return (
    <Main>
        <H2>Todo Title</H2>
       
     
        {
            todo.map((t)=> {
                return <H3 key={t.id} >{t.id}{" "}{t.title}</H3>
            })
        }
    
       
           </Main>
    
  )
}

export default DummyApi
