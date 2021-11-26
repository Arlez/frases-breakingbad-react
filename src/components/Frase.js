import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    max-width: 800px;
    background-color: #fff;

    @media (min-width: 768px){
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            top: -2rem;
            left: -1rem;
            position: absolute;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        margin-top: 2rem;
        color: #666;
    }
`;

const Frase = ({frase}) => {

    if(Object.keys(frase).length === 0){
        return null;
    };

    const {quote, author} = frase;

    return ( 
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p> - {author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;