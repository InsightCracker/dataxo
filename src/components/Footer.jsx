import { 
    Box
} from "@chakra-ui/react";

const Footer = () => {
    return (
    <Box className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h2>Dataxo</h2>
                <p>Your Complete Data Learning Hub</p>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <a href="#hero">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                </ul>
            </div>
        </div>

      <div className="footer-bottom">
        <p>© <span id="year">2026</span> Dataxo. All rights reserved.</p>
      </div>
    </Box>
    )
}

export default Footer;