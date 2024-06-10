import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HelloComponent';


// การสร้าง Component 
// function HelloComponent(){
//   return <h1>สวัสดี Component ครับผม</h1>
// }

// การสร้าง Class Component 
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>สวัสดี Component แรกของเราครับผม</h1>
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<HelloComponent />*/}
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
