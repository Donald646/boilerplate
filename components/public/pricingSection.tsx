'use client'

import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckIcon, MinusIcon, Tag, ZapIcon } from "lucide-react"
import CheckoutButton from "../subscriptions/checkoutButton"
import { Button } from "../ui/button"
import CTA from './cta'
import Link from 'next/link'

interface PlanFeature {
  type: string
  features: {
    name: string
    free: string
    premium: string
    enterprise: string
  }[]
}

const planFeatures: PlanFeature[] = [
  {
    type: "Features",
    features: [
      {
        name: "AI-assisted study tools",
        free: "true",
        premium: "true",
        enterprise: "true",
      },
      {
        name: "Flashcards per month",
        free: "10",
        premium: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Study sets per month",
        free: "3",
        premium: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Performance analytics",
        free: "Basic",
        premium: "Advanced",
        enterprise: "Custom",
      },
      {
        name: "Custom integrations",
        free: "false",
        premium: "false",
        enterprise: "true",
      },
    ],
  },
]

interface PricingSectionProps {
  isTable: boolean
  showCTA?: boolean
}

export default function PricingSectionCards({ isTable, showCTA = true }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingPlans = [
    {
      name: "Free",
      price: isAnnual ? "$0" : "$0",
      period: isAnnual ? "/year" : "/month",
      description: "Start for free",
      features: [
        "All AI-assisted study tools",
        "10 Trial Messages",
        "3 Study Sets",
      ],
      checkoutOption: 2,
      highlight: false,
    },
    {
      name: "Premium",
      price: isAnnual ? "$99.99" : "$9.99",
      period: isAnnual ? "/year" : "/month",
      description: "Ideal for dedicated learners",
      discount: "Get your first month 50% off!",
      features: [
        "Unlimited AI messages",
        "Unlimited study sets",
        "Advanced performance analytics",
        "Priority support"
      ],
      checkoutOption: 0,
      highlight: true,
    },
    {
      name: "Schools",
      price: "Custom",
      period: "",
      description: "Tailored for schools",
      features: [
        "All Premium features",
        "Custom integrations",
        "Dedicated account manager",
        "Customized analytics",
        "24/7 priority support"
      ],
      checkoutOption: null,
      highlight: false,
    },
  ]

  return (
    <div className="container">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-16">
        <p className='text-primary font-semibold text-lg sm:text-xl flex gap-2 items-center'><Tag/> Choose your plan</p>
        <br/>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-left">
          Cut your study time in half. Start free.
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 text-left">
          Our AI-centered study tool helps you learn more effectively. No credit card required.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
        <Card key={index} className={`flex flex-col w-full md:w-1/3 ${plan.highlight ? 'border-blue-500 shadow-lg' : ''}`}>
        <CardHeader className='relative'>
          {plan.highlight && (
            <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
              Most Popular
            </Badge>
          )}
          <CardTitle className="text-xl sm:text-2xl font-bold">{plan.name}</CardTitle>
          <div className="mt-4 mb-2">
            <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
            <span className="text-sm sm:text-base text-muted-foreground">{plan.period}</span>
          </div>
          <CardDescription className="text-sm sm:text-base">
            {plan.description}
            {plan.discount && (
              <p className="text-green-500 font-semibold mt-2">{plan.discount}</p>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {plan.checkoutOption !== null ? (
            <CheckoutButton
              className="w-full text-sm sm:text-base mb-4"
              variant={plan.highlight ? "default" : "outline"}
              option={plan.checkoutOption}
            >
              {plan.highlight && <ZapIcon className="mr-2 h-4 w-4" />}
              {plan.highlight ? "Upgrade Your Learning" : "Get Started"}
            </CheckoutButton>
          ) : (
            <Link href="https://cal.com/donaldchu/30min" target="_blank">
             <Button className="w-full text-sm sm:text-base mb-4" variant="outline">
              Contact Sales
            </Button>
            </Link>
          )}
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm sm:text-base">
                <CheckIcon className="text-blue-500 mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
        ))}
      </div>

      {isTable && (
        <div className="mt-24 max-w-6xl mx-auto mb-12 md:mb-24">
          <h3 className="text-2xl font-semibold text-left mb-8">Compare Plan Features</h3>
          <div className="overflow-x-auto">
            <Table className="w-full rounded-lg">
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="w-1/3">Features</TableHead>
                  <TableHead className="text-center">Free</TableHead>
                  <TableHead className="text-center">Premium</TableHead>
                  <TableHead className="text-center">Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures[0].features.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">
                      {feature.free === "true" ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-blue-500" />
                      ) : feature.free === "false" ? (
                        <MinusIcon className="mx-auto h-5 w-5 text-muted-foreground" />
                      ) : (
                        feature.free
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.premium === "true" ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-blue-500" />
                      ) : feature.premium === "false" ? (
                        <MinusIcon className="mx-auto h-5 w-5 text-muted-foreground" />
                      ) : (
                        feature.premium
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.enterprise === "true" ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-blue-500" />
                      ) : feature.enterprise === "false" ? (
                        <MinusIcon className="mx-auto h-5 w-5 text-muted-foreground" />
                      ) : (
                        feature.enterprise
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
      {showCTA? <CTA/> : null
    }
    </div>
  )
}