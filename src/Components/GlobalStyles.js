import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:#fff;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color:#fff;
        padding-top:50px;
    }
    
`;

export default GlobalStyles;
