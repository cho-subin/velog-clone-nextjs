// 참고한 블로그 : https://curryyou.tistory.com/501
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore, Action } from '@reduxjs/toolkit';
import commentSlice from './slice/commentSlice';
import dummySlice from './slice/dummySlice';

// 리덕스 store 생성함수
const makeStore = () => {
  // 미들웨어 추가(필요 없을 경우 생략)
//   const middleware = getDefaultMiddleware();
//   if (process.env.NODE_ENV === 'development') {
//     middleware.push(logger);
//   }

  // 슬라이스 통합 store 생성
  const store = configureStore({
    reducer: {
      getDummyData: dummySlice.reducer,
      updateCurrent: dummySlice.reducer,
      addLike: dummySlice.reducer,
      removeLike: dummySlice.reducer,
      comment: commentSlice.reducer,
      //   number: numberSlice.reducer
      // [counterSlice.name]: counterSlice.reducer, // 위와 동일한 코드다.
      // [numberSlice.name]: numberSlice.reducer
    },
    //middleware, // 미들웨어 불필요시 생략
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

// store 생성
const store = makeStore();

// store 엑스포트
export default store;

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;

// RootState 엑스포트
export type AppDispatch = typeof store.dispatch;


// 아래와 같이 간단하게 store를 생성해도 된다. 
/*
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), logger]
  devTools: process.env.NODE_ENV === 'development'
});
*/