import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { AnimatedLabelWrapper } from './animatedLabelWrapper';
import { AvatarHero } from './avatarHero';
import WordRotate from '../ui/word-rotate';
import { ChevronRight, MoveRightIcon } from 'lucide-react';
import BlurFade from '../ui/blur-fade'

export default function Lander() {
  return (
    <section className="text-center space-y-6 pt-[8vh] px-4 relative overflow-hidden">

      <BlurFade delay={0.25} inView className='space-y-3'>
        <Link href="/study-sets">
        <AnimatedLabelWrapper text={"✨ Introducing Study Sets"}/>
        </Link>
        <h1 className="flex flex-col items-center text-5xl md:text-[80px] xl:text-8xl font-bold leading-tight">
  <span>Upload, Learn, Excel:</span>
  <span className="flex flex-wrap items-center justify-center">
    Get{" "}
    <WordRotate
      className="text-primary mx-4"
      words={["flashcards", "notes", "quizzes", "a tutor"]}
    />{" "}
    in seconds
  </span>
</h1>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/60 font-medium">
    Upload your study materials and get all the tools needed for you to succeed. Learn smarter not harder.
        </p>
      </BlurFade>

      <BlurFade delay={0.65} inView>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Link href="/dashboard">
<Button size={"lg"} className='text-xl font-semibold pr-5'>Try it Free <ChevronRight className='ml-2' /></Button>
          </Link>
          <AvatarHero/>

        </div>
      </BlurFade>

      <BlurFade delay={.85} inView>
        <div className="mt-15 px-4 relative z-10">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border-black/30 border-4">
            <Image
              src="/landingPage.png"
              alt="Academik AI Dashboard"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </BlurFade>

{/* <DotPattern
        width={32}
        height={32}
        cx={16}
        cy={16}
        cr={1.5}
        className={cn(
          "absolute inset-x-0 -top-[8vh] -z-10 h-[calc(100%+16vh)]",
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        )}
      /> */}
     
    </section>
  )
}
