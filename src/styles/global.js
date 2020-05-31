import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  a{
    text-decoration:none;
    color: inherit;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }

  h1, h2, h3, p {
    color: ${props => props.theme.palette.text}
  } 

  .rdw-editor-wrapper {
    border: 1px solid ${props => props.theme.palette.background} !important;
    border-radius: 5px;
    padding: 3px;
  }

  .react-datepicker-wrapper{
    display: flex;
  }

  .MuiInput-underline{
    border: none;
  }

  .MuiInput-underline:before, .MuiInput-underline:after{
    border: none !important;
  }
`;