import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import ButtonLead from "./ButtonLead";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 bg-customWhite">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight md:-mb-4 text-black *:leading-10">
          <span className="bg-black text-customWhite">Build an Audience</span> by writing your thoughts
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Write down your <span className="font-bold">thoughts</span> and AI will create <span className="font-bold">ready to post x threads</span> for you to share.
        </p>
        <ButtonLead />
      </div>
      <div className="lg:w-full">
        <Image
          src="/assets/twitter-message.jpg"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
