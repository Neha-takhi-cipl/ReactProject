import { injectGlobal } from 'styled-components';
import images from './images';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height:100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #app { 
    min-height: 100%;
    min-width: 100%;
  }
  *{
    box-sizing:border-box;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  } 
  .fullContainer,.TripDashboard{
    background:url(${images.HomeNew});
    background-size: contain;
    background-repeat: repeat;
  }
  button,div,input{
    outline:none;
  }
 .formInput.depart {
    background: url(${images.bag}) no-repeat 100% center #fff;
    padding-right: 37px !important;
    background-size: 32px;
}
.formInputDate.depart {
  background: url(${images.bag}) no-repeat 100% center #fff;
  padding-right: 37px !important;
  background-size: 32px;
}
 .formInput.location {
    background: url(${images.location}) no-repeat 100% center #fff;
    padding-right: 37px !important;
    background-size: 23px;
  }
  .fullContainer,.homeCover{
    background:url(${images.homeBg});
    background-size:45%;
    background-repeat:repeat;
    height:100%;
    overflow-y: auto;
  }
  .BackArrow img{
    width: 32px;
    height: 32px;
  }
  .bm-cross-button{
    background: url(${images.MobBack}) no-repeat 100% center;
    text-indent: -9999px;
    background-size: 32px;
    width: 32px !important;
    height: 32px !important;
    margin: 10px 0 0 15px;
  }
  .bm-burger-button{
    position:absolute !important;
  }
  .cpitalize {
    text-transform: capitalize;
  }
  @-moz-document url-prefix() {
  .Roaming_step1 .formField .inputTypeOne.desktop,
   .Roaming_step1 .formField .inputTypeOne.mobile .innerSelect {
      -moz-appearance:none;
      background: transparent url(${images.dropDown}) no-repeat 90% center;
      padding-right:40px;
      background-size: 7%;
    
  }
} 
.info,.warning{
  text-transform: capitalize;
  padding:5px 0;
}
.warning{
  color: rgb(241,58,58);
}
.info{
  color: green;
}
.hide{
  display: none;
}
.clearBoth{
  clear: both;
}
.fullwidth{
  width: 100%;
  float: left;
}
`;
