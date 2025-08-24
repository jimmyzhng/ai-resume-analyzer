import React from "react";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion";

interface Tip {
  type: "good" | "improve";
  tip: string;
  explanation: string;
}

interface Feedback {
  overallScore: number;
  toneAndStyle: {
    score: number;
    tips: Tip[];
  };
  content: {
    score: number;
    tips: Tip[];
  };
  structure: {
    score: number;
    tips: Tip[];
  };
  skills: {
    score: number;
    tips: Tip[];
  };
}

interface DetailsProps {
  feedback: Feedback;
}

// Helper component
const ScoreBadge = ({ score }: { score: number }) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        background: "bg-green-100",
        text: "text-green-700",
        icon: "/icons/check.svg",
      };
    } else if (score > 39) {
      return {
        background: "bg-yellow-100",
        text: "text-yellow-700",
        icon: "/icons/warning.svg",
      };
    } else {
      return {
        background: "bg-red-100",
        text: "text-red-700",
        icon: "/icons/warning.svg",
      };
    }
  };

  const styles = getBadgeStyles();

  return (
    <div className={cn("flex items-center gap-2 px-3 py-1 rounded-full", styles.background)}>
      <img src={styles.icon} alt="score indicator" className="w-4 h-4" />
      <span className={cn("text-sm font-medium", styles.text)}>{score}/100</span>
    </div>
  );
};

// Helper component
const CategoryHeader = ({ title, categoryScore }: { title: string; categoryScore: number }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

// Helper component
const CategoryContent = ({ tips }: { tips: Tip[] }) => {
  return (
    <div className="space-y-6">
      {/* Two-column grid for tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
              alt={tip.type}
              className="w-5 h-5 mt-0.5 flex-shrink-0"
            />
            <p className={cn("text-sm", tip.type === "good" ? "text-green-700" : "text-amber-700")}>
              {tip.tip}
            </p>
          </div>
        ))}
      </div>

      {/* Explanation boxes */}
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={cn(
              "p-4 rounded-lg border-l-4",
              tip.type === "good"
                ? "bg-green-50 border-green-400"
                : "bg-amber-50 border-amber-400"
            )}
          >
            <h4 className={cn("font-medium mb-2", tip.type === "good" ? "text-green-800" : "text-amber-800")}>
              {tip.tip}
            </h4>
            <p className={cn("text-sm", tip.type === "good" ? "text-green-700" : "text-amber-700")}>
              {tip.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: DetailsProps) => {
  const categories = [
    {
      id: "tone-style",
      title: "Tone & Style",
      score: feedback.toneAndStyle.score,
      tips: feedback.toneAndStyle.tips,
    },
    {
      id: "content",
      title: "Content",
      score: feedback.content.score,
      tips: feedback.content.tips,
    },
    {
      id: "structure",
      title: "Structure",
      score: feedback.structure.score,
      tips: feedback.structure.tips,
    },
    {
      id: "skills",
      title: "Skills",
      score: feedback.skills.score,
      tips: feedback.skills.tips,
    },
  ];

  return (
    <div className="w-full">
      <Accordion defaultOpen="tone-style" allowMultiple={true}>
        {categories.map((category) => (
          <AccordionItem key={category.id} id={category.id}>
            <AccordionHeader itemId={category.id}>
              <CategoryHeader title={category.title} categoryScore={category.score} />
            </AccordionHeader>
            <AccordionContent itemId={category.id}>
              <CategoryContent tips={category.tips} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Details;
