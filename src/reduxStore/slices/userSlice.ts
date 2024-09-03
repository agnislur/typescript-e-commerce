// src/reduxStore/slices/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios'; 

export interface User {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  password: string;
}

interface UserState {
  user: User | null;  // Update type to User or null
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isLoggedIn: boolean; // New state to track login status
}

const initialState: UserState = {
  user: null,
  users: [],
  status: 'idle',
  error: null,
  isLoggedIn: false, // Initialize as false
};

// Thunk untuk login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post('/api/session/login', credentials);
    localStorage.setItem('access_token', response.data.data.access_token);
    return response.data; 
  }
);


export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await axios.get('/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  }
);

// Thunk untuk create user
export const createUser = createAsyncThunk(
  'user/createUser',
  async (newUser: { name: string; email: string; phone_number: string; password: string }) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await axios.post('/api/user', newUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; // Sesuaikan jika response berbeda
  }
);

// Thunk for deleting a user
export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (id: string) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No token found');
    }
    await axios.delete(`/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id; // Return the deleted user's ID
  }
);


// Thunk untuk update user
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user: { id: string; name: string; email: string; phone_number: string; password: string }) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await axios.put(`/api/user/${user.id}`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; // Sesuaikan jika response berbeda
  }
);


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'idle';
      state.users = []; // Clear user list on logout
      state.isLoggedIn = false; // Set login status to false
      localStorage.removeItem('access_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.isLoggedIn = true; // Set login status to true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Login failed';
        state.isLoggedIn = false; // Ensure login status is false on failure
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      })
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload); // Tambahkan user baru ke daftar users
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create user';
      })

      // Add delete case to extraReducers
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = state.users.filter(user => user.id !== action.payload);
      })

      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';


        // Update user in the list
        const updatedUser = action.payload;
        state.users = state.users.map(user =>
          user.id === updatedUser.id ? updatedUser : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update user';
      });
      
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
