import React, { useRef } from 'react'

const Ref = () => {

    const nameRef = useRef();

    const onClick = e => {
        console.log(nameRef.current);
        nameRef.current.focus();
    }

    return (
        <div>
            <div className="input-field">
                <input ref={nameRef} type="text"/>
                <label>Name</label>
            </div>
            <button onClick={onClick} className="btn red">
                Focus
            </button>
        </div>
    )
}

export default Ref
