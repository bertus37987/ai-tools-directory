# 🤖 AI Tools Directory

> **Professional AI Tools Directory Platform mit GitHub CMS Integration**

Eine umfassend kuratierte Plattform für AI-Tools und -Modelle mit Fokus auf bestmögliche Conversion durch Affiliate-Links, optimiert für SEO und AI-Suchmaschinen.

![AI Tools Directory](https://img.shields.io/badge/AI-Tools%20Directory-blue?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/bertus37987/ai-tools-directory?style=for-the-badge)
![Validation](https://img.shields.io/github/actions/workflow/status/bertus37987/ai-tools-directory/validate.yml?style=for-the-badge&label=Data%20Validation)

## 🚀 Features

- **GitHub-basierte Content-Verwaltung** - Alle Daten in JSON mit Git-Versionskontrolle
- **SEO & GEO optimiert** - Für Google und AI-Suchmaschinen (ChatGPT, Perplexity, Claude)
- **Einfache Tool-Verwaltung** - Neue KI-Tools in 1 Kommando hinzufügen
- **Automatische Validierung** - JSON-Schema-Prüfung via GitHub Actions
- **AI-freundlich** - Strukturierte Daten und optimierte Inhalte für LLMs
- **Affiliate-transparent** - Klare Kennzeichnung und GDPR-konform

## 📁 Struktur

```
ai-tools-directory/
├── data/                     # JSON-Datenbank
│   ├── categories.json       # AI-Tool Kategorien
│   ├── tools.json           # AI-Tools Datenbank  
│   └── featured-deals.json  # Featured Deals
├── schemas/                 # JSON-Schema Validierung
├── scripts/                 # Automatisierungs-Scripts
├── public/                  # SEO & AI Optimierung
│   ├── robots.txt          # AI-Bot freundlich
│   └── ai-citations.txt    # LLM-optimierte Fragmente
└── .github/workflows/       # GitHub Actions
```

## 🔧 Neue KI hinzufügen (Super einfach!)

### Option 1: CLI (1 Zeile)
```bash
# Neue AI-Tool hinzufügen
npm run add:tool my-ai-tool "My AI Tool" text-ai "Beschreibung" https://example.com https://example.com?ref=platform

# Validieren
npm run validate

# Committen
git add data/tools.json && git commit -m "feat: add my-ai-tool" && git push
```

### Option 2: GitHub API (Automatisiert)
```javascript
// Beispiel für automatisches Hinzufügen via GitHub API
const newTool = {
  id: "my-new-ai",
  name: "My New AI", 
  category_id: "text-ai",
  short_description: "Amazing AI tool",
  website_url: "https://example.com",
  affiliate_link: "https://example.com?ref=platform"
};

// Tool zur Datenbank hinzufügen via Contents API
// Siehe scripts/add-tool.mjs für Implementierung
```

### Option 3: Pull Request
Erstelle einen PR mit den Tool-Details - die GitHub Action validiert automatisch!

## 📊 Aktuelle Daten

- **6 Kategorien**: Video AI, Text AI, Code AI, Audio AI, Design AI, Business AI
- **6 Tools**: Runway Gen-3, ChatGPT Plus, GitHub Copilot, Midjourney, ElevenLabs, Notion AI
- **3 Featured Deals**: Aktuelle Promotions mit Ablaufdaten

## 🔍 SEO & AI-Optimierung

### AI-Suchmaschinen Support
- ✅ **GPTBot** (ChatGPT)
- ✅ **Google-Extended** (Bard/Gemini)
- ✅ **Claude-Web** (Anthropic)
- ✅ **PerplexityBot** (Perplexity)
- ✅ **Alle anderen AI-Crawler**

### Strukturierte Daten
```json
{
  "@type": "SoftwareApplication",
  "name": "Tool Name",
  "applicationCategory": "BusinessApplication", 
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8"
  }
}
```

### AI-Citations Optimierung
- Fragment-freundliche Texte für LLMs
- Kontextreiche Beschreibungen
- Zitierbare Marken-Statements
- Voice Search optimiert

## 🛠️ Entwicklung

```bash
# Repository klonen
git clone https://github.com/bertus37987/ai-tools-directory.git
cd ai-tools-directory

# Dependencies installieren  
npm install

# Daten validieren
npm run validate

# Neues Tool hinzufügen
npm run add:tool tool-id "Tool Name" category "Description" https://url
```

## 📝 Kategorien

| Kategorie | ID | Anzahl | Farbe |
|-----------|----|---------|---------|
| 🎥 Video AI | `video-ai` | 1 | `#FF6B6B` |
| ✍️ Text AI | `text-ai` | 1 | `#4ECDC4` |
| 💻 Code AI | `code-ai` | 1 | `#45B7D1` |
| 🎵 Audio AI | `audio-ai` | 1 | `#96CEB4` |
| 🎨 Design AI | `design-ai` | 1 | `#FFEAA7` |
| 💼 Business AI | `business-ai` | 1 | `#DDA0DD` |

## 🔐 API Zugang

### GitHub Contents API
```bash
# Tool-Daten abrufen
curl https://api.github.com/repos/bertus37987/ai-tools-directory/contents/data/tools.json

# Raw JSON direkt
curl https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json
```

### Für Entwickler
```javascript
// Kategorien laden
const categories = await fetch(
  'https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/categories.json'
).then(r => r.json());

// Tools laden
const tools = await fetch(
  'https://raw.githubusercontent.com/bertus37987/ai-tools-directory/main/data/tools.json'
).then(r => r.json());
```

## 📈 Analytics & Tracking

- **Affiliate-Links** mit Platform-Referrer
- **Deal-Tracking** mit Ablaufdaten  
- **Kategorie-Performance** über JSON-Struktur
- **Tool-Ratings** und Review-Counts
- **SEO-Monitoring** für AI-Visibility

## 🤝 Beitragen

1. **Fork** das Repository
2. **Feature Branch** erstellen (`git checkout -b feature/new-tool`)
3. **Tool hinzufügen** via Script oder manuell
4. **Validierung** ausführen (`npm run validate`)
5. **Pull Request** erstellen

### Contribution Guidelines
- Tool-IDs nur lowercase + hyphens
- Beschreibungen max. 220 Zeichen
- Affiliate-Links transparent kennzeichnen
- Schema-Validierung muss bestehen
- Kategorien müssen existieren

## 📄 Lizenz

**MIT License** - Siehe [LICENSE](LICENSE) für Details

## 🔗 Links

- **Repository**: https://github.com/bertus37987/ai-tools-directory
- **Issues**: https://github.com/bertus37987/ai-tools-directory/issues
- **Live Demo**: https://bertus37987.github.io/ai-tools-directory
- **API Docs**: [GitHub Contents API](https://docs.github.com/en/rest/repos/contents)

## ⚠️ Haftungsausschluss

*Dieses Repository enthält Affiliate-Links. Wir erhalten möglicherweise eine Provision, wenn Sie über unsere Links Käufe tätigen. Dies beeinflusst nicht unsere Bewertungen oder Empfehlungen.*

---

**Erstellt mit ❤️ für die AI-Community** | **Powered by GitHub API & Actions**