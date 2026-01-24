<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="nl">
      <head>
        <title>XML Sitemap - Robuust Marketing</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          :root {
            --background: #18242e;
            --surface: #25313b;
            --surface-hover: #2d3d49;
            --accent: #c53c0b;
            --accent-hover: #d94a18;
            --text: #ffffff;
            --text-muted: #94a3b8;
            --border: #3d4f5f;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: var(--background);
            color: var(--text);
            line-height: 1.6;
            padding: 2rem;
            min-height: 100vh;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          header {
            margin-bottom: 2rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }

          .logo svg {
            width: 32px;
            height: 32px;
          }

          .logo span {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
          }

          h1 {
            font-size: 1.75rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .description {
            color: var(--text-muted);
            font-size: 0.95rem;
          }

          .description a {
            color: var(--accent);
            text-decoration: none;
          }

          .description a:hover {
            text-decoration: underline;
          }

          .stats {
            display: flex;
            gap: 2rem;
            margin-top: 1rem;
            padding: 1rem;
            background: var(--surface);
            border-radius: 8px;
          }

          .stat {
            text-align: center;
          }

          .stat-value {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
          }

          .stat-label {
            font-size: 0.8rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            background: var(--surface);
            border-radius: 8px;
            overflow: hidden;
            margin-top: 1.5rem;
          }

          th {
            background: var(--surface-hover);
            padding: 1rem;
            text-align: left;
            font-weight: 600;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
            border-bottom: 1px solid var(--border);
          }

          td {
            padding: 0.875rem 1rem;
            border-bottom: 1px solid var(--border);
            font-size: 0.9rem;
          }

          tr:last-child td {
            border-bottom: none;
          }

          tr:hover td {
            background: var(--surface-hover);
          }

          td a {
            color: var(--text);
            text-decoration: none;
            word-break: break-all;
          }

          td a:hover {
            color: var(--accent);
          }

          .priority {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 500;
          }

          .priority-high {
            background: rgba(197, 60, 11, 0.2);
            color: var(--accent);
          }

          .priority-medium {
            background: rgba(234, 179, 8, 0.2);
            color: #fbbf24;
          }

          .priority-low {
            background: rgba(148, 163, 184, 0.2);
            color: var(--text-muted);
          }

          .alternates {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
          }

          .lang-tag {
            display: inline-block;
            padding: 0.2rem 0.4rem;
            background: var(--surface-hover);
            border-radius: 3px;
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
          }

          footer {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid var(--border);
            text-align: center;
            color: var(--text-muted);
            font-size: 0.85rem;
          }

          footer a {
            color: var(--accent);
            text-decoration: none;
          }

          @media (max-width: 768px) {
            body {
              padding: 1rem;
            }

            .stats {
              flex-direction: column;
              gap: 1rem;
            }

            table {
              font-size: 0.8rem;
            }

            th, td {
              padding: 0.5rem;
            }

            .hide-mobile {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="logo">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#c53c0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#c53c0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#c53c0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Robuust Marketing</span>
            </div>
            <h1>XML Sitemap</h1>
            <p class="description">
              Deze sitemap bevat <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URL's.
              Gegenereerd voor zoekmachines zoals Google en Bing.
            </p>
            <div class="stats">
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="stat-label">URL's</div>
              </div>
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
                <div class="stat-label">Hoge prioriteit</div>
              </div>
              <div class="stat">
                <div class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url/xhtml:link[@hreflang='en'])"/></div>
                <div class="stat-label">Met EN versie</div>
              </div>
            </div>
          </header>

          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th class="hide-mobile">Talen</th>
                <th>Prioriteit</th>
                <th class="hide-mobile">Gewijzigd</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td class="hide-mobile">
                    <div class="alternates">
                      <xsl:for-each select="xhtml:link[@hreflang != 'x-default']">
                        <span class="lang-tag"><xsl:value-of select="@hreflang"/></span>
                      </xsl:for-each>
                    </div>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority >= 0.8">
                        <span class="priority priority-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority >= 0.5">
                        <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority priority-low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="hide-mobile">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>

          <footer>
            <p>Sitemap gegenereerd door <a href="https://robuustmarketing.nl">Robuust Marketing</a></p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
