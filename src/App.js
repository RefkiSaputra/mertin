import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile text-center bg_content">
            <img src="/mertin.jpeg" className="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>Mertin Fitri Yanti</h1>
              <p></p>
              <p>Follow My Social Media</p>
            </div>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/piggydaisyy/?utm_medium=copy_link"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://vt.tiktok.com/ZSeVr1Eg7/"
            >
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.mediafire.com/file/2si98eij8qqkh2u/sc_bucin.zip/file"
            >
              < BsCodeSlash />
              <span>Script</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
