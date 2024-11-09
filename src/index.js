import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const list1 = React.createElement("li", null, "Thành phố Hà Nội");
const list2 = React.createElement("li", null, "Thành phố Đà Nẵng");
const list3 = React.createElement("li", null, "Thành phố Hải Phòng");
const list4 = React.createElement("li", null, "Thành phố Hồ Chí Minh");
const list5 = React.createElement("li", null, "Thành phố Cần Thơ");

const listMain = React.createElement("ul", null, list1, list2, list3, list4, list5);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(listMain);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
