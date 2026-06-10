import { Fragment, type ReactNode } from 'react';

function renderStyledLine(line: string, lineKey: number): ReactNode[] {
  const parts = line.split(/(gt<[^>]+>)/);

  return parts.flatMap((part, i) => {
    const match = part.match(/gt<(.+)>/);

    if (match) {
      return (
        <span key={`${lineKey}-g-${i}`} className="text-gradient">
          {match[1]}
        </span>
      );
    }

    if (!part) {
      return [];
    }

    return <Fragment key={`${lineKey}-t-${i}`}>{part}</Fragment>;
  });
}

export function renderText(text: string): ReactNode {
  const lines = text.split('\n');

  return lines.flatMap((line, i) => {
    const rendered = renderStyledLine(line, i);

    return i < lines.length - 1
      ? [...rendered, <br key={`br-${i}`} />]
      : rendered;
  });
}
