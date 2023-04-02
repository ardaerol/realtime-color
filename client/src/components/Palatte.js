import {useState} from 'react'
import { send } from '../socketApi'
function Palatte({activeColor}) {
  const [color, setColor] = useState('#000')

  return (
    <div className='palette'>
        <input 
        type={'color'} 
        value={activeColor} 
        
        onChange={(e) => setColor(e.target.value)}>
        </input>

        <button onClick={() => send(color)}>click</button>
        {color}
    </div>
  )
}

export default Palatte