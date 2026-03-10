<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->hasHeader('X-Locale')) {
            $locale = $request->header('X-Locale');
            if (in_array($locale, ['en', 'es', 'fr'])) {
                \Illuminate\Support\Facades\App::setLocale($locale);
            }
        }

        return $next($request);
    }
}
