import React, { useState, useEffect } from "react";
import BaseUrl from "./BaseUrl";
import { useNavigate } from "react-router-dom";
import HammerGame from "./Minigames/Minigame1/HammerGame"; //minigame1
import Minigame2 from "./Minigames/Minigame2/Minigame2"; //minigame2
import MazeGame from "./Minigames/Minigame3/MazeGame"; //minigame3
import Main from "./Minigames/Minigame4/Main"; //minigame4
import WhackaWolf from "./Minigames/Minigame5/WhackaWolf"; //minigame5
import Wordle from "./Minigames/Minigame6/Wordle"; //minigame6
import MathematicalDroplets from "./Minigames/Minigame7/MathematicalDroplets"; //minigame7
import Minigame8 from "./Minigames/Minigame8/Minigame8"; //minigame8
import Minigame9 from "./Minigames/Minigame9/Minigame9"; //minigame9
import Minigame10 from "./Minigames/Minigame10/Minigame10"; //minigame10
import Minigame11 from "./Minigames/Minigame11/Minigame11"; //minigame11
import Minigame12 from "./Minigames/Minigame12/Minigame12"; //minigame12
import Minigame13 from "./Minigames/Minigame13/Minigame13"; //minigame13
import Minigame14 from "./Minigames/Minigame14/Minigame14";
import Minigame15 from "./Minigames/Minigame15/Minigame15";
import Minigame16 from "./Minigames/Minigame16/Minigame16";
import Game from "./Minigames/Minigame18/Game";


