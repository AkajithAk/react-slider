import Carousel, {
  Dots,
  slidesToShowPlugin,
  autoplayPlugin,
  slidesToScrollPlugin,
  arrowsPlugin,
  infinitePlugin,
} from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import Icon from "react-fa";
import React from 'react';
import im1 from "../images/a.jpg";
import im2 from "../images/b.jpg";
import im3 from "../images/c.jpg";
import im4 from "../images/d.jpg";
 import '@brainhubeu/react-carousel/lib/style.css';
  import '@brainhubeu/react-carousel/lib/style.css';
 import '@brainhubeu/react-carousel/lib/style.css';
import './final.css';

class MyCarousel extends React.Component {
  resizeSurrounding() {
    const width = document.querySelector("#width").value;
    document.querySelector("#surrounding").style.width = `${width}px`;
  }
  constructor() {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div className="bi">
        <div className="container">
          <div className="bg ">
            <label htmlFor="width" className="head">
              EXPLORE MINECRAFT GAMES
            </label>
            {/* <input
          type="number"
          value={this.state.value}
          onChange={(e) => this.onChange(parseInt(e.target.value || 0))}
        /> */}

            <Carousel
              className="im"
              keepDirectionWhenDragging
              slidesPerScroll={1}
              centered
              rtl
              arrows
              clickToChange
              slidesPerPage={3}
              infinite
              plugins={[
                "fastSwipe",
                "autoplay",
                "centered",
                "rtl",
                "infinite",
                "arrows",
                "clickToChange",
                "centered",
                {
                  resolve: arrowsPlugin,
                  resolve: autoplayPlugin,
                  resolve: slidesToScrollPlugin,
                  resolve: slidesToShowPlugin,
                  resolve: infinitePlugin,
                  options: {
                    arrowLeft: (
                      <button>
                        <Icon name="angle-double-left" />
                      </button>
                    ),
                    arrowLeftDisabled: (
                      <button>
                        <Icon name="angle-left" />
                      </button>
                    ),
                    arrowRight: (
                      <button>
                        <Icon name="angle-double-right" />
                      </button>
                    ),
                    arrowRightDisabled: (
                      <button>
                        <Icon name="angle-right" />
                      </button>
                    ),
                    addArrowClickHandler: true,
                    numberOfSlides: 1,
                    interval: 2000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <div>
                {" "}
                <img src={im1} height="338px" width="220px" />
                <h1 className="h">
                  MINECRAFT <br></br>DUNGEONS
                </h1>
                <p className="p">
                  Discover an all-new action<br></br> adventure game, inspired
                  by
                  <br></br>
                  classic dungeon crawlers!
                </p>
              </div>
              <div>
                {" "}
                <img src={im2} height="338px" width="220px" />
                <h1 className="h">MINECRAFT </h1>
                <p className="p">
                  Explore your own unique world,<br></br> survive the night, and
                  create<br></br> anything you can imagine!
                </p>
              </div>
              <div>
                <img src={im4} height="338px" width="220px" />{" "}
                <h1 className="h">
                  :MINECRAFT<br></br> EDUCATION EDITION
                </h1>
                <p className="p">
                  A game-based learning platform<br></br> supporting thousands
                  of
                  <br></br>
                  educators in over 100 countries!
                </p>
              </div>
              <div>
                <img src={im3} height="338px" width="220px" />{" "}
                <h1 className="h">MINECRAFT EARTH</h1>
                <p className="p">
                  Bring the Minecraft universe<br></br> into the real world with
                  <br></br>
                  augmented reality!
                </p>
              </div>
            </Carousel>
            {/* <Carousel
          value={this.state.value}
          onChange={this.onChange}
          slides={[
            <img src={im1} height="369px" width="240px" />,
            <img src={im2} height="369px" width="240px" />,
            <img src={im3} height="369px" width="240px" />,
          ]}
          plugins={["arrows", "clickToChange"]}
        /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default MyCarousel;