import { BlogEditorStyles } from '@/components/blog/blog-editor-styles';
import { BlogHtmlContent } from '@/components/blog/blog-html-content';
import { BlogRichTextContent } from '@/components/blog/blog-rich-text-content';
import type { BlogContentEditor, BlogEditorCss } from '@/lib/blogs';
import '@/styles/blog-rich-content.css';

type ArticleBodySectionProps = {
  htmlContent: string;
  contentEditor?: BlogContentEditor;
  editorCss?: BlogEditorCss;
};

export default function ArticleBodySection({
  htmlContent,
  contentEditor = 'grapes',
  editorCss,
}: ArticleBodySectionProps) {
  const isRichText = contentEditor === 'richtext';

  if (!htmlContent) {
    return null;
  }

  return (
    <section className="space-y-8">
      {isRichText ? (
        <BlogRichTextContent html={htmlContent} />
      ) : (
        <>
          <BlogEditorStyles
            tailwindCss={editorCss?.tailwind}
            compiledCss={editorCss?.compiled}
          />
          <BlogHtmlContent html={htmlContent} />
        </>
      )}
    </section>
  );
}
