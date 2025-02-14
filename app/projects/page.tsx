"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce platform using Next.js and Fake Store API.",
    image: "/projects/ecommerce.jpg",
    demo: "https://ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Kanban Board",
    description: "A Trello-like Kanban board built with Next.js and React DnD.",
    image: "/projects/kanban.jpg",
    demo: "https://kanban-demo.com",
    github: "https://github.com/yourusername/kanban",
  },
  {
    title: "NFT Warranty System",
    description: "Blockchain-based warranty system using Next.js and Solidity.",
    image: "/projects/nft.jpg",
    github: "https://github.com/yourusername/nft-warranty",
  },
  {
    title: "GoRegex",
    description: "A regex testing tool built using Go and React.",
    image: "/projects/goregex.jpg",
    github: "https://github.com/yourusername/goregex",
  },
  {
    title: "Mail Client",
    description: "A modern email client built with MERN stack.",
    github: "https://github.com/yourusername/mail-client",
  },
  {
    title: "Portfolio",
    description: "My personal portfolio built using Next.js and Tailwind CSS.",
    github: "https://github.com/yourusername/portfolio",
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4 flex gap-4">
                {project.demo && (
                  <Button asChild variant="default">
                    <a href={project.demo} target="_blank">Live Demo</a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <a href={project.github} target="_blank">GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
