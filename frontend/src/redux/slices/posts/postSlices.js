import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseURL";
//Create Post action
//action to redirect
const resetPost = createAction("category/reset");

export const createpostAction = createAsyncThunk(
  "post/created",
  async (post, { rejectWithValue, getState, dispatch }) => {
    console.log(post);
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const formData = new FormData();
      formData.append("title", post?.title);
      formData.append("description", post?.description);
      formData.append("category", post?.category?.label);
      formData.append("image", post?.image);

      const { data } = await axios.post(
        `${baseUrl}/api/posts`,
        formData,
        config
      );
      //dispatch action
      dispatch(resetPost());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all posts
export const fetchPostsAction = createAsyncThunk(
  "post/list",
  async (category, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/api/posts?category=${category}`
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);
//fetch Post details
export const fetchPostDetailsAction = createAsyncThunk(
  "post/detail",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/posts/${id}`);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Add Likes to post
export const toggleAddLikesToPost = createAsyncThunk(
  "post/like",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/posts/likes`,
        { postId },
        config
      );

      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Add DisLikes to post
export const toggleAddDisLikesToPost = createAsyncThunk(
  "post/dislike",
  async (postId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/posts/dislikes`,
        { postId },
        config
      );

      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice
const postSlice = createSlice({
  name: "post",
  initialState: {},
  extraReducers: (builder) => {
    //create post
    builder.addCase(createpostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetPost, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(createpostAction.fulfilled, (state, action) => {
      state.postCreated = action?.payload;
      state.loading = false;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createpostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    //fetch posts
    builder.addCase(fetchPostsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostsAction.fulfilled, (state, action) => {
      state.postLists = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch post Details
    builder.addCase(fetchPostDetailsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostDetailsAction.fulfilled, (state, action) => {
      state.postDetails = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //Likes
    builder.addCase(toggleAddLikesToPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(toggleAddLikesToPost.fulfilled, (state, action) => {
      state.likes = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(toggleAddLikesToPost.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
    //DisLikes
    builder.addCase(toggleAddDisLikesToPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(toggleAddDisLikesToPost.fulfilled, (state, action) => {
      state.dislikes = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(toggleAddDisLikesToPost.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default postSlice.reducer;