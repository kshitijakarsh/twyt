"use client";

import { useEffect, useState } from "react";
import TaperedLinesBackground from "@/components/HeroBackground";
import Navbar from "@/components/Navbar";
import TweetGenerationFlow from "@/components/TweetGenerationFlow";
import { BorderBeam } from "@/components/magicui/border-beam";
import TweetPost from "@/components/TweetPost";
import KeyFeatures from "@/components/KeyFeatures";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import axios from "axios";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleJoinWaitlist = async () => {
    if (!email || !name) return;

    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://twyt.onrender.com/waitlist", {
        name,
        email,
      });

      if (response.status === 201) {
        setJoined(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error while joining waitlist:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <TaperedLinesBackground />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-radial from-gray-900/20 to-transparent" />

        <div
          className={`relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl w-full mt-16 lg:mt-0 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-white w-full max-w text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Write Tweets That Sound Like You
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              — Only Better
            </h1>
            <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              Our AI enhances your unique voice while keeping your authentic
              style. Stand out with tweets that capture attention and drive
              engagement.
            </p>

            <button className="mt-6 md:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base font-medium rounded-md border border-gray-800 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-70">
                <span className="absolute bg-white button-line"></span>
              </span>
            </button>
          </div>

          <div className="relative p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-md mt-8 lg:mt-0 bg-black/70 backdrop-blur-sm overflow-hidden border border-gray-800 shadow-xl shadow-black/30">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/10" />
            <BorderBeam
              className="w-full h-full"
              colorFrom="#888888"
              colorTo="#ffffff"
            />
            <div className="relative z-10">
              {!joined ? (
                <>
                  <h2 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
                    Start Writing Better Tweets
                  </h2>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center text-xs sm:text-sm">
                    Transform your ideas into engaging tweets that maintain your
                    unique voice and connect with your audience.
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 text-sm"
                    />

                    <button
                      onClick={handleJoinWaitlist}
                      disabled={loading || !email || !name}
                      className={`w-full py-2 sm:py-3 bg-black text-white text-sm font-medium rounded-md border border-gray-800 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 relative overflow-hidden ${
                        loading || !email || !name
                          ? "opacity-60 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {loading ? (
                          <>
                            <span className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent"></span>
                            <span>Joining...</span>
                          </>
                        ) : (
                          "Join Waitlist"
                        )}
                      </span>
                    </button>

                    {error && (
                      <p className="text-xs sm:text-sm text-red-400 mt-2">
                        {error}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="mb-4 sm:mb-6 flex items-center justify-center bg-white/10 p-3 sm:p-4 rounded-full">
                    <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                  </div>
                  <h2 className="text-white text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-center">
                    You're on the Waitlist!
                  </h2>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm">
                    Thanks for joining! We'll notify you when you can start
                    creating better tweets.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-gray-500/5 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-gray-400/5 blur-3xl"></div>
      </div>

      <div className="bg-black w-full px-4 sm:px-6 py-12 sm:py-16 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-screen-xl w-full">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              Struggling with what to tweet?
            </h1>
            <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Twyt learns your unique voice and generates tweets that sound just
              like you. Never run out of things to say again.
            </p>
          </div>
          <div className="w-full md:w-auto mt-6 mb-10 md:mt-0 flex justify-center">
            <TweetPost />
          </div>
        </div>
      </div>

      <TweetGenerationFlow />
      <KeyFeatures />
      <Footer />
    </div>
  );
}
