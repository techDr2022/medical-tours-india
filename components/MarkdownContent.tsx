"use client"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown parser for basic formatting
  const parseMarkdown = (text: string) => {
    const lines = text.split('\n')
    const elements: JSX.Element[] = []
    let currentParagraph: string[] = []
    let listItems: string[] = []
    let inList = false

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paraText = currentParagraph.join(' ')
        elements.push(
          <p key={elements.length} className="mb-4 text-gray-700 leading-relaxed">
            {parseInlineMarkdown(paraText)}
          </p>
        )
        currentParagraph = []
      }
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="mb-4 ml-6 list-disc space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {parseInlineMarkdown(item.trim())}
              </li>
            ))}
          </ul>
        )
        listItems = []
        inList = false
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      if (trimmed.startsWith('# ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900">
            {trimmed.substring(2)}
          </h2>
        )
      } else if (trimmed.startsWith('## ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h3 key={index} className="text-2xl font-bold mt-6 mb-3 text-gray-900">
            {trimmed.substring(3)}
          </h3>
        )
      } else if (trimmed.startsWith('### ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h4 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-900">
            {trimmed.substring(4)}
          </h4>
        )
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        flushParagraph()
        if (!inList) {
          inList = true
        }
        listItems.push(trimmed.substring(2))
      } else if (trimmed === '') {
        flushParagraph()
        flushList()
      } else {
        if (inList) {
          flushList()
        }
        currentParagraph.push(trimmed)
      }
    })

    flushParagraph()
    flushList()

    return elements
  }

  const parseInlineMarkdown = (text: string) => {
    const parts: (string | JSX.Element)[] = []
    let currentIndex = 0

    // Bold text **text**
    const boldRegex = /\*\*(.*?)\*\*/g
    let match
    const matches: Array<{ start: number; end: number; text: string }> = []

    while ((match = boldRegex.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        text: match[1],
      })
    }

    matches.forEach((boldMatch, idx) => {
      if (boldMatch.start > currentIndex) {
        parts.push(text.substring(currentIndex, boldMatch.start))
      }
      parts.push(
        <strong key={`bold-${idx}`} className="font-semibold text-gray-900">
          {boldMatch.text}
        </strong>
      )
      currentIndex = boldMatch.end
    })

    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return <div className="prose prose-lg max-w-none">{parseMarkdown(content)}</div>
}
