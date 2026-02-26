'use client';

import dynamic from 'next/dynamic';

const SazedArchitectureDiagram = dynamic(
    () => import('./SazedArchitectureDiagram'),
    { ssr: false }
);

export default function SazedArchitectureDiagramWrapper() {
    return <SazedArchitectureDiagram />;
}
