import { useEffect, useRef } from 'react'
import { Stage, Layer, Text, Group, Circle } from 'react-konva'
import Konva from 'konva'

const Electron = ({ radius, angle, speed, electronSize }: { radius: number, angle: number, speed: number, electronSize: number }) => {
  const electronRef = useRef<any>(null)
  const anim = useRef<any>(null)

  useEffect(() => {
    anim.current = new Konva.Animation((frame: any) => {
      const t = frame.time / 1000
      const x = radius * Math.cos(speed * t + angle)
      const y = radius * Math.sin(speed * t + angle)
      electronRef.current.position({ x, y })
    }, electronRef.current.getLayer())

    anim.current.start()

    return () => anim.current.stop()
  }, [radius, angle, speed])

  return <Circle ref={electronRef} x={radius} y={0} radius={electronSize} fill="#00dfd8" />
}

const Orbital = ({ radius, numElectrons, speed, electronSize }: { radius: number, numElectrons: number, speed: number, electronSize: number }) => {
  const electrons = []
  const angleStep = (2 * Math.PI) / numElectrons

  for (let i = 0; i < numElectrons; i++) {
    const angle = i * angleStep
    electrons.push(<Electron key={i} radius={radius} angle={angle} speed={speed} electronSize={electronSize} />)
  }

  return (
    <Group>
      <Circle x={0} y={0} radius={radius} stroke="#ccc" />
      {electrons}
    </Group>
  )
}

const Atomo2D = () => {
  const nucleusSize = 20
  const electronSize = 3
  const orbitalSpeeds = [1, 0.75, 0.5, 0.25, 0.1]
  const orbitalRadii = [30, 60, 90, 120, 150]
  const numElectrons = [2, 8, 18, 12, 1]

  return (
    <Stage width={350} height={320}>
      <Layer>
        <Group x={350 / 2} y={320 / 2}>
          <Text text="Nb" fontSize={nucleusSize} fill="white" x={-nucleusSize / 2} y={-nucleusSize / 2} />
          {orbitalRadii.map((radius, index) => (
            <Orbital
              key={index}
              radius={radius}
              numElectrons={numElectrons[index]}
              speed={orbitalSpeeds[index]}
              electronSize={electronSize}
            />
          ))}
        </Group>
      </Layer>
    </Stage>
  )
}

export default Atomo2D
