import React from 'react'
import { Capsule } from "../../interface";

export default function CapsuleData(dataArray:Array<Capsule>):JSX.Element {
    return (
        dataArray.length > 0 ?
        <div style={{margin: '10px'}}>
            {JSON.stringify(dataArray, undefined, 4)}
        </div>
        : <div>No data to display</div>
    )
}

