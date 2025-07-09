"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { useState } from "react";

const services = [
  {
    title: "Flutter App Development",
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience? ",
    linkText: "Let's get started today!",
    link: "#",
  },
  { title: "UI/UX Design" },
  { title: "Customization & Integration" },
  { title: "Testing & Quality Assurance" },
  { title: "Maintenance & Support" },
  { title: "Consulting & Training" },
  { title: "Migration & Upgrades" },
];

export default function Accordian() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div>
      {services.map((service, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <Accordion
            key={index}
            expanded={isExpanded}
            onChange={() =>
              setExpandedIndex(isExpanded ? -1 : index)
            }
            sx={{
              backgroundColor: "transparent",
              color: "white",
              boxShadow: "none",
              borderBottom: "1px solid #333",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={
                <span style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}>
                  {isExpanded ? "−" : "+"}
                </span>
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "26px",
                  fontWeight: 500,
                }}
              >
                {service.title}
              </Typography>
            </AccordionSummary>

            {service.description && (
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "var(--font-quicksand)",
                    fontSize: "14px",
                    color: "#CCCCCC",
                    fontWeight: 500,
                  }}
                >
                  {service.description}{" "}
                  <a
                    href={service.link}
                    style={{
                      color: "#08A7CE",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    {service.linkText}
                  </a>
                </Typography>
              </AccordionDetails>
            )}
          </Accordion>
        );
      })}
    </div>
  );
}
