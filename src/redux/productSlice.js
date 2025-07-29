import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products")
  const data = response.data
  return data.products
})

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filteredItems: [],
    loading: false,
    error: null,
    searchQuery: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      // Filter products based on search query
      if (action.payload === "") {
        state.filteredItems = state.items
      } else {
        state.filteredItems = state.items.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase()),
        )
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
        state.filteredItems = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setSearchQuery } = productSlice.actions
export default productSlice.reducer
