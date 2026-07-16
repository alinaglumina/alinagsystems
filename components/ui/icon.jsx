import {
  Code2, MonitorSmartphone, Cloud, BrainCircuit, PenTool, Compass,
  ShieldCheck, GaugeCircle, Users, GitBranch,
} from 'lucide-react';

const map = {
  Code2, MonitorSmartphone, Cloud, BrainCircuit, PenTool, Compass,
  ShieldCheck, GaugeCircle, Users, GitBranch,
};

// Resolves a Lucide icon by name (used with data in lib/site.js).
export function Icon({ name, ...props }) {
  const Cmp = map[name] || Code2;
  return <Cmp {...props} />;
}