const StoryGame = () => {
  const nav = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [storyId, setStoryId] = useState("0000");
  const [points, setPoints] = useState(0); // Initialize points to 0
  const [money, setMoney] = useState(0);
  const [health, setHealth] = useState(0);
  const [rf, setRF] = useState(0);
  const [snippetIndex, setSnippetIndex] = useState(0); // State for snippet index
  const [inventory, setInventory] = useState(null);
  const [minigame, setMinigame] = useState(false);

  //variables for minigames
  const [gameNo, setGameNo] = useState(0);
  const [gameDialogue, setGameDialogue] = useState(false);
  const [minigameOneWon, setMinigameOneWon] = useState(false);
  const [minigameOnePoints, setMinigameOnePoints] = useState(0);
  const [minigameTwoPoints, setMinigameTwoPoints] = useState(0);
  const [minigameThreePoints, setMinigameThreePoints] = useState(0);
  const [minigameFourPoints, setMinigameFourPoints] = useState(0);
  const [minigameFivePoints, setMinigameFivePoints] = useState(0);
  const [minigameSixWon, setMinigameSixWon] = useState(false);
  const [minigameSixPoints, setMinigameSixPoints] = useState(0);
  const [minigameSevenPoints, setMinigameSevenPoints] = useState(0);
  const [minigameEightPoints, setMinigameEightPoints] = useState(0);
  const [minigameNinePoints, setMinigameNinePoints] = useState(0);
  const [minigameTenPoints, setMinigameTenPoints] = useState(0);
  const [minigameElevenPoints, setMinigameElevenPoints] = useState(0);


  //bgimg ka array
  const bgarray = [
    '',//0
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728917655/1.png', //1
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728930116/2_1_uldavh.png', //2
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921617/3_c82xob_x6kpxe.png', //3
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921635/4_ay2tal_uv9i1u.png', //4
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921639/5_v01egf_du9xqs.png', //5
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921641/6_kffzxo_aungzz.png', //6
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918610/7_cfoetn.png', //7
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922012/8_i63knk.png', //8
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921654/9_jq7f7b_kbae5g.png', //9
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921617/10_fzpjgp_uyjc1e.png', //10
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921653/11_aljo7g_jugaqe.png', //11
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728932361/12_o_auarlv.png', //12
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921641/13_fjmu45_douwxr.jpg', //13
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922300/14_yjbyhz_c_pad_b_gen_fill_w_1440_h_1024_lxm2vt.png', //14
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922043/15_aoxwgf.png', //15
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922976/16_hcbmak_arju7k.png', //16
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922977/17_drqzlg_njpoul.png', //17
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728922649/18_twrzq6_c_pad_b_gen_fill_w_1440_h_1024_dfkpnu.png', //18
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728920787/19_l3fpqd_c_pad_b_gen_fill_w_1440_h_1024_smva4a.png', //19
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918649/20_ratvde.png', //20
    //21
    //22
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728932471/23_wpseh7.png', //23
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728921645/24_osspg4_hkaskt.png', //24
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728920134/25_k81ope_c_pad_b_gen_fill_w_1440_h_1024_cfpgar.png', //25
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728920666/26_ne9l6b_c_pad_b_gen_fill_w_1440_h_1024_b8fusi.png', //26
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918667/27_oy5z45.png', //27
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918686/28_x9gtno.png', //28
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728920544/29_svbxaf_c_pad_b_gen_fill_w_1440_h_1024_hrvuya.png', //29
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728920337/30_bj19em_c_pad_b_gen_fill_w_1440_h_1024_ostomm.png', //30
    //31
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918687/32_k6jarr.png', //32
    //33
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918699/34_i9wrzd.png', //34
    'https://res.cloudinary.com/diswj8gya/image/upload/v1728918705/35_p4srrh.png', //35
  ];

  //function for minigame 1
  const handleMiniGameOneResult = (pts, won) => {
    setMinigameOnePoints(pts);
    setMinigameOneWon(won);
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameTwoResult = (pts) => {
    setMinigameTwoPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameThreeResult = (pts) => {
    setMinigameThreePoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameFourResult = (pts) => {
    setMinigameFourPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameFiveResult = (pts) => {
    setMinigameFivePoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameSixResult = (pts, won) => {
    setMinigameSixPoints(pts); // Update the state based on the mini-game result
    setMinigameSixWon(won);
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameSevenResult = (pts) => {
    setMinigameSevenPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameEightResult = (pts) => {
    setMinigameEightPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameNineResult = (pts) => {
    setMinigameNinePoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameTenResult = (pts) => {
    setMinigameTenPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  const handleMiniGameElevenResult = (pts) => {
    setMinigameElevenPoints(pts); // Update the state based on the mini-game result
    console.log(`Player got: ${pts}`);
  };

  // Fetch user details only when the component mounts
  async function fetchUserDetails() {
    const token = localStorage.getItem("token"); // Get the token from localStorage

    try {
      const response = await fetch(`${BaseUrl}/api/user/getuser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await response.json();
      console.log(userDetails); // Use user details as needed
      setStoryId(userDetails.currentStoryId);
      setPoints(userDetails.points); // Assume you store points in the backend
      setMoney(userDetails.money);
      setHealth(userDetails.health);
      setRF(userDetails.rf);
      setInventory(userDetails.inventory);
      console.log(userDetails.points);
      fetchStory(userDetails.currentStoryId);
    } catch (error) {
      console.error("Error fetching user details:", error.message);
      nav("/storyerror");
    }
  }

  useEffect(() => {
    // Call the function to fetch user details
    fetchUserDetails();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const fetchStory = async (storyId) => {
    setLoading(true);
    try {
      const response = await fetch(`${BaseUrl}/api/story/${storyId}`);
      const data = await response.json();
      setStory(data);
      console.log(data);
      if (data.options.length === 0) {
        setGameNo(data.minigame);
        console.log("game 1");
      } else {
        setGameNo(0);
      }
      setSnippetIndex(0); // Reset the snippet index to 0 when a new story is fetched
    } catch (error) {
      console.error("Error fetching story:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateCurrentStoryIdAndPoints = async (
    newStoryId,
    newPoints,
    newHealth,
    newMoney,
    newRF,
    inv
  ) => {
    setGameDialogue(false);
    const token = localStorage.getItem("token"); // Get the token from localStorage
    const userId = localStorage.getItem("userId"); // Store user ID in localStorage when user logs in

    try {
      const response = await fetch(`${BaseUrl}/api/user/updatestory`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          currentStoryId: newStoryId,
          points: newPoints, // Send updated points to the backend
          health: newHealth,
          money: newMoney,
          rf: newRF,
          inventory: inv,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update current story ID and points");
      }

      const data = await response.json();
      console.log("Story and points updated successfully:", data);
    } catch (error) {
      console.error("Error updating story and points:", error);
    }
  };

  const handleOptionClick = async (
    nextStoryId,
    optionPoints,
    optionHealth,
    optionMoney,
    optionRF,
    optionInventory
  ) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    try {
      const response = await fetch(`${BaseUrl}/api/user/getuser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await response.json();
      console.log(userDetails); // Use user details as needed
      setStoryId(userDetails.currentStoryId);

      const firstTwoDigits1 = userDetails.currentStoryId.slice(0, 2);
      const firstTwoDigits2 = nextStoryId.slice(0, 2);

      // Check if moving to the next story is allowed
      if (firstTwoDigits1 < firstTwoDigits2) {
        if (points === null) setPoints(0);
        const updatedPoints = points + optionPoints; // Add option points to current points
        const updatedHealth = health + optionHealth;
        const updatedMoney = money + optionMoney;
        const updatedRF = rf + optionRF;
        console.log(updatedPoints, points, optionPoints);
        console.log(updatedHealth, health, optionHealth);
        console.log(updatedMoney, money, optionMoney);
        console.log(updatedRF, rf, optionRF);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;
        inv.script.value = optionInventory.key;
        inv.kumbh.value = optionInventory.umbrella;
        inv.journal.value = optionInventory.journal;
        inv.sword.value = optionInventory.sword;
        inv.pickaxe.value = optionInventory.pickaxe;
        inv.axe.value = optionInventory.axe;
        console.log(inv, optionInventory);
        setInventory(inv);
        fetchStory(nextStoryId); // Fetch the new story
        updateCurrentStoryIdAndPoints(
          nextStoryId,
          updatedPoints,
          updatedHealth,
          updatedMoney,
          updatedRF,
          inv
        ); // Update the story ID and points in the backend
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const handleGameNext = async () => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    try {
      const response = await fetch(`${BaseUrl}/api/user/getuser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const userDetails = await response.json();
      console.log(userDetails); // Use user details as needed
      setStoryId(userDetails.currentStoryId);

      if (gameNo === 1) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameOnePoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;
        const nextStory = 9998;
        fetchStory(nextStory);

        if (gameDialogue && gameNo === 1)
          updateCurrentStoryIdAndPoints(
            nextStory,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 2) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameTwoPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;
        const nextStory = 9997;
        fetchStory(nextStory);

        if (gameDialogue && gameNo === 2)
          updateCurrentStoryIdAndPoints(
            nextStory,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 3) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameThreePoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 3)
          updateCurrentStoryIdAndPoints(
            9997,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 4) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameFourPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 4)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 5) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameFivePoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 5)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 6) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameSixPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;
        
        if(gameDialogue && gameNo===6){
          if(minigameSixWon){
            fetchStory('0703');
             updateCurrentStoryIdAndPoints('0703', updatedPoints, updatedHealth, updatedMoney, updatedRF, inv); // Update the story ID and points in the backend
          } else{
            fetchStory('0704');
             updateCurrentStoryIdAndPoints('0704', updatedPoints, updatedHealth, updatedMoney, updatedRF, inv); // Update the story ID and points in the backend
          } 
        }
      }

      if (gameNo === 7) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameSevenPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 7)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 8) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameEightPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 8)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 9) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameNinePoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 9)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }

      if (gameNo === 10) {
        if (points === null) setPoints(0);
        const updatedPoints = points + minigameTenPoints; // Add option points to current points
        const updatedHealth = health;
        const updatedMoney = money;
        const updatedRF = rf;
        console.log(updatedPoints, points);
        console.log(updatedHealth, health);
        console.log(updatedMoney, money);
        console.log(updatedRF, rf);
        setPoints(updatedPoints); // Update the UI with new points
        setHealth(updatedHealth);
        setMoney(updatedMoney);
        setRF(updatedRF);
        const inv = inventory;

        if (gameDialogue && gameNo === 10)
          updateCurrentStoryIdAndPoints(
            9998,
            updatedPoints,
            updatedHealth,
            updatedMoney,
            updatedRF,
            inv
          ); // Update the story ID and points in the backend
      }
    } catch (error) {
      console.error("Error fetching user details:", error.message);
    }
  };

  const handleNextSnippet = () => {
    if (snippetIndex < story.snippet.length - 1) {
      setSnippetIndex(snippetIndex + 1); // Move to the next snippet
      if (snippetIndex + 1 === story.snippet.length - 1) {
        setGameDialogue(true);
      } else {
        setGameDialogue(false);
      }
    }
  };

  return (
    <div
      className="bg-gray-900"
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${bgarray[story?.snippet[snippetIndex].bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", // Cover the full width of the viewport
        // height: '110vh',
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // Align content to the bottom
        padding: "20px",
        color: "white", // Text color for better readability
      }}
      onClick={handleNextSnippet}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        story && (
          <>
            <div className="text-end h-[100vh]">
              {gameDialogue && gameNo === 1 && (
                <HammerGame gameResult={handleMiniGameOneResult} />
              )}
              {gameDialogue && gameNo === 2 && (
                <Minigame2 gameResult={handleMiniGameTwoResult} />
              )}{" "}
              {/*problem*/}
              {gameDialogue && gameNo === 3 && (
                <MazeGame gameResult={handleMiniGameThreeResult} className="" />
              )}
              {gameDialogue && gameNo === 4 && (
                <Main gameResult={handleMiniGameFourResult} />
              )}
              {gameDialogue && gameNo === 5 && (
                <WhackaWolf gameResult={handleMiniGameFiveResult} />
              )}
              {gameDialogue && gameNo === 12 && (
                <Minigame12 gameResult={handleMiniGameOneResult} />
              )}
              {gameDialogue&& gameNo === 13 && (
                <Minigame13 gameResult={handleMiniGameOneResult} />
              )}
              {gameDialogue&& gameNo === 14 && (
                <Minigame14 gameResult={handleMiniGameOneResult} />
              )}
              {gameDialogue && gameNo === 15 && (
                <Minigame15 gameResult={handleMiniGameOneResult} />
              )}
              {gameDialogue && gameNo===16 && (
                <Minigame16 gameResult={handleMiniGameOneResult} />
              )}
              
              {gameDialogue && gameNo===6 &&(
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "115%",
                  }}
                >
                  <Wordle gameResult={handleMiniGameSixResult} />
                </div>
              )}{" "}
              {/*will be fixed */}
              {gameDialogue && gameNo === 7 && (
                <MathematicalDroplets gameResult={handleMiniGameSevenResult} />
              )}{" "}
              {/*will be fixed */}
              {gameDialogue && gameNo === 8 && (
                <Minigame8 gameResult={handleMiniGameEightResult} />
              )}
              {gameDialogue && gameNo === 9 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <Minigame9 gameResult={handleMiniGameNineResult} />
                </div>
              )}
              {gameDialogue && gameNo === 10 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "115%",
                  }}
                >
                  <Minigame10 gameResult={handleMiniGameTenResult} />
                </div>
              )}
              {gameDialogue && gameNo === 11 && <Minigame11 />}

              {gameDialogue && gameNo ===18 &&(
                <Game />  
              )}

              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding: "20px",
                  maxWidth: "90%",
                  margin: "0 auto",
                }}
                className="absolute top-24 right-0"
              >
                
                
                {/* <p>Points: {points}</p>
                <p>Health: {health}</p>
                <p>Money: {money}</p>
                <p>Risk Factor: {rf}</p>
                <p>Script: {inventory?.key?.value ? "Yes" : "No"}</p>
                <p>Kumbh: {inventory?.umbrella?.value ? "Yes" : "No"}</p>
                <p>Journal: {inventory?.journal?.value ? "Yes" : "No"}</p>
                <p>Sword: {inventory?.sword?.value ? "Yes" : "No"}</p>
                <p>Pickaxe: {inventory?.pickaxe?.value ? "Yes" : "No"}</p>
                <p>Axe: {inventory?.axe?.value ? "Yes" : "No"}</p>
                <p>Minigame1 won? : {minigameOneWon ? "Yes" : "No"}</p>
                <p>Minigame2 pts: {minigameTwoPoints}</p>
                <p>Minigame3 pts: {minigameThreePoints}</p>
                <p>Minigame4 pts: {minigameFourPoints}</p>
                <p>Minigame5 pts: {minigameFivePoints}</p>
                <p>Minigame6 pts: {minigameSixPoints}</p>
                <p>Minigame7 pts: {minigameSevenPoints}</p>
                <p>Minigame8 pts: {minigameEightPoints}</p>
                <p>Minigame9 pts: {minigameNinePoints}</p> */}
              </div>
            </div>

            <div className="mb-5">
              {snippetIndex === story.snippet.length - 1 && (
                <div className="flex ">
                  {story.options.length !== 0 ? (
                    story.options.map((option, index) => (
                      <button
                        key={index}
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for the text box
                          padding: "20px",
                          borderRadius: "10px",
                          width: "100%",
                          margin: "1rem 0.5rem",
                        }}
                        onClick={() =>
                          handleOptionClick(
                            option.nextStoryId,
                            option.points,
                            option.health,
                            option.money,
                            option.rf,
                            option.inventory
                          )
                        }
                      >
                        {option.optionText}
                      </button>
                    ))
                  ) : (
                    <>
                      <button
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for the text box
                          padding: "20px",
                          borderRadius: "10px",
                          width: "100%",
                          margin: "1rem 0.5rem",
                        }}
                        onClick={handleGameNext}
                      >
                        Finish Minigame
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for the text box
                padding: "20px",
                width: "100%",
                margin: "0 auto",
              }}
            >
              {/* <p>{story.snippet[snippetIndex].text}</p> */}
              {story.snippet[snippetIndex].text
                .split("\n")
                .map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              {story.options.length !== 0 &&
                snippetIndex === story.snippet.length - 1 && (
                  <p className="text-end">
                    {snippetIndex !== 0 && (
                      <button
                        onClick={() => {
                          setSnippetIndex(0);
                          setGameDialogue(false);
                        }}
                      >
                        restart
                      </button>
                    )}
                  </p>
                )}

              {/* {snippetIndex < story.snippet.length - 1 && (
              <button
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={handleNextSnippet}
              >
                Next
              </button>
            )} */}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default StoryGame;
