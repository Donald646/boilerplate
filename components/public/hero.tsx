import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Quote } from "lucide-react"

import { cn } from "@/lib/utils";
import Marquee from '../ui/marquee';
import Image from 'next/image';
interface Testimonial {
  name: string
  role: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: "Computer Science Student",
    content: "Academik AI has completely transformed my study routine. The smart flashcards are a game-changer!"
  },
  {
    name: "Michael R.",
    role: "Medical Student",
    content: "The intelligent summaries help me grasp complex medical concepts quickly. It's like having a personal tutor."
  },
  {
    name: "Emily L.",
    role: "High School Senior",
    content: "I've seen a significant improvement in my grades since using Academik AI. The personalized learning paths are amazing!"
  },
  // Add more testimonials here as needed
]

export default function Hero() {
  return (
    <section className="">
      <div className="container px-4 md:px-6">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-center mb-12">
          Wall of Love
        </h2>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      </div>
    </section>
  )
}


const reviews = [
  {
    name: "Tori",
    username: "Student",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Victoria",
    username: "A+ Student",
    body: "This helped me get a 1600 on my SAT",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Vy",
    username: "Student",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jeffrey",
    username: "Student",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "AMAZING Student",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "Student",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm">{body}</blockquote>
    </figure>
  );
};