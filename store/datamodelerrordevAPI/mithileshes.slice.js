import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_mithilesh_list = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_list",
  async payload => {
    const response = await apiService.api_v1_mithilesh_list(payload)
    return response.data
  }
)
export const api_v1_mithilesh_create = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_create",
  async payload => {
    const response = await apiService.api_v1_mithilesh_create(payload)
    return response.data
  }
)
export const api_v1_mithilesh_retrieve = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_retrieve",
  async payload => {
    const response = await apiService.api_v1_mithilesh_retrieve(payload)
    return response.data
  }
)
export const api_v1_mithilesh_update = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_update",
  async payload => {
    const response = await apiService.api_v1_mithilesh_update(payload)
    return response.data
  }
)
export const api_v1_mithilesh_partial_update = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_partial_update",
  async payload => {
    const response = await apiService.api_v1_mithilesh_partial_update(payload)
    return response.data
  }
)
export const api_v1_mithilesh_destroy = createAsyncThunk(
  "mithileshes/api_v1_mithilesh_destroy",
  async payload => {
    const response = await apiService.api_v1_mithilesh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mithileshesSlice = createSlice({
  name: "mithileshes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_mithilesh_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_mithilesh_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_mithilesh_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_mithilesh_list,
  api_v1_mithilesh_create,
  api_v1_mithilesh_retrieve,
  api_v1_mithilesh_update,
  api_v1_mithilesh_partial_update,
  api_v1_mithilesh_destroy,
  slice: mithileshesSlice
}
