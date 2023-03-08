import "./App.css";
import { TbBrandVscode } from "react-icons/tb";
import { SiAdobepremierepro, SiCanva } from "react-icons/si";
import { RxFigmaLogo } from "react-icons/rx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container1">
          <div className="title">
            <img src="src/img/pro.jpeg" className="pic"></img>
          </div>
          <div className="info">
            <h1 className="name">SAGUL</h1>
            <h1 className="domain">FRONT-END DEVELOPER</h1>
          </div>
        </div>
        <hr></hr>
        {/* about */}
        <div className="container1">
          <h4 className="title">About</h4>
          <div className="content">
            As a front-end web developer, I specialize in the design and
            implementation of user-facing web pages and applications. I have a
            strong understanding of HTML, CSS, and JavaScrip.
          </div>
        </div>
        {/* QUALIFICATION BOX CONTAINER1*/}
        <div className="container1">
          {/* <div className="content"> */}
          <h4 className="title">QUALIFICATION:</h4>
          <div className="content">
            <table className="table">
              <tr>
                <th>EDUCATION</th>
                <th>PASS-OUT</th>
                <th>MARKS [%]</th>
              </tr>
              <tr>
                <td>10TH STD</td>
                <td>2008-2018</td>
                <td>74.4%</td>
              </tr>
              <tr>
                <td>12TH STD</td>
                <td>2018-2020</td>
                <td>77.8%</td>
              </tr>
              <tr>
                <td>BE.CSE</td>
                <td>2020-(current)</td>
                <td>90%</td>
              </tr>
            </table>
          </div>
        </div>
        {/* SKILL  */}
        <div className="container1">
          <h4 className="title">SKILLS:</h4>
          <div className="content">
            <ul>
              <li>C</li>
              <div className="progress-bar">
                <div className="c">
                  <span>60%</span>
                </div>
              </div>
              <li>HTML</li>
              <div className="progress-bar">
                <div className="html">
                  <span>75%</span>
                </div>
              </div>
              <li>CSS</li>
              <div className="progress-bar">
                <div className="css">
                  <span>65%</span>
                </div>
              </div>
              <li>Python</li>
              <div className="progress-bar">
                <div className="python">
                  <span>45%</span>
                </div>
              </div>
            </ul>
          </div>
        </div>
        {/* TOOLS */}
        <div className="container1">
          <h4 className="title">TOOLS:</h4>
          <div className="content">
            <ul>
              <li>
                Figma
                <RxFigmaLogo />
              </li>
              <li>
                VsCode
                <TbBrandVscode />
              </li>
              <li>
                Premier Pro
                <SiAdobepremierepro />
              </li>
              <li>
                Canva
                <SiCanva />
              </li>
            </ul>
          </div>
        </div>
        {/* certification */}
        <div className="container1">
          <h4 className="title">WORKSHOP & CERTIFICATION:</h4>
          <div className="content">
            <ul>
              <li>React-js</li>
              <li>HTML</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="container1">
          <h4 className="title">PROJECTS:</h4>
          <div className="content">
            <ul>
              <li>Resume using HTML & CSS</li>
            </ul>
          </div>
        </div>
        <div className="container1">
          <h4 className="title">LANGUAGE'S KNOWN :</h4>
          <ul>
            <li>English</li>
            <li>Tamil</li>
            <li>Hindi</li>
            <li>Urdu</li>
          </ul>
        </div>

        <div className="container1">
          <h4 className="title">SOCIAL:</h4>
          <ul>
            <li>LinkedIn</li>
            <li>Git-hub</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
