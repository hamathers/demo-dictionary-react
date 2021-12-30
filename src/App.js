import { Container, Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  // const [word, setWord] = useState("");
  // const [meanings, setMeanings] = useState([]);
  // const [category, setCategory] = useState("en");
  // const [LightTheme, setLightTheme] = useState(false);

  // const dictionaryApi = async () => {
  //   try {
  //     const data = await axios.get(
  //       category === "en"
  //         ? `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
  //         : `https://api.tracau.vn/WBBcwnwQpV89/s/${word}/${
  //             category === "en - vi" ? "en" : "vi"
  //           }`
  //     );
  //     setMeanings(category === "en" ? data.data : data.data.sentences);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(meanings);

  // useEffect(() => {
  //   word && dictionaryApi();
  //   // eslint-disable-next-line
  // }, [word, category]);

  // const PurpleSwitch = withStyles({
  //   switchBase: {
  //     color: grey[50],
  //     "&$checked": {
  //       color: grey[900],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: grey[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: window.innerWidth, height: window.innerHeight },
      })
      .then((stream) => {
        let video = videoRef.current;
        if (video) {
          alert("havh");
          video.srcObject = stream;
          video.play();
        }
      })
      .catch((err) => console.log("havh", err));
  };

  return (
    <div
      className="App"
      // style={{
      //   height: "100vh",
      //   backgroundColor: LightTheme ? "#fff" : "#282c34",
      //   color: LightTheme ? "black" : "white",
      //   transition: "all 0.5s linear",
      // }}
    >
      {/* <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>Chế độ {LightTheme ? "tối" : "sáng"}</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header
          setWord={setWord}
          category={category}
          setCategory={setCategory}
          word={word}
          setMeanings={setMeanings}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Definitions
            meanings={meanings}
            word={word}
            LightTheme={LightTheme}
            category={category}
          />
        )}
      </Container>
      <Footer /> */}
      <video ref={videoRef}></video>
      <canvas ref={photoRef}></canvas>
    </div>
  );
}

export default App;
