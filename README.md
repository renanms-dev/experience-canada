# Experience Canada

Experience Canada is a Laravel and Vue application for an immigration and education consulting business focused on helping clients study, work, and immigrate to Canada.

The project combines a public marketing website, localized content, authentication, and an authenticated user area built with Inertia.js.

## Highlights

- Laravel 12 backend with Inertia.js and Vue 3
- Server-side rendering with Vite SSR
- Localized experience in English, Spanish, and French
- Authentication flows powered by Laravel Breeze
- Custom email templates for account verification and password reset
- Public pages for study, immigration, about, and contact
- Authenticated dashboard and profile management

## Tech Stack

- PHP 8.2+
- Laravel 12
- Inertia.js
- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Ziggy
- Vue I18n
- `@vue/server-renderer` for SSR

## Main Routes

- `/` home page
- `/study` study in Canada page
- `/immigrate` immigration services page
- `/about` company page
- `/contact` contact page
- `/login` authentication
- `/register` authentication
- `/dashboard` authenticated area
- `/profile` profile management

## Localization

The frontend includes English, Spanish, and French translations. The backend locale middleware also accepts the `X-Locale` header for supported locales:

- `en`
- `es`
- `fr`

## SSR

Server-side rendering is configured through Vite and Inertia. The SSR entrypoint is [`resources/js/ssr.ts`](/Users/renan/Projects/experience/resources/js/ssr.ts).

For authenticated users, SSR is disabled by middleware to avoid rendering personalized authenticated pages on the server.

## Project Structure

- [`app/`](/Users/renan/Projects/experience/app) Laravel application code
- [`resources/js/`](/Users/renan/Projects/experience/resources/js) Vue pages, layouts, components, i18n, and SSR entry
- [`resources/views/`](/Users/renan/Projects/experience/resources/views) Blade templates and mail views
- [`routes/web.php`](/Users/renan/Projects/experience/routes/web.php) web routes
- [`lang/`](/Users/renan/Projects/experience/lang) translation files

## Local Setup

### Requirements

- PHP 8.2+
- Composer
- Node.js
- npm
- A database supported by Laravel

### Install

```bash
composer setup
```

The `composer setup` script installs PHP dependencies, creates `.env` when needed, generates the app key, runs migrations, installs frontend dependencies, and builds the assets.

If you prefer to run the steps manually:

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm install
npm run build
```

## Development

Run the full local development stack with:

```bash
composer dev
```

This starts:

- Laravel development server
- queue listener
- log tailing with Laravel Pail
- Vite dev server

## Available Scripts

```bash
composer dev
composer test
npm run dev
npm run build
npm run type-check
```

## Testing

Run the backend test suite with:

```bash
composer test
```

## Notes

- Built with Inertia, so pages are rendered through Vue components instead of a traditional Blade-only frontend.
- Email notification templates are customized under [`resources/views/emails/`](/Users/renan/Projects/experience/resources/views/emails).
- SSR build output under `bootstrap/ssr` is ignored by Git.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
