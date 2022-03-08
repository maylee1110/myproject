import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let [글제목, 글제목변경] = useState(['남자코트추천', '우동맛집']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [popup, popup변경] = useState(false)

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경(newArray);
  }


  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발BLOG</div>
        <div onClick={() => { popup변경(true) }}>🎁</div>
      </div>


      <div className='list'>
        <h4 onClick={() => { modal변경(true) }}>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>🧡</span>{따봉}</h4>
        <p>2월 17일발행</p>
        <hr />

        <button onClick={() => { 제목바꾸기() }}>여자코트추천</button>
      </div>

      {
        modal === true
          ? <Modal />
          : null
      }


      {
        popup === true
          ? <PopUp />
          : null
      }

    </div>

  );
}


function Modal() {
  return (

    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>


  )
}

function PopUp() {
  return (

    <div className='popup' >
      <ul>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </ul>
    </div>

  )
}



export default App;
