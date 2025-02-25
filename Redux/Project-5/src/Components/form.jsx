import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct, getdat } from "../Features/Slice";

function Form() {
    const [ob, setObj] = useState({ img: "", title: "", price: "" });
    const dispatch = useDispatch();
    const products = useSelector((state) => state.slic.data);

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
            dispatch(addProduct({ img: ob.img, title: ob.title, price: ob.price }));
        }
        setObj({ img: "", title: "", price: "" });
    }

    function handleEdit(product) {
        setObj(product);
    }

    function handleDelete(id) {
        dispatch(deleteProduct(id));
    }

    return (
        <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            <h2>Product Form</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                    type="text"
                    placeholder="Image URL"
                    name="img"
                    value={ob.img}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the title"
                    name="title"
                    value={ob.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Enter the price"
                    name="price"
                    value={ob.price}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{ob.id ? "Update" : "Add"} Product</button>
            </form>

            <h2>Product List</h2>
            <div>
                {products.map((el) => (
                    <div key={el.id} style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "5px",
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <img 
                            src={el.img || "https://via.placeholder.com/150"} 
                            alt={el.title} 
                            style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "5px" }}
                        />
                        <h4>{el.title}</h4>
                        <p>Price: ${el.price}</p>
                        <div>
                            <button onClick={() => handleEdit(el)} style={{ marginRight: "5px" }}>Edit</button>
                            <button onClick={() => handleDelete(el.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Form;
