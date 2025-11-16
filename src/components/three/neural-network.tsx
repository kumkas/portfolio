"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Sphere } from "@react-three/drei"
import * as THREE from "three"

interface NeuralNetworkProps {
  mouseX: number
  mouseY: number
  isMobile?: boolean
}

export function NeuralNetwork({ mouseX, mouseY, isMobile = false }: NeuralNetworkProps) {
  const points = useRef<THREE.Points>(null!)
  const particleCount = isMobile ? 100 : 200

  const particles = useMemo(() => {
    const temp = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = (Math.random() - 0.5) * 50
      const z = (Math.random() - 0.5) * 50
      temp.set([x, y, z], i * 3)
    }
    return temp
  }, [particleCount])

  const particleColors = useMemo(() => {
    const temp = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const color = new THREE.Color()
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3)
      temp.set([color.r, color.g, color.b], i * 3)
    }
    return temp
  }, [particleCount])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.1
      points.current.rotation.y = state.clock.elapsedTime * 0.15
      
      // Mouse interaction
      points.current.rotation.x += (mouseY * 0.1) * 0.05
      points.current.rotation.y += (mouseX * 0.1) * 0.05

      // Animate particle positions
      const positions = points.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01
      }
      points.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      <Points ref={points} positions={particles} colors={particleColors}>
        <PointMaterial
          transparent
          vertexColors
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Neural Network Nodes */}
      {Array.from({ length: isMobile ? 6 : 8 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            (i % 3 - 1) * (isMobile ? 6 : 8),
            Math.sin(i * 1.5) * (isMobile ? 4 : 6),
            Math.cos(i * 1.2) * (isMobile ? 3 : 5),
          ]}
          args={[isMobile ? 0.2 : 0.3, isMobile ? 6 : 8, isMobile ? 6 : 8]}
        >
          <meshStandardMaterial
            emissive="#4F46E5"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </group>
  )
}

export function FloatingElements() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2
    }
  })

  return (
    <group>
      {/* Floating AI Cubes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh
          key={i}
          ref={i === 0 ? meshRef : undefined}
          position={[
            Math.sin(i * 2) * 15,
            Math.cos(i * 1.5) * 10,
            Math.sin(i * 3) * 8,
          ]}
          rotation={[i * 0.5, i * 0.3, 0]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#06B6D4"
            transparent
            opacity={0.6}
            wireframe={i % 2 === 0}
          />
        </mesh>
      ))}

      {/* Torus for AI ring */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[8, 0.5, 16, 100]} />
        <meshStandardMaterial
          color="#10B981"
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>
    </group>
  )
}