import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoctails = createAsyncThunk(
    'coctails/fetchCoctails',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://62fa44183c4f110faa957f3f.mockapi.io/v1/Cards');               
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

export const coctailsSlice = createSlice({
    name: 'coctails',
    initialState: {
        coctails: [],
        coctailsFiltered: [],
        status: null,
        error: null,
    },
    reducers: {
        filteredCoctails: (state, action) => {
            state.coctails = state.coctailsFiltered.filter (item => item.name.toLowerCase().includes(action.payload));            
        },
        categoryAll: (state) => {
            state.coctails = state.coctailsFiltered;
        },
        categoryNew: (state) => {
            state.coctails = state.coctailsFiltered.filter(item => item.new === 'new');                        
        },
        categorySweet: (state) => {
            state.coctails = state.coctailsFiltered.filter(item => item.sweet === 'sweet');            
        },
        categoryTop: (state) => {
            state.coctails = state.coctailsFiltered.filter(item => item.rating >= 4);            
        },
        categoryStrong: (state) => {
            state.coctails = state.coctailsFiltered.filter(item => item.procent >= 25);            
        },
    },
    extraReducers: {
        [fetchCoctails.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCoctails.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.coctails = action.payload; 
            state.coctailsFiltered = action.payload;
        },
        
        [fetchCoctails.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    },
});

export const { filteredCoctails, categoryAll, categoryNew, categorySweet, categoryTop, categoryStrong } = coctailsSlice.actions;

export const selectCoctails = (state) => state.coctails;

export default coctailsSlice.reducer;