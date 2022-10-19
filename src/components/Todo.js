import React from 'react'

const Todo = () => {
    return (
        <>
            <div className='container'>
                <p className='text-center fs-2'>🙌 Todo Project 🙌</p>
                <p className='text-center fs-3 mt-2'>Add Items</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="✍️ Add Items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-success" type="button" id="button-addon2">Add</button>
                </div>

                <div className="card py-0 my-1">
                        <div className="card-body input-group py-1">
                            <p className="mx-auto card-title">Card title</p>
                            <button type="button" className="mx-1 btn btn-sm btn-outline-success">Update</button>
                            <button type="button" className="btn btn-sm btn-outline-success">Delete</button>
                        </div>
                </div>

                <div className="card py-0 my-1">
                        <div className="card-body input-group py-1">
                            <p className="mx-auto card-title">Card title</p>
                            <button type="button" className="mx-1 btn btn-sm btn-outline-success">Update</button>
                            <button type="button" className="btn btn-sm btn-outline-success">Delete</button>
                        </div>
                </div>

                <div className="card py-0 my-1">
                        <div className="card-body input-group py-1">
                            <p className="mx-auto card-title">Card title</p>
                            <button type="button" className="mx-1 btn btn-sm btn-outline-success">Update</button>
                            <button type="button" className="btn btn-sm btn-outline-success">Delete</button>
                        </div>
                </div>

                <div className='text-center my-3'>
                    <button type="button" className="mx-auto btn btn-outline-success">Check List</button>
                </div>
            </div>
        </>
    )
}

export default Todo
