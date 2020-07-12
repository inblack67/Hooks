import React, { memo } from 'react'
import countRerenders from '../utils/countRerenders'

const UseCallback = ({ increment }) => {

    countRerenders();

    return (
        <div className='input-field'>
            <button onClick={e => increment(5)} className="btn green">
                counter++
            </button>
        </div>
    )
}

export default memo(UseCallback);
