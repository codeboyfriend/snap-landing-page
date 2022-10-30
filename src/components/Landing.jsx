import desktop from "../assets/images/image-hero-desktop.png";
import mobile from "../assets/images/image-hero-mobile.png";
import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";

const Landing = () => {
  return (
    <div className='landing'>
        <div className="mobile">
            <img src={mobile} alt="" />
        </div>

        <div className="left">
            <h2>
                Make remote work
            </h2>

            <p>
                Get your team in sync, no matter your location. Streamline processes, create team ritual and watch productivity soar.
            </p>

            <button className="btn btn_1">Learn More</button>

            <div className="images">
                <div>
                    <img src={databiz} alt="" />
                </div>

                <div>
                    <img src={audiophile} alt="" />
                </div>

                <div>
                    <img src={meet} alt="" />
                </div>

                <div>
                    <img src={maker} alt="" />
                </div>
            </div>
      </div>

      <div className="right">
        <div style={{
            padding: "0 100px"
        }}>
            <img src={desktop} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing
