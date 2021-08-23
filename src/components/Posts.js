
import React from 'react'

export default function Posts({posts}) {
    return (
        <div>{posts.map((item)=>
           <h2>{item.fields.name} </h2> )}
            
        </div>
    )
}

import Recipe from "./Recipe";














