import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoctail = createAsyncThunk(
    'coctail/fetchCoctail',
    async function(id, {rejectWithValue}) {
        try {
            const response = await fetch(`https://62fa44183c4f110faa957f3f.mockapi.io/v1/Cards/${id}`);               
            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json(); 
            return data; 
        } catch (error) {
            return rejectWithValue(error.message);            
        }               
    }
);

export const aboutPageSlice = createSlice({
    name: 'coctail',
    initialState: {
        coctail: [],        
        status: null,
        error: null,
    },
    
    extraReducers: {
        [fetchCoctail.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCoctail.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.coctail = action.payload;            
        },
        
        [fetchCoctail.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    },
});

export const selectCoctail = (state) => state.coctail;

export default aboutPageSlice.reducer;