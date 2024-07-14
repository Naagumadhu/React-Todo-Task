import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Edit({ data, setData, editCardId, setEditCardId }) {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const todo = data.find(item => item.id === editCardId);
        if (todo) {
            setTitle(todo.title);
            setDescription(todo.description);
        }
    }, [editCardId, data]);

    const handleEditSubmit = () => {
        const updatedData = data.map((item) => {
            if (item.id === editCardId) {
                return {
                    ...item,
                    title,
                    description
                };
            }
            return item;
        });
        setData(updatedData);
        setEditCardId(null);
    };

    return  <>
            <div className="container mt-5">
                <div className='row '>
                    <div className='col'>
                        <div className="mb-3 mt-5">
                            <h5 style={{ textAlign: "center" }}> Edit Form</h5>
                            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Edit title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" placeholder="Edit description"></textarea>
                        </div>
                        <button type="button" className="btn btn-dark" onClick={handleEditSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    
}

export default Edit;
