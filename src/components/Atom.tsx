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
      if (electronRef.current) electronRef.current.position({ x, y })
    }, electronRef.current.getLayer())

    if (anim.current) anim.current.start()

    return () => {
      if (anim.current) anim.current.stop()
    }
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

interface Atomo2DProps {
  symbol: string
  orbitalSpeeds: number[]
  orbitalRadii: number[]
  numElectrons: number[]
}

const Atomo2D = ({ symbol, orbitalSpeeds, orbitalRadii, numElectrons }: Atomo2DProps) => {
  const nucleusSize = 20
  const electronSize = 3

  return (
    <Stage width={430} height={430}>
      <Layer>
        <Group x={430 / 2} y={430 / 2}>
          <Text text={symbol} fontSize={nucleusSize} fill="white" x={-nucleusSize / 2} y={-nucleusSize / 2} />
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
