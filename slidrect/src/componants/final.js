import Carousel, {
  
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

/*hi*/

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
            <label htmlFor="width" className="head" tabIndex="150">
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
              
              arrows
              clickToChange
              slidesPerPage={3}
              infinite
              plugins={[
                "fastSwipe",
                "autoplay",
                "centered",
                "rtl",
               
                "arrows",
                "clickToChange",
                "centered",
                {
                  resolve: arrowsPlugin,
                  
                  resolve: slidesToScrollPlugin,
                  resolve: slidesToShowPlugin,
                  resolve: infinitePlugin,
                  options: {
                    arrowLeft: (
                      <button >
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
                   
                    
                  },
                },
              ]}//
             
            >
           
              <div >
               
                <img src={im2} height="338px" width="220px" tabIndex={1}/>
                <h1 className="h" tabIndex={1}>MINECRAFT </h1>
                <p className="p" tabIndex={1}>
                  Explore your own unique world ,survive the night, and
                  create anything you can imagine!
                </p>
              </div>  
              {/* <div>
                <img src={im4} height="338px" width="220px" tabIndex="0" />{" "}
                <h1 className="h"tabIndex="0">
                  :MINECRAFT<br></br> EDUCATION EDITION
                </h1>
                <p className="p" tabIndex="0">
                  A game-based learning platform<br></br> supporting thousands
                  of
                  <br></br>
                  educators in over 100 countries!
                </p>
              </div> */}
              
              <div >
               
               <img src={im1} height="338px" width="220px" tabIndex={1}/>
               <h1 className="h" tabIndex={1}>
                 MINECRAFT  DUNGEONS
               </h1>
               <p className="p" tabIndex={1}>
                 Discover an all-new action  adventure game, inspired
                 by
                 
                 classic dungeon crawlers!
               </p>
             </div>
             <div>
                <img src={im3} height="338px" width="220px" tabIndex={1} /> 
                <h1 className="h" tabIndex={1}>MINECRAFT EARTH</h1>
                <p className="p" tabIndex={1}>
                  Bring the Minecraft universe into the real world with
                 
                  augmented reality!
                </p>
              </div>
               
            </Carousel>
            
          </div>
        </div>
      </div>
    );
  }
}

export default MyCarousel;