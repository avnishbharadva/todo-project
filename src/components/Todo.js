import React, { useState } from 'react'

const Todo = () => {

    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])

    const addData = () => {
        if (!inputData) {
            alert("pls fill input field")
        }
        else {
            const newData = {
                id : new Date().getTime().toString(),
                name : inputData
            }
            setItems([...items, newData])
            setInputData("")
        }
    }

    const deleteItem = (did) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== did
        })
        setItems(updatedItems)
    }
    return (
        <>
            <div className='container'>
                <p className='text-center fs-2'>🙌 Todo Project 🙌</p>
                <p className='text-center fs-3 mt-2'>Add Items</p>
                <div className="input-group mb-3">
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} className="form-control" placeholder="✍️ Add Items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" onClick={addData} type="button" id="button-addon2">Add</button>
                </div>

                {
                    items.map((curElem) => {
                        return (
                            <div className="card py-0 my-1" key={curElem.id}>
                                <div className="card-body input-group py-1">
                                    <p className="mx-auto card-title">{curElem.name}</p>
                                    <button type="button" className="mx-1 btn btn-sm btn-outline-success">Update</button>
                                    <button type="button" className="btn btn-sm btn-outline-success" onClick={() => deleteItem(curElem.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='text-center my-3'>
                    <button type="button" className="mx-auto btn btn-outline-success">Check List</button>
                </div>
            </div>
        </>
    )
}

export default Todo
