// import {useState} from 'react';

/* eslint-disable react/prop-types */
export default function Resume({personInfo,handleEdit}){
    return (
        <>
            <div>{personInfo.name}</div>
            <button onClick={handleEdit}>Edit</button>
        </>
        )
    }
