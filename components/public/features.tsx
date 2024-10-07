import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Supercharge Your Study Materials with AI",
    description: [
      "Upload PDFs, videos, or other study materials effortlessly.",
      "Get AI-generated flashcards, quizzes, and a smart chatbot.",
      "Transform any content into a powerful, interactive study toolkit.",
    ],
    image: "/uploadMaterialFeature.png",
  },
  {
    title: "Study any youtube video with our tools",
    description: [
      "Input the url and turn YouTube videos into learning experiences",
      "Interact with an AI chatbot to discuss video concepts.",
      "Receive a detailed study guide summarizing key points.",
    ],
    image: "/videoGPTFeature.png",
  },
];

export default function Features() {
  return (
    <section className="w-full">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">
Study <span className='text-primary'>smarter</span>,<br className=''/> not harder
        </h1>
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 mb-20 `}>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
                {feature.title}
              </h2>
              <ul className="space-y-4">
                {feature.description.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                    <span className="text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <Card className="overflow-hidden aspect-[4/3]">
                <CardContent className="p-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover "
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}