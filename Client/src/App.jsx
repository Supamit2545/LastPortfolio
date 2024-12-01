// Import Css
import './index.css'
import "./assets/css/Responsive.css"
// ImportRoutes
import Topbar from "./Components/Navbar/Navbar";
import IntroPage from "./Routes/Intro/page";
import AboutMepage from './Routes/AboutMe/page';
import ProjectPage from './Routes/Projects/page';
import ContactsPage from './Routes/Contacts/Page';
import Gotopbtn from './Components/GotopBTN/Gotopbtn';
import Announce from './Components/Announce/Announce';

export default function Home() {
  return (
    <div className="">
      <Announce/>
      <main className="">
        <div className="App-Header">
          <Topbar/>
        </div>
        <div className="App-Boby z-1">
          <div className="section">
            <IntroPage/>
          </div>
          <div className="section">
            <AboutMepage/>
          </div>
          <div className="section">
            <ProjectPage/>
          </div>
        </div>
        <div className="Footer">
          <ContactsPage/>
        </div>
        <div className=''>
          <Gotopbtn/>
        </div>
      </main>
    </div>
  );
}
