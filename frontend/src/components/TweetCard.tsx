import { MessageCircle, Repeat2, Heart, BarChart2 } from "lucide-react";
import { useState } from "react";

interface TweetCardProps {
  tweetContent: string;
}

export default function TweetCard({ tweetContent }: TweetCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [isReplied, setIsReplied] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const [likeCount, setLikeCount] = useState(348);
  const [retweetCount, setRetweetCount] = useState(105);
  const replyCount = 24;
  const viewCount = 2804;

  const tweet = {
    profileImage: "/image.png",
    name: "twyt",
    username: "@twyt",
    timestamp: "2h",
    content: tweetContent,
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweetCount(isRetweeted ? retweetCount - 1 : retweetCount + 1);
  };

  const handleReply = () => {
    setIsReplied(!isReplied);
  };


  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <div className="p-4">
        <div className="flex items-start">
          <img
            className="h-12 w-12 rounded-full mr-4 object-cover"
            src={tweet.profileImage}
            alt="Profile"
          />
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-bold text-gray-900 dark:text-white mr-1">
                {tweet.name}
              </span>
              <span className="text-gray-500 ml-2">{tweet.username}</span>
              <span className="text-gray-500 mx-1">·</span>
              <span className="text-gray-500">{tweet.timestamp}</span>
            </div>

            <p className="text-gray-800 dark:text-gray-200 mb-2">
              {tweet.content}
            </p>

            <div className="flex justify-between text-gray-500 mt-3">
              <button
                onClick={handleReply}
                className={`flex items-center cursor-pointer transition-colors ${
                  isReplied ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                <span className="ml-2 text-sm">{replyCount}</span>
              </button>

              <button
                onClick={handleRetweet}
                className={`flex items-center cursor-pointer transition-colors ${
                  isRetweeted ? "text-green-500" : "hover:text-green-500"
                }`}
              >
                <Repeat2 className="h-5 w-5" />
                <span className="ml-2 text-sm">{retweetCount}</span>
              </button>

              <button
                onClick={handleLike}
                className={`flex items-center cursor-pointer transition-colors ${
                  isLiked ? "text-red-500" : "hover:text-red-500"
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span className="ml-2 text-sm">{likeCount}</span>
              </button>

              <button
                className={`flex items-center cursor-pointer transition-colors ${
                  isViewed ? "text-blue-500" : "hover:text-blue-500"
                }`}
              >
                <BarChart2 className="h-5 w-5" />
                <span className="ml-2 text-sm">{viewCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
