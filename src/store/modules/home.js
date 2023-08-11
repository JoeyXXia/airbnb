import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services/modules/home'

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  async (payload) => {
    const res = await getHomeGoodPriceData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload
    }
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
