import { meshPoints, meshEdges } from "./faceMeshData";

const W = 1137;
const H = 1400;
// Top of the face to the chin, used to sweep the animation downwards.
const TOP = 200;
const SPAN = 380;
const delay = (y: number) => ((y - TOP) / SPAN).toFixed(3);

/**
 * Face landmarks (from Apple Vision) drawn as a mesh over the hero photo:
 * points pop in, lines draw, then it fades and the detection box appears.
 * Decorative only; with reduced motion it is not shown at all.
 */
export default function FaceMesh() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="fm pointer-events-none absolute inset-0 z-20 h-full w-full" aria-hidden="true">
      <g className="fm-lines">
        {meshEdges.map(([a, b]) => {
          const [x1, y1] = meshPoints[a];
          const [x2, y2] = meshPoints[b];
          return (
            <line
              key={`${a}-${b}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              pathLength={1}
              style={{ "--t": delay(Math.min(y1, y2)) } as React.CSSProperties}
            />
          );
        })}
      </g>
      <g className="fm-dots">
        {meshPoints.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={5.5} style={{ "--t": delay(y) } as React.CSSProperties} />
        ))}
      </g>
    </svg>
  );
}
