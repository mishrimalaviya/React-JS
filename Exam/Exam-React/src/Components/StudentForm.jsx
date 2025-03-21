import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct, getdat } from "../Features/slice";

function Form() {
    const [ob, setObj] = useState({ name: "", fathername: "", mothername: "", classid: "", address: "" });
    const dispatch = useDispatch();
    const datas = useSelector((state) => state.slic.data);
    console.log(datas)

    useEffect(() => {
        dispatch(getdat());
    }, [dispatch]);

    function handleChange(e) {
        const { name, value } = e.target;
        setObj({ ...ob, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if ("id" in ob) {
            dispatch(editProduct(ob));
        } else {
            dispatch(addProduct({ name: ob.name, fathername: ob.fathername, mothername: ob.name, fathername: ob.fathername, address: ob.address }));
        }
        setObj({ name: "", fathername: "", mothername: "", classid: "", address: "" });
    }

    function handleEdit(dat) {
        console.log(dat)
        setObj(dat);
    }

    function handleDelete(id) {
        dispatch(deleteProduct(id));
    }

    return (
        <div >
            <h2>Student Detail Form</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="Enter the Student"
                    name="name"
                    value={ob.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the Father's name"
                    name="fathername"
                    value={ob.fathername}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Enter the Mother's name"
                    name="mothername"
                    value={ob.mothername}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the Class Id"
                    name="classid"
                    value={ob.classid}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the Address"
                    name="address"
                    value={ob.address}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{ob.id ? "Update" : "Add"} Product</button>
            </form><br></br><br></br>
            <div>
                <h2>Student Information</h2>
                <div className="">
                    {datas.map((el) => (
                        <div key={el.id} className="border w-25 mt-5" >
                            <h4>{el.name}</h4>
                            <p>{el.fathername}</p>
                            <p>{el.mothername}</p>
                            <p>{el.classid}</p>
                            <p></p>
                            <div>
                                <button onClick={() => handleEdit(el)} className="btn btn-dark">Edit</button>
                                <button onClick={() => handleDelete(el.id)} className="btn btn-secondary ms-2">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            );
}

            export default Form;