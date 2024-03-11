import image1 from "./img/1eae81f7-d5f6-4367-af39-ef51f0c96981.png";
import image2 from "./img/5c3185c4-fa53-4d59-9e36-6cc0a4e78844.png";
// import image3 from "./img/Navbarcat.png";
// import image4 from "./img/Navbardog.png";
// import image5 from "./img/Navbarfish.png";
import image6 from "./img/birds.png";
import image7 from "./img/cat.png";
import image8 from "./img/dog.png";
import image9 from "./img/e1b58ae0-77b4-4d58-962e-e3845cb2c0b7.png";
import image10 from "./img/fish.png";
// import image11 from "./img/navbarbried.png";
import { SlCalender } from "react-icons/sl";
import { FaStoreAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function Web() {
  return (
    <div className="App">
      <nav>
        <div class="logo">
          <div class="">
            <FaStoreAlt className="i" />
          </div>
          <div class="">
            <span>
              Jackie's <br />
              Pet Store
            </span>
          </div>
        </div>

        <ul>
          <li class="Navbar-Link">
            <a href="" class="demo">
              Products
            </a>
            {/* <div class="Navbar-box-one">
             <div class="img">
                <img class="imge-size-dog" src={image4} alt="" />
                <img class="imge-size-cat" src={image3} alt="" />
                <img class="imge-size-fish" src={image5} alt="" />
                <img class="imge-size-birds" src={image6} alt="" />
              </div>
            </div> */}
          </li>
          <li class="Navbar-Link">
            <a href="" class="demo">
              Services
            </a>
            {/* <div class="Navbar-box-second"></div> */}
          </li>

          <li class="Navbar-Link">
            <a href="" class="demo">
              Locations & Hours
            </a>
          </li>
          <li class="Navbar-Link">
            <a href="" class="demo">
              About Us
            </a>
          </li>
        </ul>

        <div class="Icon">
          <i class="fa-solid fa-bars menu-bar"></i>
          <FaSearch class="i" />
          <FaShoppingCart class="i" />
        </div>
      </nav>

      <section class="hero">
        <div class="Slider-text">
          <h1>Your One-Stop Shop for Every Pet's Needs!</h1>
          <div class="btn">
            <button class="btn-filled-dark button">
              <span>
                <FaShoppingCart class="i1" />
              </span>
              Shop All Products
            </button>
            <button class="btn-outline-dark button">
              <span>
                <SlCalender />
              </span>
              Book a Service
            </button>
          </div>
        </div>
        <div class="Slider-image">
          <img src={image9} alt="" />
        </div>
      </section>

      <div class="container">
        <section>
          <h2>Shop by Pet</h2>
          <ul class="shop-pet">
            <li id="dog-card" class="card-color card-hover">
              <div class="card-img">
                <img src={image8} alt="" />
              </div>
              <ul>
                Dogs
                <li>
                  <a href="">Food & Treats</a>
                </li>
                <li>
                  <a href="">Toys</a>
                </li>
                <li>
                  <a href="">Outdoor Supplies</a>
                </li>
                <li>
                  <a href="">Clothing</a>
                </li>
                <button class="btn-outline-light">
                  <span>Shop All</span> <i class="fas fa-arrow-right"></i>
                </button>
              </ul>
            </li>
            <li id="cat-card" class="card-color card-hover">
              <div class="card-img">
                <img src={image7} alt=" " />
              </div>
              <ul>
                Cats
                <li>
                  <a href="">Food & Treats</a>
                </li>
                <li>
                  <a href="">Toys</a>
                </li>
                <li>
                  <a href="">Beds & Furniture</a>
                </li>
                <button class="btn-outline-light btn-margin-top">
                  <span>Shop All</span> <i class="fas fa-arrow-right"></i>
                </button>
              </ul>
            </li>
            <li id="Brid-card" class="card-color card-hover">
              <div class="card-img">
                <img src={image6} alt="" />
              </div>
              <ul>
                Birds
                <li>
                  <a href="">Food & Treats</a>
                </li>
                <li>
                  <a href="">Toys</a>
                </li>
                <li>
                  <a href="">Furniture</a>
                </li>
                <button class="btn-outline-light btn-margin-top">
                  <span>Shop All</span> <i class="fas fa-arrow-right"></i>
                </button>
              </ul>
            </li>
            <li id="fish-card" class="card-color card-hover">
              <div class="card-img">
                <img src={image10} alt="" />
              </div>
              <ul>
                Fish
                <li>
                  <a href="">Food </a>
                </li>
                <li>
                  <a href="">Aquariums</a>
                </li>
                <li>
                  <a href="">Rocks & Decorations</a>
                </li>
                <button class="btn-outline-light btn-margin-top">
                  <span>Shop All</span> <i class="fas fa-arrow-right"></i>
                </button>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Our Services</h2>
          <ul class="services">
            <li id="serv-groom" class="card-wide">
              <div class="services-card-img">
                <img src={image1} alt="" />
              </div>
              <ul>
                <h4> Dog Grooming</h4>
                <span class="subtitle">
                  Tail-wagging transformations are our specialty.
                </span>
                <li>
                  <a href="">Coat Care</a>
                  <span>$80</span>
                </li>
                <li>
                  <a href="">Nail Care</a>
                  <span>$16</span>
                </li>
                <li>
                  <a href="">Doggie Deluxe Spa Day</a>
                  <span>$160</span>
                </li>
                <button class="btn-outline button-dark">
                  <SlCalender class="i2" /> Book Now
                </button>
              </ul>
            </li>
            <li id="serv-board" class="card-wide">
              <div class="services-card-img">
                <img src={image2} alt="" />
              </div>
              <ul>
                <h4>Dog Boarding</h4>
                <span class="subtitle">
                  Tail-wagging transformations are our specialty.
                </span>
                <li>
                  <a href="">Doggie Daycare</a>
                  <span>$80</span>
                </li>
                <li>
                  <a href="">Short Term Boarding</a>
                  <span>$16</span>
                </li>
                <button class="btn-outline btn button-dark">
                  <SlCalender class="i2" />
                  Book Now
                </button>
              </ul>
            </li>
          </ul>
        </section>
        <section class="Locate">
          <div>
            <h2>Location & Hours</h2>

            <p>
              Our knowledgeable and friendly staff is always ready to assist you
              in making the best choices for your furry, feathered, or finned
              friends.
            </p>

            <div class="btn">
              <button class="btn-filled-dark find-buton">
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Find a Store
              </button>
              <button class="btn-outline-dark contect-button">
                <span>
                  <i class="fa-solid fa-circle-info"></i>
                </span>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <ul>
          <h4>Products</h4>
          <li>
            <a href="">Food & Treats</a>
          </li>
          <li>
            <a href="">Toys</a>
          </li>
          <li>
            <a href="">Outdoor Supplies</a>
          </li>
          <li>
            <a href="">Clothing</a>
          </li>
          <li>
            <a href="">Aquariums</a>
          </li>
          <li>
            <a href="">Rocks & Decorations</a>
          </li>
        </ul>
        <ul>
          <h4>Shop by Pet</h4>
          <li>
            <a href="">Dogs</a>
          </li>
          <li>
            <a href="">Cats</a>
          </li>
          <li>
            <a href="">Birds</a>
          </li>
          <li>
            <a href="">Fish</a>
          </li>
        </ul>
        <ul>
          <h4>Our Services</h4>
          <li>
            <a href="">Grooming</a>
          </li>
          <li>
            <a href="">Boarding</a>
          </li>
        </ul>
        <ul>
          <h4>Our Company</h4>
          <li>
            <a href="">Locations & Hours</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Web;
