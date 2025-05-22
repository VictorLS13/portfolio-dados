import { NextResponse } from "next/server"
import { renderToStaticMarkup } from "react-dom/server"
import Resume from "@/components/resume"

export async function GET() {
  // Get the HTML content of the resume
  const resumeHtml = renderToStaticMarkup(<Resume />)

  // Add HTML doctype and styling
  const fullHtml = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Currículo - João Victor da Silva Lima</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 5px;
        }
        h2 {
          font-size: 18px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 5px;
          margin-top: 20px;
        }
        h3 {
          font-size: 16px;
          margin-bottom: 5px;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 5px;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .section {
          margin-bottom: 20px;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        a {
          color: #0066cc;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        @media print {
          body {
            padding: 0;
          }
          a {
            color: #333;
          }
        }
      </style>
    </head>
    <body>
      ${resumeHtml}
    </body>
    </html>
  `

  return new NextResponse(fullHtml, {
    headers: {
      "Content-Type": "text/html",
      "Content-Disposition": "attachment; filename=curriculo-joao-victor-lima.html",
    },
  })
}
