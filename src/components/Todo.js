import React, { useEffect, useState } from 'react'
import "./Todo.css"

const Todo = () => {

    const getLocalData = () => {
        const lists = localStorage.getItem("mytodolist")

        if (lists) {
            return JSON.parse(lists)
        }
        else {
            return []
        }
    }

    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalData)
    const [updatedItem, setUpdatedItem] = useState("")
    const [toggleBtn, setToggleBtn] = useState(false)

    const addData = () => {
        if (!inputData) {
            alert("pls fill input field")
        }
        else if (toggleBtn && inputData) {
            setItems(
                items.map((curElem) => {
                    if (curElem.id === updatedItem) {
                        return { ...curElem, name: inputData }
                    }
                    return curElem
                })
            )
            setInputData("")
            setUpdatedItem("")
            setToggleBtn(false)
        }
        else {
            const newData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newData])
            setInputData("")
        }
    }

    const editItem = (did) => {
        const itemForUpdate = items.find((curElem) => {
            return curElem.id === did
        })

        setInputData(itemForUpdate.name)
        setUpdatedItem(did)
        setToggleBtn(true)

        document.getElementById('userinput').focus()
    }

    const deleteItem = (did) => {
        const updatedItems = items.filter((curElem) => {
            return curElem.id !== did
        })
        setItems(updatedItems)
    }

    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className='container'>
                <p className='text-center fs-2 txtcol mt-3'>🙌 Todo Project 🙌</p>
                <p className='text-center fs-3 mt-2 txtcol'>Add Items</p>
                <div className="input-group mb-3 mx-auto setwidth">
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} className="form-control" id='userinput' placeholder="✍️ Add Items" aria-label="Recipient's username" aria-describedby="button-addon2" />

                    {
                        toggleBtn ? <button className="btn btn-outline-info" onClick={addData} type="button" id="button-addon2">Update</button> : <button className="btn btn-outline-info" onClick={addData} type="button" id="button-addon2">Add</button>
                    }

                </div>

                {
                    items.map((curElem) => {
                        return (
                            <div className="card py-0 my-1 setwidth mx-auto" key={curElem.id}>
                                <div className="card-body input-group py-1">
                                    <p className="mx-auto card-title">{curElem.name}</p>
                                    <button type="button" className="mx-1 btn btn-sm btn-outline-primary" onClick={() => editItem(curElem.id)}>Edit</button>
                                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteItem(curElem.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }

                <div className='text-center my-3'>
                    <button type="button" className="mx-auto btn btn-outline-info" onClick={() => setItems([])}>Check List</button>
                </div>
            </div>
        </>
    )
}

export default Todo
