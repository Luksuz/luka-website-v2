# lukamindek.com

Personal site of Luka Minđek. Next.js 16, static export (`out/`), deployed on Netlify.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # writes out/
npm start       # serves out/
```

## Editing content

All text that changes lives in `src/content/`:

- `site.ts` — name, title, links
- `achievements.ts` — awards (entries with `published: false` are hidden everywhere, including structured data)
- `work.ts` — projects and links to MindX case studies
- `cv.ts` — roles, skills, certifications (`published: false` = hidden)

Search for `TODO(luka)` to find the gaps.
