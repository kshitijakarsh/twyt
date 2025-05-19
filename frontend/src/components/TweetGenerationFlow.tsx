"use client";
import { MoveRight } from "lucide-react";
import { useState } from "react";
import TaperedLinesBackground from "@/components/HeroBackground";
import { ShineBorder } from "./magicui/shine-border";
import TweetCard from "./TweetCard";

export default function TweetGenerationFlow() {
  const [tweet, setTweet] = useState("");

  const handleTweetClick = (content: any) => setTweet(content);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 flex flex-col items-center bg-black/60 overflow-hidden h-screen">
      <div className="absolute inset-0 -z-10">
        <TaperedLinesBackground />
      </div>
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-gray-900/25 to-transparent" />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 max-w-xl">
        How It Works
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-5xl mx-auto">
        <div className="group relative w-64 h-80 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl z-10 pointer-events-none absolute inset-0"
          />

          <img
            src="/learning.jpg"
            alt="Learning"
            className="w-full h-full object-cover rounded-xl border border-gray-700 z-0 transform transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />

          <h1
            className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 
               text-center font-mono text-white text-sm z-30
               opacity-0 group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-500 ease-in-out"
          >
            We learn from you
          </h1>
        </div>

        <MoveRight
          className="w-8 h-8 text-gray-400 hidden md:block self-center"
          aria-hidden="true"
          strokeWidth={2}
        />

        <div className="group relative w-64 h-80 rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl pointer-events-none absolute inset-0 z-10"
          />

          <img
            src="/your_model.jpg"
            alt="Model"
            className="w-full h-full object-cover rounded-xl border border-gray-700 z-0 transform transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-20" />

          <h1
            className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 
               text-center font-mono text-white text-sm z-30
               opacity-0 group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-500 ease-in-out"
          >
            We create a model to represent you
          </h1>
        </div>

        <MoveRight
          className="w-8 h-8 text-gray-400 hidden md:block self-center"
          aria-hidden="true"
          strokeWidth={2}
        />

        <div className="relative w-64 h-80 rounded-xl overflow-hidden">
          <ShineBorder
            shineColor={["#2D2D2D", "#7D7D7D", "#BFBFBF"]}
            className="rounded-xl"
          />
          <div className="w-full h-full flex flex-col gap-3 justify-center px-4 py-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700">
            <h2 className="text-white text-sm text-center mb-1 z-10 relative">
              Choose your tweet tone
            </h2>
            <button
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "Been playing around with agents lately. Made one that actually learns from your tweets and then writes like you. It's scary good. Teaching it sarcasm now. Wish me luck."
                )
              }
            >
              Tech Related
            </button>
            <button
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "Just launched twyt — an AI agent that learns from your Twitter and tweets like you. Think of it as your digital twin, but slightly more productive. Try it out, judge me later."
                )
              }
            >
              Launch Tweet
            </button>
            <button
              className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md border border-gray-700 hover:shadow-lg hover:shadow-white/10 transition duration-300 z-10 relative"
              onClick={() =>
                handleTweetClick(
                  "ngl if twyt tweets better than me I'm suing myself for identity theft"
                )
              }
            >
              I wanna shitpost today
            </button>
          </div>
        </div>
      </div>

      {tweet && (
        <div className="mt-16 w-full max-w mx-auto">
          <TweetCard tweetContent={tweet} />
        </div>
      )}
    </section>
  );
}
