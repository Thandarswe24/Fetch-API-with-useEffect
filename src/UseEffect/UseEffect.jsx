import React , {useState, useEffect}from 'react';
import styled from 'styled-components';

const Main = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center`;

const H1 = styled.h1`
        color:blue`;

const H2 = styled.h2`
        color:black`;


const UseEffect = () => {

    const [advice, setAdvice] = useState("");
    
    useEffect(() => {
      const url = "https://api.adviceslip.com/advice";

      const fetchData = async()=> {
        const res = await fetch(url);
        const data = await res.json();
        setAdvice(data);
      }
      fetchData();
    }, [])
    
  return (
        <> 
        <Main>
        <H1>fetch api with useEffect</H1>
        <H2>{JSON.stringify(advice)}</H2>
        </Main>
      
        </>
  )
}

export default UseEffect
