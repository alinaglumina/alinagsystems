'use client';
import { motion, useReducedMotion } from 'framer-motion';

// SIGNATURE ELEMENT — an abstract "system topology": connected nodes on a
// hairline grid that softly pulse, suggesting distributed software systems.
// Deliberately restrained; fully static under reduced-motion.
const NODES = [
  { id: 'a', x: 120, y: 90 }, { id: 'b', x: 300, y: 60 }, { id: 'c', x: 470, y: 120 },
  { id: 'd', x: 210, y: 210 }, { id: 'e', x: 400, y: 250 }, { id: 'f', x: 560, y: 210 },
  { id: 'g', x: 90, y: 300 }, { id: 'h', x: 320, y: 340 }, { id: 'i', x: 520, y: 330 },
];
const EDGES = [
  ['a', 'b'], ['b', 'c'], ['a', 'd'], ['b', 'd'], ['c', 'e'], ['c', 'f'],
  ['d', 'e'], ['e', 'f'], ['d', 'g'], ['d', 'h'], ['e', 'h'], ['f', 'i'], ['h', 'i'], ['g', 'h'],
];
const at = (id) => NODES.find((n) => n.id === id);

export function Topology({ className }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 640 400" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E6BFF" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#7B61FF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#35E0D8" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#35E0D8" />
          <stop offset="100%" stopColor="#2E6BFF" />
        </radialGradient>
      </defs>

      {EDGES.map(([f, t], i) => {
        const a = at(f), b = at(t);
        return (
          <motion.line
            key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
            stroke="url(#edge)" strokeWidth="1"
            initial={reduce ? { opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
            animate={reduce ? { opacity: 0.3 } : { pathLength: 1, opacity: 0.35 }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.06, ease: 'easeInOut' }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <g key={n.id}>
          {!reduce && (
            <motion.circle
              cx={n.x} cy={n.y} r="4" fill="#35E0D8"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.5, 0.15], r: [3, 9, 3] }}
              transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'blur(2px)' }}
            />
          )}
          <motion.circle
            cx={n.x} cy={n.y} fill="url(#node)"
            initial={reduce ? { r: 3, opacity: 0.9 } : { r: 0, opacity: 0 }}
            animate={reduce ? { r: 3, opacity: 0.9 } : { r: 3, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
          />
        </g>
      ))}
    </svg>
  );
}
