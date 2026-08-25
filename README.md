# RiftWorks Landing

Landing corporativa de [RiftWorks](https://weareriftworks.com) en Next.js, con el sistema **brand v2 Aperture**.

## Rutas

Los slugs son en inglés. El idioma se deduce en este orden: cookie `rw-locale` (si eligió ES/EN), `Accept-Language` del navegador, y país por geo (`x-vercel-ip-country` / Cloudflare). Los crawlers siempre ven el español en las URLs sin prefijo para que Google indexe ambos idiomas vía `hreflang`.

| Español (default) | English |
| --- | --- |
| `/` | `/en` |
| `/services` | `/en/services` |
| `/we-are` | `/en/we-are` |
| `/contact` | `/en/contact` |

`/nosotros`, `/contacto` y `/capacidades` redirigen a las rutas nuevas.

## SEO

- `hreflang` (`es`, `en`, `x-default`) y canonical por página
- `sitemap.xml` y `robots.txt`
- JSON-LD de organización, sitio y FAQ
- Open Graph e imagen OG por locale
- `<html lang>` y `Content-Language` alineados al locale servido

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run lint
```
