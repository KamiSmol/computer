import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SafeArea, TextArea } from 'antd-mobile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <>
      <div style={{ background: '#fff' }}>
        <SafeArea position={"top"} />
      </div>
      <App />
    </> */}
    <div>
      <div style={{ background: '#ace0ff' }}>
        <SafeArea position='top' />
      </div>
      <div><TextArea></TextArea></div>
      <div style={{ background: '#ffcfac' }}>
        <SafeArea position='bottom' />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();