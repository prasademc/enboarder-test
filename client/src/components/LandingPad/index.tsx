import React from 'react'
import { LandingPad } from "../../interface";

export default function LandingPad(dataObj:object):JSX.Element {
    return (
        dataObj ?
        <div style={{margin: '10px'}}>
            {JSON.stringify(dataObj, undefined, 4)}
        </div>
        : <div>No data to display</div>
    )
}