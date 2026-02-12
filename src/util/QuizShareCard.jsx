import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import confetti from "canvas-confetti";

import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook
} from "react-icons/fa"

const getBadgeEmoji = (percentage) => {
  if (percentage >= 90) return "🏆";
  if (percentage >= 70) return "🔥";
  if (percentage >= 50) return "👏";
  return "💪";
};

// Quiz Share Card Component
const QuizShareCard = ({ score, questions, categories }) => {
  const navigate = useNavigate();
  const [percentage, setpercentage] = useState(Math.round((score / questions.length) * 100))
    

  const result = {
    percentage: Math.round((score / questions.length) * 100),
    title: "My Dataxo Quiz Result!",
    message: `I scored ${Math.round((score / questions.length) * 100)}% on the Dataxo ${categories} Quiz! Can you beat me? 😎`,
    url: "https://dataxo.cfd/home"
  };

  // 🎉 Confetti on high score
  useEffect(() => {
    if (percentage >= 70) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
    });
    } else {
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { y: 0.6 }
    })
    }
  }, [percentage]);

  // Smart share function
  const share = async (platform = null) => {
    const fullText = `${result.message} ${result.url}`;

    const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullText)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(result.message)}&url=${encodeURIComponent(result.url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(result.url)}&quote=${encodeURIComponent(result.message)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(result.url)}`
    };

    if (platform && shareLinks[platform]) {
    window.open(shareLinks[platform], "_blank", "width=600,height=500");
    return;
    }

    if (navigator.share) {
    try {
        await navigator.share({
        title: result.title,
        text: result.message,
        url: result.url
        });
        return;
    } catch (err) {
        console.error(err);
    }
    }

    try {
    await navigator.clipboard.writeText(fullText);
    alert("Link copied! Share it anywhere 🚀");
    } catch {
    alert("Sharing not supported on this device.");
    }
  };

  const goToDashboard = () => {
    setpercentage(0)
    navigate('/dashboard')
  }

  return (
    <div className="quiz-share-card">
      <div className="badge">
        <h1>{getBadgeEmoji(percentage)}</h1>
        <h2>{result.percentage}<span>%</span></h2>
        <p>Great Job!</p>
      </div>

      <div className="share-msg">
        <p>{result.message}</p>
      </div>

      <div 
        onClick={() => share()} 
        className="quick-share-btn"
      >
        <button>Quick Share</button>
      </div>

      <div className="share-buttons">
        <button onClick={() => share("whatsapp")}><FaWhatsapp /></button>
        <button onClick={() => share("twitter")}><FaTwitter /></button>
        <button onClick={() => share("facebook")}><FaFacebook /></button>
        <button onClick={() => share("linkedin")}><FaLinkedinIn /></button>
      </div>

      <div className="other-share-btn">
        <div className="other-share-btn-left">
          Try Again
        </div>

        <div 
          className="other-share-btn-right"
          onClick={goToDashboard}
        >
          Go to Dashboard
        </div>
      </div>
    </div>
  );
};

export default QuizShareCard;