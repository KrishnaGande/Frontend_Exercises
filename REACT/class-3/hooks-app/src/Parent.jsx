import React from 'react'
import Counter from './Counter'

function ParentCounter(){
    return <div>
        <Counter index={1} value={2}/>
        <Counter index={2} value={3}/>
        <Counter index={3} value={4}/>
    </div>
}

export default ParentCounter;