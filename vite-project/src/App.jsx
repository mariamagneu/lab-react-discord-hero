import "./App.css";
import Background from "./assets/discord-background.png";
import Logo from "./assets/discord-logo-white.png";
import Menu from "./assets/menu-icon.png";
function App() {
  return (
    <div className="App">
      <section class="navbar">
        <img src={Logo} class="logo" />
        <img src={Menu} class="menu" />
      </section>
      <section class="textsection">
        <h1 class="left">IMAGINE A PLACE...</h1>
        <p class="left">
          ... where you can belong to a school club, a gaming group, or a
          worldwide art ccommunity. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </section>
      <section class="buttonsection">
        <button type="button" class="mac">
          Download for Mac
        </button>
        <button type="button" class="browser">
          Open Discord in your Browser
        </button>
      </section>
      <section class="imagesection">
        <img src={Background} />
      </section>
    </div>
  );
}

export default App;
