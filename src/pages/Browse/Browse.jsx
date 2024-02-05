import React from "react";
import "./Browse.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const Browse = () => {
  const [topPCGames, setTopPCGames] = useState([]);
  const APIKey = import.meta.env.VITE_RAWGKEY; // Replace with your actual API key
  const apiUrl = "https://api.rawg.io/api";
  const endpoint = "/games";
  const twitchEndpoint = '/twitch';

  useEffect(() => {
    const fetchTopPCGames = async () => {
      try {
        const response = await axios.get(`${apiUrl}${endpoint}`, {
          params: {
            key: APIKey,
            platforms: 4,
            ordering: "-downloads",
            page: 1,
            page_size: 3,
          },
        });

        const topGames = response.data.results;


        setTopPCGames(topGames);
        console.log('Top PC Games:', topGames);
      } catch (error) {
        console.error("Error fetching top PC games:", error.message);
      }
    };

    fetchTopPCGames();
  }, [APIKey]);
  

  return (
    <div className="featured__wrapper container">
      <div className="featured__container_1">
        <h1>
          <span>Featured</span> Games
        </h1>

        <div className="featured_games">
          {topPCGames.map((game) => (
            <div key={game.id} className="item">
              <div className="thumb">
                <img src={game.background_image} alt={game.name} />
                <div className="hover-effect">
                  <h6>{game.rating} ⭐️</h6>
                </div>
              </div>
              <h4>
                {game.name} <br />
              </h4>
            </div>
          ))}
          {/* <div className="item">
        //   <div className="thumb">
        //     <img src="./images/featured-02.jpg" alt="" />
        //     <div className="hover-effect">
        //       <h6>2.4K Streaming</h6>
        //     </div>
        //   </div>
        //   <h4>
        //     Gamezer
        //     <br />
        //     <span>249K Downloads</span>
        //   </h4>
         </div>

         <div class="item">
        //   <div class="thumb">
        //     <img src="./images/featured-03.jpg" alt="" />
        //     <div class="hover-effect">
        //       <h6>2.4K Streaming</h6>
        //     </div>
        //   </div>
        //   <h4>
        //     Island Rusty
        //     <br />
        //     <span>249K Downloads</span>
        //   </h4>
        </div> */}
        </div>
      </div>
      {/* <div className="top-download">
        <h1 className="tag"><span>Top</span> Downloaded</h1>
        <ul>
          <li>
            <img src="./images/game-01.jpg" alt="" />
            <h4>Fortnite</h4>
            <h6>Sandbox</h6>
          </li>
          <li>
            <img src="./images/game-02.jpg" alt="" />
            <h4>CS-GO</h4>
            <h6>Legendary</h6>
          </li>
          <li>
            <img src="./images/game-03.jpg" alt="" />
            <h4>PubG</h4>
            <h6>Battle Royale</h6>
            
          </li>
        </ul>
      </div> */}

      {/* <div className="start-stream">
        <h1><span>How to Start Your</span>Live Stream</h1>

        <div className="service">
          <img src="./images/service-01.jpg" alt="" />
        <h4>Go To Your Profile</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis quaerat placeat, et quis eveniet ratione earum enim inventore cum amet consequatur optio laboriosam? Culpa eligendi molestiae facere possimus temporibus?</p>
        </div>
      </div> */}
    </div>
  );
};

export default Browse;
