import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


const MoleContainer= (props)=>{
    let [input, setInput] =useState(false)

    const handleClick= (e) => {
        props.setScore(props.score +1)
        setInput(false)
    }
    let displayMole = input? <Mole setScore={props.setScore} toggle={setInput} handleClick={handleClick} /> : <EmptySlot toggle={setInput} />

    return(
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>

    )
}

export default MoleContainer

