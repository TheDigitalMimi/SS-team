import { useState } from "react";
import ResultsPage from "./components/results/ResultsPage";

export default function App() {
  const [businesses] = useState([
    {
      id: "biz-1",
      name: "SolvedSuite Demo Business",

      core: {
        businessPlan: `This is a full business plan created by SolvedSuite.
It outlines the model, revenue streams, startup steps, and long-term growth strategy.`,

        swotAnalysis: `Strengths: Clear value proposition
Weaknesses: New market entry
Opportunities: Growing demand for AI-driven planning
Threats: Traditional consultants and generic tools`,

        keywordResearch: {
          primary: ["business planning software", "AI business tools"],
          secondary: ["startup automation", "online business help"],
          longTail: [
            "how to start a business with no money",
            "AI tools for small business owners",
            "business planning software for beginners"
          ],
          local: ["South Carolina small business services"]
        },

        targetCustomers: `Entrepreneurs, solopreneurs, and small business owners
who want guidance without agency-level costs.`,

        branding: `Tone: Professional, supportive, confident
Colors: Teal, navy, white
Fonts: Clean sans-serif
Tagline: Your business, solved.`,

        competitorAnalysis: `Competitors include consultants and one-off AI tools.
SolvedSuite delivers a full, structured business package instead.`,

        financialProjections: `Estimated monthly revenue: $5,000–$15,000
Low overhead, scalable model, strong margins.`
      },

      growth: {
        adSets: [
          {
            id: "adset-1",
            images: [
              {
                imageUrl: "https://via.placeholder.com/400x300",
                headline: "Build Smarter",
                copy: "Let SolvedSuite handle the planning.",
                cta: "Get Started",
                platform: "Facebook"
              },
              {
                imageUrl: "https://via.placeholder.com/400x300",
                headline: "Your Business, Solved",
                copy: "Everything you need in one place.",
                cta: "Learn More",
                platform: "Instagram"
              },
              {
                imageUrl: "https://via.placeholder.com/400x300",
                headline: "Skip the Guesswork",
                copy: "A full business plan, done for you.",
                cta: "Try It Now",
                platform: "Google Ads"
              }
            ]
          }
        ],

        contentCalendar: `Week 1:
• Introduction post
• Problem awareness
• Value teaser

Week 2:
• Educational post
• Tip-based content
• Soft CTA

Week 3:
• Social proof
• FAQ
• Reminder

Week 4:
• Offer highlight
• Recap
• Next steps`
      }
    }
  ]);

  const [activeBusinessId, setActiveBusinessId] = useState(businesses[0].id);

  return (
    <ResultsPage
      businesses={businesses}
      activeBusinessId={activeBusinessId}
      setActiveBusinessId={setActiveBusinessId}
    />
  );
}
