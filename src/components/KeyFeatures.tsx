import Image from "next/image";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";
import { X, Zap, Clock, Shield, Smile, icons } from "lucide-react";
import TaperedLinesBackground from "./HeroBackground";
import { ShineBorder } from "./magicui/shine-border";

const features = [
  {
    icon: X,
    title: "Personalized Tweets",
    description:
      "Twyt learns your voice and crafts tweets that sound just like you.",
    className: "md:col-span-1",
    background: (
      <Image
        src="/img1.png"
        alt="Learning"
        fill
        className="object-cover rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
      />
    ),
  },
  {
    icon: Zap,
    title: "Instant Ideas",
    description: "Get real-time tweet suggestions to keep your timeline fresh.",
    className: "md:col-span-1",
    background: (
      <Image
        src="/realtime.png"
        alt="Learning"
        fill
        className="object-cover rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
      />
    ),
  },
  {
    icon: Clock,
    title: "Auto Scheduling",
    description:
      "Set tweets to post automatically, so you never miss a moment.",
    className: "md:col-span-1",
    background: (
      <Image
        src="/schedule.png"
        alt="Learning"
        fill
        className="object-cover rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
      />
    ),
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data is secure and private — no data leaves your device.",
    className: "md:col-span-2",
    background: (
      <Image
        src="/security.png"
        alt="Learning"
        fill
        className="object-cover rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
      />
    ),
  },
  {
    icon: Smile,
    title: "Easy to Use",
    description: "A sleek, intuitive interface makes tweeting effortless.",
    className: "md:col-span-1",
    background: (
      <Image
        src="/start.png"
        alt="Learning"
        fill
        className="object-cover rounded-xl opacity-20 group-hover:opacity-30 transition duration-300"
      />
    ),
  },
];

export default function KeyFeatures() {
  return (
    <>
      <section className="relative bg-black py-16 px-4 md:px-8 w-full overflow-hidden min-h-screen flex flex-col justify-center pb-44" >
        <div className="absolute inset-0 w-full h-full -z-10">
          <TaperedLinesBackground />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600 max-w">
          Key Features
        </h1>

        <div className="relative z-10 max-w-6xl max-h-1/2 mx-auto w-full p-2">
          <BentoGrid className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(
              ({ icon: Icon, title, description, className, background }) => (
                <BentoCard
                  key={title}
                  className={`${className} group hover:bg-gray-800/50 bg-gray-900/30 backdrop-blur-md border border-gray-800 transition-all duration-300 rounded-xl p-4 !text-white`}
                  title={title}
                  description={description}
                  Icon={Icon} // smaller icon size
                  background={background}
                  name={""}
                  href={""}
                  cta={""}
                />
              )
            )}
          </BentoGrid>
        </div>
      </section>

      <style jsx global>{`
        .group button,
        .group a {
          display: none !important;
          pointer-events: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          user-select: none !important;
        }

        /* Optionally reduce font size inside BentoCard title and description if you can override those */
        /* Assuming BentoCard uses h3 for title and p for description */
        .group h3 {
          font-size: 1rem !important;
          margin-bottom: 0.5rem !important;
        }
        .group p {
          font-size: 0.875rem !important;
        }
      `}</style>
    </>
  );
}
