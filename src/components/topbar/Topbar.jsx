import "./topbar.scss";
// import {MailIcon} from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar({menuOpen , setMenuOpen}) {
  return <div className={'topbar ' + (menuOpen && "active")}>

    <div className="wrapper">
      <div className="left"><a href="#intro" className="logo">genius.</a>



        <div className="itemContainer">
          <PersonIcon className="icon" />
          <span>+91 9617949056</span>
        </div>
        <div className="itemContainer">
          <MailIcon className="icon" />
          <span>aryaman@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>{ setMenuOpen(!menuOpen)}}>
          <span className="line1"></span>
           <span className="line2"></span>
            <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>;
}
