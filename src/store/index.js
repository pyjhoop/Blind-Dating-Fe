import { configureStore, createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name: 'user',
    initialState: {
        id: 0,
        nickname : null,
        region : null,
        mbti : null,
        gender : null,
        interests : [],
        selfIntroduction : null,
        accessToken : null
    },
    reducers: {
        changeUser(state, action) {
            state.id = action.payload.id;
            state.nickname = action.payload.nickname;
            state.region = action.payload.region;
            state.mbti = action.payload.mbti;
            state.gender = action.payload.gender;
            state.interests = action.payload.interests;
            state.selfIntroduction = action.payload.selfIntroduction;
            state.accessToken = action.payload.accessToken;
        },
    },
});

export let {changeUser} = user.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
    },
});