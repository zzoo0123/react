/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 리액트의 데이터 저장공간 state 만드는 법

  // state
  // 1. 변수 대신 쓰는 데이터 저장 공간
  // 2. useState() 이용해 만들어야 함
  // 장점: 웹이 app처럼 동작하게 만들고 싶음
  // state 변경 -> HTML 자동을 재렌더링(새로고침 없이)
  // 자주 바뀌는 중요한 데이터를 별루 말고 state로 저장해서 사용

  // var [a,b] = [10, 100];
  // [state 데이터, state 데이터 변경 함수]
  let [title, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let posts = '강남 고기 맛집'
  let [따봉, 따봉변경] = useState(0);

  function 제목바꾸기() {
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  return (
    <div className="App">
      {/*  태그에 클래스 주고 싶으면 -> <div className="클래스명"></div> */}
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍🏻</span>{ 따봉 }</h3>
        <p>1월 29일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>1월 29일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>1월 29일 발행</p>
        <hr/>
      </div>

      <Modal />
      {/* <Modal></Modal> */}
    </div>
  );
}

// Componenet
// 1. 반복 출현하는 HTML 덩어리들
// 2. 자주 변경된느 HTML UI들
// 3. 다른 페이지 만들 때
// 단점: state 쓸 때 복잡해짐 -> 상위 component에서 만든 state 쓰려면 props 문법 사용
function Modal() {
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
