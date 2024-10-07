import React, { ReactNode } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css'

interface MarkdownWrapperProps {
  children: string
}

const MarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-2" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-xl font-semibold mb-2" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-lg font-semibold mb-2" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
        li: ({node, ...props}) => <li className="mb-1 pl-1" {...props} />,
        p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
      }}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    >
      {children?.replaceAll("\\(", "$$")
        ?.replaceAll("\\)", "$$")
        ?.replaceAll("\\( ", "$$")
        ?.replaceAll(" \\)", "$$")}
    </ReactMarkdown>
  )
}

export default MarkdownWrapper