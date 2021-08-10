import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from "./BookCard";

function Finished(props) {
    const state=useSelector((state)=>(state.books))
    return (
        <div>
           { state.finished.map(item=><BookCard book={item}/>)}
        </div>
    )
}

export default Finished
