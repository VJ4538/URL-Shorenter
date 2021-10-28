import React from 'react'
import Title from './Title'

export default function List({
    title, 
    list, 
    className,
    listContainerClass
}) {
    return (
        <div className={listContainerClass}>
            {title&&<Title title={title} size='h4'/>}
            <ul className={className}>
                {list&&list.map((each,idx)=>{
                    let link =each.replace(/ /g,'')
                    return(
                        <li key={idx}>
                            <a href={'#'+link}>{each}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
