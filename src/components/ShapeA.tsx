import {MotiView} from "moti";

export default
  function ShapeA(duration: number, delay: number, style: any) {
  return (
    <MotiView
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
    />
  )
}

