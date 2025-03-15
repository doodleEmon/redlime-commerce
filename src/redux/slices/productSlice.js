import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProducts } from '../queries/product';

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetch",
    async () => {
        const products = await getProducts();
        return products;
    })

// export const fetchPostById = createAsyncThunk("products/fetchById",
//     async (id) => {
//         const post = await getPostById(id);
//         return post;
//     })

// export const deletePost = createAsyncThunk("post/deleteById",
//     async (id) => {
//         const post = await deletePostById(id);
//         return post;
//     })

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })


            // .addCase(fetchPostById.pending, (state, action) => {
            //     state.isLoading = true;
            //     state.isError = false;
            // })
            // .addCase(fetchPostById.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.selectedPost = action.payload;
            // })
            // .addCase(fetchPostById.rejected, (state, action) => {
            //     state.isLoading = false;
            //     state.isError = true;
            //     state.error = action.error.message;
            // })
            // .addCase(deletePost.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.posts = state.posts.filter(post => post.id != action.payload.id);
            // })
    }
})
// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;