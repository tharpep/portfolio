'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    if (!ref.current || !chart) return;

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          fontSize: 18,
          fontFamily: 'system-ui, sans-serif',
          flowchart: {
            nodeSpacing: 80,
            rankSpacing: 100,
            curve: 'basis',
            padding: 20,
          },
          themeVariables: {
            background: '#171717',
            primaryColor: '#f59e0b',
            primaryTextColor: '#000',
            primaryBorderColor: '#d97706',
            lineColor: '#f59e0b',
            secondaryColor: '#7c2d12',
            tertiaryColor: '#1f2937',
            fontSize: '18px',
            fontFamily: 'system-ui, sans-serif',
            nodeBkg: '#262626',
            nodeBorder: '#f59e0b',
            mainBkg: '#171717',
            textColor: '#e5e5e5',
          },
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        setSvg(renderedSvg);
      } catch (error: unknown) {
        console.error('Mermaid rendering error:', error);
      }
    };

    renderDiagram();
  }, [chart]);

  if (svg) {
    return (
      <div
        className={className}
        ref={ref}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }

  return (
    <div className={`mermaid ${className}`} ref={ref}>
      {chart}
    </div>
  );
}

