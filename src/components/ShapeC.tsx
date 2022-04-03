import {MotiImage} from "moti";

export default function ShapeC(duration: number, delay: number, style: any) {
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
      style={style}
      source={require('../assets/builderr.png')}
    />
  )
}