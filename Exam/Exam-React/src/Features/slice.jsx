import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getdat = createAsyncThunk("getdata", async () => {
    const res = await axios.get("http://localhost:3000/user");
    return res.data;
});


export const addProduct = createAsyncThunk("addProduct", async (product) => {
    const res = await axios.post("http://localhost:3000/user", product);
    return res.data;
});


export const editProduct = createAsyncThunk("editProduct", async (product) => {
    const res = await axios.put(`http://localhost:3000/user/${product.id}`, product);
    return res.data;
});


export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
    await axios.delete(`http://localhost:3000/user/${id}`);
    return id;
});


export const slic = createSlice({
    name: "Fetchdata",
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getdat.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(editProduct.fulfilled, (state, action) => {
                const index = state.data.findIndex(item => item.id == action.payload.id);
                if (index != -1) {
                    state.data[index] = action.payload;
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.data = state.data.filter(item => item.id != action.payload);
            });
    }
});

export default slic.reducer;