'use client'

import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import CheckoutButton from '../subscriptions/checkoutButton'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Free",
      monthlyPrice: "0",
      yearlyPrice: "0",
      description: "Start your learning journey here.",
      features: [
        "1 dedicated space to organize your content",
        "5 messages per day with the AI co-pilot",
        "Add up to 3 YouTube videos or PDFs per week",
        "Upload PDFs, each up to 20 MB in size"
      ],
      cta: "Get Started",
      highlight: false,
      monthlyOption: 2,
      yearlyOption: 2
    },
    {
      name: "Pro",
      monthlyPrice: "30",
      yearlyPrice: "12",
      description: "Elevate your learning journey to the highest level.",
      features: [
        "Unlimited spaces to organize your content",
        "Unlimited multimodal messages with the AI co-pilot",
        "Unlimited YouTube videos or PDFs",
        "Upload PDFs, each up to 50 MB in size",
        "Unlimited flashcards for active recall"
      ],
      cta: "Choose Pro",
      highlight: true,
      monthlyOption: 0,
      yearlyOption: 3
    },
    {
      name: "Core",
      monthlyPrice: "20",
      yearlyPrice: "8",
      description: "Accelerate your learning journey with premium resources.",
      features: [
        "3 spaces to organize your content",
        "15 multimodal messages per day with the AI co-pilot",
        "Add up to 10 YouTube videos or PDFs per week",
        "Upload PDFs, each up to 20 MB in size",
        "Unlimited flashcards for active recall"
      ],
      cta: "Choose Core",
      highlight: false,
      monthlyOption: 1,
      yearlyOption: 4
    }
  ]

  return (
    <div className="container mx-auto px-10 py-16 tracking-tight">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Tagline</h2>
        <p className="text-xl text-muted-foreground mb-6">Unlock your potential with our flexible pricing options</p>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <Label htmlFor="billing-switch" className={isAnnual ? "text-muted-foreground" : ""}>Pay Monthly</Label>
        <Switch
          id="billing-switch"
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <Label htmlFor="billing-switch" className={!isAnnual ? "text-muted-foreground" : ""}>
          Pay Yearly
          <Badge variant="secondary" className="ml-2 w-fit">SAVE 60%</Badge>
        </Label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <Card key={index} className={`flex flex-col p-6 py-4 ${plan.highlight ? 'border-green-500' : ''}`}>
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
              <div className="mt-4 mb-2">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground">/ month</span>
              </div>
              {plan.name === "Free" && (
                <p className="text-sm text-muted-foreground">Not billed, obviously.</p>
              )}
              {plan.name === "Pro" && isAnnual && (
                <Badge variant="secondary" className="mt-2 w-fit bg-green-600">SAVING 60%</Badge>
              )}
              {plan.name !== "Free" && (
                <p className="text-sm text-muted-foreground mt-2">
                  Billed {isAnnual ? "Annually" : "Monthly"}.
                </p>
              )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ul className="space-y-5 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <CheckIcon className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CheckoutButton 
                option={isAnnual ? plan.yearlyOption : plan.monthlyOption}
                variant={plan.highlight ? "default" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </CheckoutButton>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PricingSection