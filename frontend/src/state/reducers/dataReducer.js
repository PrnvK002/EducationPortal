import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../axios';

export const getSubjects = createAsyncThunk(
    'subject/fetch',
    async (_,{ rejectWithValue }) => {
        try{
            const response = await Axios.get('/subject');
            console.log(response.data);
            return response.data;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
);

export const getCourses = createAsyncThunk(
    'courses/fetch',
    async (id,{rejectWithValue}) => {
        try{
            const response = await Axios.get(`/course/${id}`);
            console.log(response.data);
            return response.data;
        }catch(err){
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
)

const dataSlice = createSlice({
    name : 'getData',
    initialState: {
        data : [],
        loading : false,
        error : ''
    },
    extraReducers:{
        [getSubjects.fulfilled] : (state,action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [getSubjects.pending] : (state,action) => {
            state.loading = true;
        },
        [getSubjects.rejected] : (state,action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [getCourses.fulfilled] : (state,action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [getCourses.pending] : (state,action) => {
            state.loading = true;
        },
        [getCourses.rejected] : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default dataSlice.reducer;