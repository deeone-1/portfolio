import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Blob() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = t * 0.18
    group.current.rotation.x = Math.sin(t * 0.22) * 0.14
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.55, 20]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          roughness={0.12}
          metalness={0.85}
          distort={0.38}
          speed={1.4}
        />
      </mesh>
      <mesh scale={1.14}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  )
}

function Rings() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.z = state.clock.getElapsedTime() * 0.09
  })

  return (
    <group ref={group} rotation={[Math.PI / 2.4, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.7, 0.012, 12, 180]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[0.55, 0.3, 0]}>
        <torusGeometry args={[3.2, 0.008, 12, 180]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

type Bit = { position: [number, number, number]; size: number; color: string }

const bits: Bit[] = [
  { position: [-3.1, 1.7, -1], size: 0.2, color: '#a78bfa' },
  { position: [3.2, -1.4, -1.5], size: 0.16, color: '#22d3ee' },
  { position: [-2.6, -2.1, -0.5], size: 0.12, color: '#f0abfc' },
  { position: [2.7, 2.2, -1], size: 0.14, color: '#67e8f9' },
  { position: [0.4, 2.9, -2], size: 0.1, color: '#c4b5fd' },
]

function FloatingBits() {
  return (
    <>
      {bits.map((bit, i) => (
        <Float key={i} speed={1.2 + i * 0.15} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={bit.position}>
            <octahedronGeometry args={[bit.size, 0]} />
            <meshStandardMaterial
              color={bit.color}
              emissive={bit.color}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

function Rig() {
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      target.current.x = (event.clientX / window.innerWidth) * 2 - 1
      target.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useFrame((state) => {
    const { camera } = state
    camera.position.x += (target.current.x * 0.9 - camera.position.x) * 0.05
    camera.position.y += (target.current.y * 0.6 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={2.2} color="#c4b5fd" />
      <directionalLight position={[-5, -3, -2]} intensity={1.1} color="#22d3ee" />

      <Suspense fallback={null}>
        <Blob />
        <Rings />
        <FloatingBits />
        <Sparkles count={70} scale={7} size={2.4} speed={0.4} color="#a78bfa" />
        <Stars radius={70} depth={40} count={1200} factor={3.5} saturation={0} fade speed={0.5} />
      </Suspense>

      <Rig />
    </Canvas>
  )
}