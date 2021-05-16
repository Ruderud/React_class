import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '몬드 고기 맛집(몬고맛)'; //제목데이터를 여기처럼 변수에 저장할 수도 있지만, state라는 방법을 이용해서 별도로 저장할수있음  (안바뀔만한 데이터는 이렇게 해도 상관없음)
  let postsStyle = {color:'powderblue', fontSize : '30px' }
  // document.getElementById().innerHTML = '대충내용'?   -> 원래 html은 이런식으로 데이터 바인딩을 했음

  // var [a,b] = [19,100]  ES6 destructuring 문법
  let [글제목, 글제목변경] = useState(['몬드 술집 추천', '몬드 식당 추천']); //state 형식으로 데이터를 저장했음. 문자, 숫자, object, array다 가능함
  //이렇게 하는 이유는 웹이 app처럼(웹엡) 동작하게 만들고 싶어서임. "자주바뀌고"+중요한 내용은 state추천

  
  //숙제1
  let [글제목2, 글제목변경2] = useState('리월 술집 추천');
  let [글제목3, 글제목변경3] = useState(['몬드 특산품','리월 특산품']);
  let [글제목4, 글제목변경4] = useState('츄츄족의 눈물의 댄스타임');


  return (  //여기다가 그냥 쌩으로 html'처럼' 작성해도된다. 엄연히는 JSX라고한다.
    <div className="App">
      <div className="black-nav">
        <div style={ postsStyle }>{posts} 블로그</div>
      </div>
      <div className="list">
        <h3> { posts }</h3>
        <h3> { 글제목[1] }</h3>  {/* state를 가져와서 쓰면, state에 저장된 데이터가 변경되면 html이 자동으로 재렌더링된다는 장점이 있음(변수로 사용하면 새로고침을 해야함) */}
        <p>5월 16일 15시 50분 작성</p>
        <hr/>

        <h3> { 글제목2 }</h3>
        <p>5월 16일 15시 53분 작성</p>
        <hr/>

        <h3> { 글제목3[1] }</h3>
        <p>5월 16일 15시 54분 작성</p>
        <hr/>

        <h3> { 글제목4 }</h3>
        <p>5월 16일 15시 55분 작성</p>
        <hr/>

      </div>
    </div>
  );
}
//리엑트는 데이터 바인딩(=데이터를 HTML에 꽂아넣는것)이 엄청 쉬움
//어디든지 그냥 중괄호를 이용하면 다 때려박을수있다고 생각하면댐
export default App;
