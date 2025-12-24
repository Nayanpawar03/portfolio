"use client";
import AnimatedCursor from 'react-animated-cursor';

export default function Cursor({ width = 35 }: { width?: number }) {
  return (
    <AnimatedCursor
      showSystemCursor
      innerSize={8}
      outerSize={width}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      // hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'var(--foreground)'
      }}
      outerStyle={{
        border: '3px solid var(--foreground)'
      }}
    />
  )
}
