// slice(액션+슬라이스 통합본) 생성한다.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/dist/client/image';

import dummy1 from '@/assets/images/dummyImg/dummy1.jpeg'
import dummy2 from '@/assets/images/dummyImg/dummy2.jpeg'
import dummy3 from '@/assets/images/dummyImg/dummy3.jpeg'
import dummy4 from '@/assets/images/dummyImg/dummy4.jpeg'

// initalState 타입 정의
export type StateType = {
  cardImg: string | StaticImageData,
  title:string,
  text:string,
  writeDate:string,
  numberOfComments:number,
  profileImg: string | StaticImageData,
  nickname:string,
  numberOfLike:number
};

// initalState 생성
const initialState: StateType[] = [
    {
      "cardImg": dummy1,
      "title": "객체지향이란?",
      "text": "지금껏 객체지향 이라는 키워드는 수없이 들어왔고, 객체지향을 잘 이해했다고 생각하며 학습을 해왔던 것 같습니다. 대학교 수업시간에 배워왔던 객체지향관련 수업을 듣고 이런게 객체지향이라는건가? 라는 착각만 가득했었죠. 평상시 학습해왔던 것들은 큰 오해를 가지고 학습했었던 겁니다.이번 기회에 진짜 객체지향이란 무엇인지 명확히 설명할 수있는 수준은 아니지만, 적어도 객체지향적인 접근이란 무엇이며, 많은 사람들이 오해할 수 있는 객체지향이란 무엇인지를 포스팅하며 제 포스팅을 보시는 분들과 공유하고자 합니다.",
      "writeDate": "2023년 2월 1일",
      "numberOfComments": 10,
      "profileImg": dummy1,
      "nickname": "subin",
      "numberOfLike": 30,
    },
    {
      "cardImg": dummy2,
      "title": "카드 꾸미기",
      "text": "같이 카드나 꾸며보시져. 같이 카드나 꾸며보시져",
      "writeDate": "2023년 2월 6일",
      "numberOfComments": 5,
      "profileImg": dummy2,
      "nickname": "bin",
      "numberOfLike": 15
    },
    {
      "cardImg": dummy3,
      "title": "디자인 시스템 혼자서도 만들수 있다 !",
      "text": "호환이 되는 최소단위의 컴포넌트를 잘 만들어서, 그 컴포넌트를 연결, 연결하는 것만으로도 하나의 서비스를 만들 수 있는거죠. 하지만 직접 코드를 짜보면 레고처럼 컴포넌트를 만드는게 말처럼 쉽지는 않습니다. 왜이렇게 어려울까요?",
      "writeDate": "2023년 2월 3일",
      "numberOfComments": 0,
      "profileImg": dummy3,
      "nickname": "day23",
      "numberOfLike": 8
    },
    {
      "cardImg": dummy4,
      "title": "이건 물경력일까 불경력일까?",
      "text": "따라서 물경력이란 직무에 대해 변별력이 없는 경력이라 볼 수 있다. 의미를 좀 더 풀어서 설명하면 아래 요소들이 있을 것 같다. 이직할 때 인정을 받지 못할 경력 누구나 할 수 있는 사무보조, 잡무 등의 반복으로 내세울 만한 것이 없는 경력 성과가 없는 경력 성장이 정체된 경력",
      "writeDate": "2023년 1월 9일",
      "numberOfComments": 2,
      "profileImg": dummy4,
      "nickname": "nib",
      "numberOfLike": 10
    },
];

// 슬라이스생성
export const dummySlice = createSlice({
  name: 'dummyData',
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    geDummyData: (state: StateType[], action: PayloadAction<StateType>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state
      console.log('리듀서',state)
    },
  }
});

// 액션을 export 해준다.
export const { geDummyData } = dummySlice.actions;

// 슬라이스를 export 해준다.
export default dummySlice;