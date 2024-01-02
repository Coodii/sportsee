import {Rectangle } from 'recharts';

export function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x}
        width={3000}
        height={3000}
      />
    );
}