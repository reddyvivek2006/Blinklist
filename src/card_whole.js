import React from 'react'
import img1 from './img1.png'
import {useEffect,useState} from 'react';

function Card_whole() {


    useEffect(() => {
        fetchItems();
    }, [])
    const fetchItems=async()=>{
        const data=await fetch('https://restcountries.eu/rest/v2/all');
            
        const item=await data.json();
        console.log(item)
    }

    return (
        <div>
            
            <img  alt=" " src={img1}></img>
            
        </div>
    )
}

export default Card_whole
