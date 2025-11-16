"use client"

import { useRef, useMemo } from "react"
import * as React from "react"
import { useFrame, ThreeElements } from "@react-three/fiber"
import { Text, Sphere, Line } from "@react-three/drei"
import * as THREE from "three"

interface Skill {
  name: string
  level: number
  category: string
  position: [number, number, number]
  color: string
}

const skills: Skill[] = [
  // Core ML
  { name: "PyTorch", level: 95, category: "ML", position: [0, 0, 0], color: "#ee4c2c" },
  { name: "TensorFlow", level: 90, category: "ML", position: [3, 1, -2], color: "#ff6f00" },
  { name: "Scikit-learn", level: 92, category: "ML", position: [-2, 1, 1], color: "#f7931e" },
  
  // LLMs
  { name: "LangChain", level: 88, category: "LLM", position: [2, -2, 3], color: "#10b981" },
  { name: "Transformers", level: 94, category: "LLM", position: [-3, -1, -1], color: "#fbbf24" },
  { name: "RAG", level: 91, category: "LLM", position: [1, 2, 2], color: "#8b5cf6" },
  
  // MLOps
  { name: "Docker", level: 89, category: "MLOps", position: [4, 0, 1], color: "#2496ed" },
  { name: "Kubernetes", level: 85, category: "MLOps", position: [-1, 3, -2], color: "#326ce5" },
  { name: "AWS", level: 87, category: "Cloud", position: [2, 1, -3], color: "#ff9900" },
  
  // Programming
  { name: "Python", level: 96, category: "Programming", position: [-4, 0, 2], color: "#3776ab" },
  { name: "JavaScript", level: 88, category: "Programming", position: [0, -3, 1], color: "#f7df1e" },
  { name: "Rust", level: 82, category: "Programming", position: [3, 2, -1], color: "#dea584" },
  
  // Data
  { name: "SQL", level: 90, category: "Data", position: [-2, -2, -3], color: "#336791" },
  { name: "Spark", level: 86, category: "Data", position: [1, -1, 4], color: "#e25a1c" },
  { name: "MongoDB", level: 83, category: "Data", position: [-3, 2, 1], color: "#47a248" },
]

interface SkillNodeProps {
  skill: Skill
  isHovered: boolean
  onHover: (skill: Skill | null) => void
}

function SkillNode({ skill, isHovered, onHover }: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const scale = skill.level / 100

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + skill.position[0]) * 0.1
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + skill.position[1]) * 0.1
      
      if (isHovered) {
        meshRef.current.scale.setScalar(scale * 1.2)
      } else {
        meshRef.current.scale.setScalar(scale)
      }
    }
  })

  return (
    <group position={skill.position}>
      <Sphere
        ref={meshRef}
        args={[0.8, 16, 16]}
        onPointerEnter={() => onHover(skill)}
        onPointerLeave={() => onHover(null)}
      >
        <meshStandardMaterial
          color={skill.color}
          transparent
          opacity={0.8}
          emissive={skill.color}
          emissiveIntensity={0.2}
        />
      </Sphere>
      {isHovered && (
        <>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill.name}
          </Text>
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.3}
            color="#94a3b8"
            anchorX="center"
            anchorY="middle"
          >
            {skill.level}%
          </Text>
        </>
      )}
    </group>
  )
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const connections: [THREE.Vector3, THREE.Vector3][] = []
    
    skills.forEach((skill1, i) => {
      skills.slice(i + 1).forEach((skill2) => {
        const distance = new THREE.Vector3(...skill1.position)
          .distanceTo(new THREE.Vector3(...skill2.position))
        
        if (distance < 4 && skill1.category === skill2.category) {
          connections.push([
            new THREE.Vector3(...skill1.position),
            new THREE.Vector3(...skill2.position)
          ])
        }
      })
    })
    
    return connections
  }, [])

  return (
    <>
      {lines.map((line, index) => (
        <Line
          key={index}
          points={line}
          color="#4f46e5"
          transparent
          opacity={0.3}
          lineWidth={1}
        />
      ))}
    </>
  )
}

export function SkillsVisualization() {
  const [hoveredSkill, setHoveredSkill] = React.useState<Skill | null>(null)
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <ConnectionLines />
      {skills.map((skill, index) => (
        <SkillNode
          key={index}
          skill={skill}
          isHovered={hoveredSkill?.name === skill.name}
          onHover={setHoveredSkill}
        />
      ))}
    </group>
  )
}