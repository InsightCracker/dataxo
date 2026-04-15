import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../../../util/Contexts";
import { categoriesList } from "../../../util/categories";

import { 
  Box
} from "@chakra-ui/react";


const Cards = () => {

  const {
    setCategories,
    searchTerm
  } = useContext(QuizContext);

  // Filter categories based on search input
  const filteredCategories = categoriesList.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickPlay = (cat) => {
    if (window.gtag) {
      window.gtag('event', 'quick_play', {
        event_category: 'engagement',
        event_label: 'Quick Play Button',
        value: 1
      });
    }

    setCategories(cat.name)
  }; 

  const botMode = (cat) => {
    if (window.gtag) {
      window.gtag('event', 'bot_mode', {
        event_category: 'engagement',
        event_label: 'Bot Mode Button',
        value: 1
      });
    }

    setCategories(cat.name)
  }; 


  return (
  <Box>

    <div>
      <Box className="card-grid">
        {filteredCategories.map((cat) => (
          <div className="card visible" key={cat.id}>
            <div className="content">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>

              <div className="btns-box">
                <Link
                  to="/quiz/solo"
                  onClick={() => quickPlay(cat)}
                  className="btn card-btn"
                >
                  Quick Play
                </Link>

                <Link
                  to="/quiz/vsbot"
                  onClick={() =>  botMode(cat)}
                  className="btn card-btn"
                >
                  Bot Mode
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </div>
  </Box>
  )
}

export default Cards