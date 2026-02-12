import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

import { 
  Box,
  Input, 
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";

import { LuSearchCheck } from "react-icons/lu";

import SideBar from "../util/SideBar";


const Home = () => {

  const {
    setCategories,
    setDifficulty
  } = useContext(QuizContext);


    return (
    <Box className="" >
      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="about-text home-container">
        <div className="top-bar">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <LuSearchCheck />
            </InputLeftElement>
            <Input placeholder="Search..." />
          </InputGroup>
        </div>

        <div className="level-btns">
          <button 
              onClick={() => setDifficulty("Beginner")}
              className="level-btn"
            >
              Beginner
            </button>

            <button 
              onClick={() => setDifficulty("Intermediate")}
              className="level-btn"
            >
              Intermediate
            </button>

            <button 
              onClick={() => setDifficulty("Advanced")}
              className="level-btn"
            >
              Advanced
            </button>

            <button 
              onClick={() => setDifficulty("Legendary")}
              className="level-btn"
            >
              Legendary
            </button>
        </div>

        <Box className="about-grid home-card-con">
          <div className="card visible">
            <div className="content">
              <h3>Excel</h3>
              <p>Excel is a spreadsheet tool for organizing, analyzing, and visualizing data.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Excel")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Excel")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Data Modelling</h3>
              <p>Data modelling is the process of structuring and organizing data so it can be stored, understood, and used effectively.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Data Modelling")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Data Modelling")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Data Cleaning</h3>
              <p>Data cleaning is the process of finding and fixing errors, inconsistencies, and missing values in data to make it accurate and usable.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Data Cleaning")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Data Cleaning")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>SQL</h3>
              <p>SQL (Structured Query Language) is a programming language used to manage and query relational databases.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("SQL")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("SQL")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Machine Learning</h3>
              <p>Machine Learning is a branch of AI that enables computers to learn patterns from data and make predictions or decisions without explicit programming.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Machine Learning")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Machine Learning")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Exploratory Data Analysis</h3>
              <p>Exploratory Data Analysis (EDA) is the process of analyzing and summarizing data to uncover patterns, spot anomalies, test hypotheses, and gain insights before formal modeling.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Exploratory Data Analysis")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Exploratory Data Analysis")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Power BI</h3>
              <p>Power BI is a business analytics tool that transforms data into interactive visual reports and dashboards.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Power BI")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Power BI")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Tableau</h3>
              <p>Tableau is a data visualization platform that turns raw data into interactive, shareable dashboards.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Tableau")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Tableau")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>DAX</h3>
              <p>DAX (Data Analysis Expressions) is a formula language used in Power BI, Excel, and other Microsoft tools to create custom calculations and analyze data.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("DAX")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("DAX")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>

          <div className="card visible">
            <div className="content">
              <h3>Report Writing</h3>
              <p>Report writing is the process of creating a structured document that presents information, analysis, and recommendations clearly and formally.</p>
              <div className="btns-box">
                <a 
                  onClick={() => setCategories("Report Writing")} 
                  href="/dashboard" 
                  className="btn card-btn"
                >Quick Play</a>

                <a 
                  onClick={() => setCategories("Report Writing")} 
                  href="/vsbot" 
                  className="btn card-btn"
                >Bot Mode</a>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
    )
}

export default Home