import {
  prepareCompiledEditorCss,
  prepareEditorCss,
} from '@/lib/prepare-editor-css';

type BlogEditorStylesProps = {
  tailwindCss?: string;
  compiledCss?: string;
};

/** Server-rendered editor CSS — scoped to canvas content only. */
export function BlogEditorStyles({
  tailwindCss = '',
  compiledCss = '',
}: BlogEditorStylesProps) {
  const scopedTailwind = prepareEditorCss(tailwindCss);
  const scopedCompiled = prepareCompiledEditorCss(compiledCss);

  if (!scopedTailwind && !scopedCompiled) return null;

  return (
    <>
      {scopedTailwind ? (
        <style dangerouslySetInnerHTML={{ __html: scopedTailwind }} />
      ) : null}
      {scopedCompiled ? (
        <style dangerouslySetInnerHTML={{ __html: scopedCompiled }} />
      ) : null}
    </>
  );
}
