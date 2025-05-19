import { useState, useRef, SetStateAction } from "react";
import { Camera, Smile, MapPin, Gift, Settings, Image } from "lucide-react";
import Typewriter from "typewriter-effect";
import { ShineBorder } from "./magicui/shine-border";

export default function TweetPost() {
  const [theme, setTheme] = useState("dark");
  const profileImage = "/image.png";
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [postText, setPostText] = useState("");

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const borderColor = theme === "dark" ? "border-gray-800" : "border-gray-200";
  const iconColor = theme === "dark" ? "text-blue-400" : "text-blue-500";

  const handleTypewriterInit = (typewriter: any) => {
    typewriter
      .pauseFor(2000)
      .typeString(
        "I’m Twyt — I learn your voice and write tweets like you.  From product launches to shitposts, I’ve got your timeline covered."
      )
      .callFunction(() => {
        setPostText(
          "I’m Twyt — I learn your voice and write tweets like you.  From product launches to shitposts, I’ve got your timeline covered."
        );
        setShowTypewriter(false);
        setTypingComplete(true);
      })
      .start();
  };

  return (
    <div
      className={`w-xl ${bgColor} ${textColor} p-6 min-h-64 flex flex-col rounded-xl right-0 border ${borderColor}`}
    >
      <div className="flex items-center mb-4">
        <div className="relative mr-2 border rounded-full">
          <img
            src={profileImage}
            alt="User profile"
            className="w-12 h-12 rounded-full cursor-pointer"
          />
        </div>

        <div className="flex-1">
          <div className="relative w-32">
            <button
              className={`px-4 py-1 rounded-full flex items-center justify-between w-full ${borderColor} border`}
            >
              <span className={`font-medium`}>Everyone</span>
              <span className={iconColor}>▼</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-4">
        {showTypewriter ? (
          <div className={`w-full bg-transparent text-xl ${textColor}`}>
            <Typewriter
              onInit={handleTypewriterInit}
              options={{
                delay: 50,
                cursor: "|",
                skipAddStyles: false,
                wrapperClassName: `w-full bg-transparent outline-none text-xl ${textColor}`,
                cursorClassName: `${textColor}`,
              }}
            />
          </div>
        ) : (
          <textarea
            className={`w-full bg-transparent outline-none text-xl resize-none ${textColor}`}
            placeholder="What's happening?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            rows={3}
          />
        )}
      </div>

      <div className={`border-t ${borderColor} pt-4 mt-auto`}>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className={iconColor}>
              <Image size={20} />
            </button>
            <button className={iconColor}>
              <Gift size={20} />
            </button>
            <button className={iconColor}>
              <Camera size={20} />
            </button>
            <button className={iconColor}>
              <Settings size={20} />
            </button>
            <button className={iconColor}>
              <Smile size={20} />
            </button>
            <button className={iconColor}>
              <MapPin size={20} />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white rounded-full px-6 py-2 font-medium">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
