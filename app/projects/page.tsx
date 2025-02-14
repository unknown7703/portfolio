"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "NoteMan",
    description: "A complete and modern note-making solution with team collaboration",
    image: "/noteman.png",
    demo: "https://noteman.vercel.app/",
    github: "https://github.com/unknown7703/noteman",
  },
  {
    title: "Scire AI",
    description: "A cursor for researchers to help them streamline their knowledge discovery process by integrating AI chat into a PDF reader",
    image: "/scire.png",
    demo: "https://scireai.vercel.app/",
    github: "https://github.com/unknown7703/scireai",
  },
  {
    title: "Deliver E",
    description: "A delivery optimization and visualization service for e-commerce chains",
    image: "/delivere.png",
    github: "https://github.com/unknown7703/deliverefront",
  },
  {
    title: "Neo Kanban",
    description: "An easy-to-use, lightweight, and fast Kanban board",
    image: "/kanban.png",
    github: "https://github.com/unknown7703/21bbs0122quick",
  },
  {
    title: "goRegex",
    description: "A rudimentary regex engine made in Golang using finite automata theory",
    github: "https://github.com/unknown7703/goRegex",
  },
  {
    title: "Block It",
    description: "A Manifest V3 site blocklist extension for improving productivity",
    github: "https://github.com/unknown7703/blockit",
  },
];

export default function Projects() {
  return (
    <div className="h-auto bg-background bg-[radial-gradient(#212121_1px,transparent_1px)] dark:bg-[radial-gradient(#212121_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>

        <div className="grid grid-cols-1 pt-4 md:pt-4 p-4 md:p-32 md:grid-cols-2 gap-14 md:gap-20">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover object-top rounded-t-lg"
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
    </div>
  );
}
