"use client"

import { useState, useEffect } from "react"

const techIcons = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Stack Overflow", icon: "stackoverflow" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Vite", icon: "vite" },
  { name: "Git", icon: "git" },
  { name: "GitLab", icon: "gitlab" },
  { name: "Docker", icon: "docker" },
  { name: "Figma", icon: "figma" },
  { name: "VS Code", icon: "vscode" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Supabase", icon: "supabase" },
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  // { name: "Riverpod", icon: "riverpod" },
  // { name: "GetX", icon: "getx" },
  // { name: "ChatGPT", icon: "chatgpt" },
  // { name: "Gemini", icon: "gemini" },
  // { name: "Anthropic", icon: "anthropic" },
  // { name: "GitHub Copilot", icon: "github" },
  { name: "Notion", icon: "notion" },
  { name: "Vercel", icon: "vercel" },
]

export default function TechStack() {
  const [loadedIcons, setLoadedIcons] = useState<Record<string, string>>({})

  useEffect(() => {
    const fetchIcons = async () => {
      const icons: Record<string, string> = {}

      await Promise.all(
        techIcons.map(async ({ icon }) => {
          try {
            const response = await fetch(
              `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`,
            )
            if (response.ok) {
              const svgText = await response.text()
              icons[icon] = svgText
            }
          } catch (error) {
            console.error(`Failed to load ${icon}:`, error)
          }
        }),
      )

      setLoadedIcons(icons)
    }

    fetchIcons()
  }, [])

  return (
    <div className="max-w-full mx-auto">
      <h1 className="text-3xl font-bold text-white mb-12">Stacks</h1>

      <div className="grid lg:grid-cols-8 grid-cols-4 gap-6">
        {techIcons.map(({ name, icon }) => (
          <div
            key={icon}
            className="group relative flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            title={name}
          >
            {loadedIcons[icon] ? (
              <div className="w-12 h-12" dangerouslySetInnerHTML={{ __html: loadedIcons[icon] }} />
            ) : (
              <div className="w-12 h-12 bg-white/20 rounded animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
