import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
export default function FAQ() {
  return (
    <section id="faq" className="w-full ">
    <div className="container px-4 md:px-6">
      <h2 className="text-5xl lg:text-6xl font-bold tracking-tighter sm:text-5xl text-center mb-12">FAQ</h2>
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto text-lg ">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does Academik AI work?</AccordionTrigger>
          <AccordionContent>
            Academik AI uses generative AI to analyze your learning style, progress, and goals. It then creates personalized study materials and recommendations to help you learn more effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is my data safe with Academik AI?</AccordionTrigger>
          <AccordionContent>
            Yes, we take data privacy very seriously. All your personal information and study data is encrypted and stored securely. We never share your data with third parties without your explicit consent.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use Academik AI for any subject?</AccordionTrigger>
          <AccordionContent>
            Academik AI is designed to work with a wide range of subjects, from mathematics and sciences to humanities and languages. Our AI adapts to the specific requirements of each subject to provide the most relevant study tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How often is Academik AI updated?</AccordionTrigger>
          <AccordionContent>
            We continuously improve our AI algorithms and add new features based on user feedback and the latest advancements in educational technology. You can expect regular updates and new tools to enhance your learning experience.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
  )
}
