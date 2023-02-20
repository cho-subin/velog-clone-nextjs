// slice(액션+슬라이스 통합본) 생성한다.

import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from "next/dist/client/image";

import DH from "@/assets/images/dummyImg/DHProfile.webp";
import EUN from "@/assets/images/dummyImg/EUNXINProfile.png";
import SB from "@/assets/images/dummyImg/SBProfile.png";
// initalState 타입 정의
export type StateType = {
  cardImg: string | StaticImageData;
  title: string;
  text: string;
  writeDate: string;
  numberOfComments: number;
  profileImg: string | StaticImageData;
  nickname: string;
  profileMsg: string;
  numberOfLike: number;
};

export type DATA = {
  id: string;
  date: string;
  comment: string;
  profile: any;
  title: string;
  postId: string;
}

// initalState 생성
const initialState = {
  datas: [
    {
      postId: "subin",
      title: "객체지향이란?",
      id: "유채찍",
      date: "2023년 11월 2일",
      comment: "요즘 좀 편하지 않나요?",
      profile: DH,
    },
    {
      postId: "bin",
      title: "카드 꾸미기",
      id: "유채찍",
      date: "2023년 02월 19일",
      comment: "ㄴㄴ 수빈님 돈받아서 편해진듯",
      profile: DH,
    },
    {
      postId: "bin",
      title: "카드 꾸미기",
      id: "읂당근",
      date: "2023년 02월 19일",
      comment: "대훈님 지켜주세요",
      profile: EUN,
    },
    {
      postId: "subin",
      title: "객체지향이란?",
      id: "읂당근",
      date: "2023년 02월 19일",
      comment: "그마네 수빈지켜어~",
      profile: EUN,
    },

    {
      postId: "day23",
      title: "디자인 시스템 혼자서도 만들수 있다 !",
      id: "유채찍",
      date: "2023년 02월 19일",
      comment: "한턱 쏠 생각없나요?",
      profile: DH,
    },
    {
      postId: "day23",
      title: "디자인 시스템 혼자서도 만들수 있다 !",
      id: "읂당근",
      date: "2023년 02월 19일",
      comment: "앗.. 그건 좋다",
      profile: EUN,
    },
    {
      postId: "nib",
      title: "이건 물경력일까 불경력일까?",
      id: "유채찍",
      date: "2023년 02월 19일",
      comment: "자리 마련할까요 수빈님?",
      profile: DH,
    },
    {
      postId: "nib",
      title: "이건 물경력일까 불경력일까?",
      id: "조수비어",
      date: "2023년 02월 19일",
      comment: "은형님만 콜입니다.",
      profile: SB,
    },
    {
      postId: "nib",
      title: "이건 물경력일까 불경력일까?",
      id: "읂당근",
      date: "2023년 02월 19일",
      comment: "너무 좋아요~",
      profile: EUN,
    },
  ] as DATA[],
  current: [
    {
      postId: "subin",
      title: "객체지향이란?",
      id: "유채찍",
      date: "2023년 02월 19일",
      comment: "요즘 좀 편하지 않나요?",
      profile: DH,
    },
    {
      postId: "bin",
      title: "카드 꾸미기",
      id: "유채찍",
      date: "2023년 02월 19일",
      comment: "ㄴㄴ 수빈님 돈받아서 편해진듯",
      profile: DH,
    },
  ] as DATA[],
};

// 슬라이스생성
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getComments: (
      state,
      action: PayloadAction<{ title: string; id: string }>
    ) => {
      const { id, title } = action.payload;
      let sortedDatas = state.datas.filter((el) => el.postId === id);
      sortedDatas = sortedDatas.filter((el) => {
        let newTitle = el.title;
        newTitle = newTitle.replace("?", "");
        return newTitle === title;
      });
      state.current = sortedDatas;
    },
    updateComment: (
      state,
      action: PayloadAction<{
        postId: string;
        title: string;
        id: string;
        date: string;
        comment: string;
        profile: any;
      }>) => {
      const updateComment = state.datas.push(action.payload);
      console.log("updateComment", updateComment);
    },
  },
});

// 액션을 export 해준다.
export const { getComments, updateComment } = commentSlice.actions;

// 슬라이스를 export 해준다.
export default commentSlice;
