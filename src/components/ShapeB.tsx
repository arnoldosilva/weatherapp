import {MotiImage} from "moti";

export default function ShapeB(duration: number, delay: number, style: any) {
  return (
    <MotiImage
      from={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: duration,
        delay: delay,
      }}
      style={[style, {transform: [{rotate: '45deg'}]}]}
      source={require('../assets/builder.png')}
    />
  )
}