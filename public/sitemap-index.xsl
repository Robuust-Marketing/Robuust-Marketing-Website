<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="nl">
      <head>
        <title>Sitemap Index - Robuust Marketing</title>
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
            max-width: 900px;
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

          .sitemap-list {
            display: grid;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .sitemap-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.25rem 1.5rem;
            background: var(--surface);
            border-radius: 8px;
            border: 1px solid var(--border);
            text-decoration: none;
            color: var(--text);
            transition: all 0.2s ease;
          }

          .sitemap-card:hover {
            background: var(--surface-hover);
            border-color: var(--accent);
            transform: translateY(-2px);
          }

          .sitemap-info {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .sitemap-icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(197, 60, 11, 0.15);
            border-radius: 8px;
            color: var(--accent);
          }

          .sitemap-icon svg {
            width: 20px;
            height: 20px;
          }

          .sitemap-name {
            font-weight: 600;
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .sitemap-date {
            font-size: 0.8rem;
            color: var(--text-muted);
          }

          .sitemap-arrow {
            color: var(--text-muted);
            transition: transform 0.2s ease;
          }

          .sitemap-card:hover .sitemap-arrow {
            transform: translateX(4px);
            color: var(--accent);
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

            .sitemap-card {
              padding: 1rem;
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
            <h1>Sitemap Index</h1>
            <p class="description">
              Dit is de sitemap index met <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sub-sitemaps.
              Klik op een sitemap om de URL's te bekijken.
            </p>
          </header>

          <div class="sitemap-list">
            <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
              <a class="sitemap-card" href="{sitemap:loc}">
                <div class="sitemap-info">
                  <div class="sitemap-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div>
                    <div class="sitemap-name">
                      <xsl:variable name="filename" select="substring-after(sitemap:loc, '/sitemap/')"/>
                      <xsl:choose>
                        <xsl:when test="contains($filename, 'landing')">Landingspagina's</xsl:when>
                        <xsl:when test="contains($filename, 'pages')">Pagina's</xsl:when>
                        <xsl:when test="contains($filename, 'services')">Diensten</xsl:when>
                        <xsl:when test="contains($filename, 'blog')">Blog</xsl:when>
                        <xsl:when test="contains($filename, 'kennisbank')">Kennisbank</xsl:when>
                        <xsl:when test="contains($filename, 'portfolio')">Portfolio</xsl:when>
                        <xsl:otherwise><xsl:value-of select="$filename"/></xsl:otherwise>
                      </xsl:choose>
                    </div>
                    <div class="sitemap-date">
                      Laatst bijgewerkt: <xsl:value-of select="sitemap:lastmod"/>
                    </div>
                  </div>
                </div>
                <div class="sitemap-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            </xsl:for-each>
          </div>

          <footer>
            <p>Sitemap gegenereerd door <a href="https://robuustmarketing.nl">Robuust Marketing</a></p>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
