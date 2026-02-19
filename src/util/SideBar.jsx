import { 
  Box
} from "@chakra-ui/react";

import { 
  FaHouse,
  FaRetweet,
  FaBookOpenReader,
  FaRegFileLines 
} from "react-icons/fa6";

const SideBar = () => {

  return (
    <Box className="sidebar-box">
      <div className="logo">
        <a href="/">Dataox</a>
      </div>

      <div className="icons">
        <div>
          <a href="/dashboard"><FaHouse /></a>
        </div>
        <div>
          <a href="/search"><FaRetweet /></a>
        </div>
        <div>
          <a href="/settings"><FaBookOpenReader /></a>
        </div>
        <div>
          <a href="/settings"><FaRegFileLines /></a>
        </div>
      </div>
    </Box>
  )
}

export default SideBar