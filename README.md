# RiftWorks Landing

Landing corporativa de [RiftWorks](https://weareriftworks.com) en Next.js, con el sistema oficial **Aperture**.

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

## Infraestructura y Telemetría AWS

El proyecto utiliza servicios serverless de AWS (región `us-east-1`, cuenta `312392183680`):

### 1. Observabilidad con Amazon CloudWatch RUM
Monitoreo de usuarios reales (Real User Monitoring) integrado en cliente vía [`aws-rum-web`](components/analytics/AwsRum.tsx):
- **App Monitor:** `riftworks-landing` (`ID: d62150d4-6fc5-4d4b-bc19-a89cbb6e0476`)
- **Cognito Identity Pool:** `RiftWorks_RUM_Identity_Pool` (`us-east-1:6b0476b4-5e54-4df1-b03b-89cf5e61bd4d`)
- **Rol IAM:** `RiftWorks_RUM_Unauth_Role` (permiso `rum:PutRumEvents`)
- **Métricas registradas:** Visitantes únicos, sesiones, vistas de página por ruta (`recordPageView`), errores de JavaScript, llamadas HTTP y métricas de rendimiento Web Vitals.
- **Acceso a métricas:** Consola de AWS > *CloudWatch* > *Application Signals (APM)* > *RUM* > `riftworks-landing`.

### 2. Ingestión de Leads en S3
El formulario de contacto envía los datos a la ruta interna `/api/contact`, la cual persiste cada lead como un objeto JSON estructurado en S3:
- **Bucket:** `s3://riftworks-test-leads/leads/YYYY-MM/`
- **Fallback:** Si la API no está disponible o el cliente está offline, el formulario hace fallback elegante a `mailto:`.
- **Credenciales:** Usa el perfil AWS CLI `riftworks` en desarrollo local o variables de entorno estándar (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`) en producción.

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
