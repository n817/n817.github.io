import type { Project } from "../types";
import BaseAIImg from "../assets/projects/BaseAI.png";
import SpotsImg from "../assets/projects/Spots.jpeg";
import ToDoImg from "../assets/projects/ToDo.png";

export const projects: Project[] = [
  {
    id: "baseai",
    name: "BaseAI",
    description: [
      "A multi-model document intelligence workspace that turns PDFs into a searchable RAG knowledge base " +
        "and lets you compare open-source LLMs on accuracy, cost, and performance. ",
      "Built with React, TypeScript, Node.js, MongoDB, and vector embeddings.",
    ],
    image: BaseAIImg,
    githubUrl: "https://github.com/n817/base-ai",
    liveUrl: "https://base-ai.duckdns.org/",
  },
  {
    id: "spots",
    name: "Spots",
    description: [
      "An interactive social media web application with a dynamic interface and " +
        "features for creating and engaging with content. ",
      "Built with HTML, CSS, and JavaScript.",
    ],
    image: SpotsImg,
    githubUrl: "https://github.com/n817/spots",
    liveUrl: "https://n817.github.io/spots/",
  },
  {
    id: "todo",
    name: "ToDo",
    description: [
      "A simple to-do list app for adding, managing, and tracking everyday tasks. ",
      "Built with JavaScript, HTML, and CSS.",
    ],
    image: ToDoImg,
    githubUrl: "https://github.com/n817/todo",
    liveUrl: "https://n817.github.io/todo/",
  },
];
