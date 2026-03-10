<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>Reset Your Password – ExperienceCanada</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            background-color: #fef2f2;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            -webkit-text-size-adjust: none;
        }

        table { border-collapse: collapse; }

        .wrapper {
            width: 100%;
            background-color: #fef2f2;
            padding: 48px 16px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
        }

        /* ── Card ── */
        .card {
            background-color: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow:
                0 25px 50px -12px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(0, 0, 0, 0.04);
        }

        /* ── Hero banner ── */
        .card-hero {
            background-color: #ef4444;
            padding: 40px 40px 32px;
            text-align: center;
        }
        .hero-badge {
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.18);
            color: #fee2e2;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            padding: 6px 16px;
            border-radius: 100px;
            margin-bottom: 20px;
        }
        .hero-icon {
            width: 64px;
            height: 64px;
            background-color: rgba(255,255,255,0.2);
            border-radius: 50%;
            margin: 0 auto 16px;
            display: table;
            text-align: center;
            vertical-align: middle;
        }
        .hero-icon-inner {
            display: table-cell;
            vertical-align: middle;
            font-size: 28px;
        }
        .hero-title {
            color: #ffffff;
            font-size: 26px;
            font-weight: 800;
            margin: 0;
            line-height: 1.3;
            letter-spacing: -0.5px;
        }
        .hero-subtitle {
            color: rgba(255,255,255,0.8);
            font-size: 15px;
            margin: 10px 0 0;
            line-height: 1.5;
        }

        /* ── Body ── */
        .card-body {
            padding: 40px 40px 32px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 700;
            color: #7f1d1d;
            margin: 0 0 16px;
        }
        .text {
            font-size: 15px;
            color: #52525b;
            line-height: 1.7;
            margin: 0 0 16px;
        }

        /* ── Warning box ── */
        .warning-box {
            background-color: #fff7ed;
            border-left: 4px solid #f97316;
            border-radius: 8px;
            padding: 14px 18px;
            margin: 0 0 24px;
        }
        .warning-box p {
            font-size: 13px;
            color: #9a3412;
            margin: 0;
            line-height: 1.6;
        }

        /* ── CTA Button ── */
        .btn-wrapper {
            text-align: center;
            margin: 32px 0;
        }
        .btn {
            display: inline-block;
            background-color: #ef4444;
            color: #ffffff !important;
            font-size: 16px;
            font-weight: 700;
            text-decoration: none;
            padding: 16px 40px;
            border-radius: 12px;
            letter-spacing: 0.2px;
            box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
        }

        /* ── Divider ── */
        .divider {
            border: none;
            border-top: 1px solid #f4f4f5;
            margin: 32px 0;
        }

        /* ── Fallback URL section ── */
        .fallback-label {
            font-size: 12px;
            font-weight: 600;
            color: #a1a1aa;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin: 0 0 8px;
        }
        .fallback-url {
            font-size: 12px;
            color: #ef4444;
            word-break: break-all;
            line-height: 1.6;
        }

        /* ── Footer ── */
        .footer {
            padding: 28px 40px;
            background-color: #fff1f2;
            text-align: center;
            border-top: 1px solid #fecdd3;
        }
        .footer p {
            font-size: 12px;
            color: #a1a1aa;
            margin: 0;
            line-height: 1.6;
        }
        .footer a {
            color: #ef4444;
            text-decoration: none;
        }

        /* ── Mobile ── */
        @media only screen and (max-width: 620px) {
            .wrapper    { padding: 24px 12px !important; }
            .card-hero  { padding: 32px 24px 24px !important; }
            .card-body  { padding: 28px 24px 24px !important; }
            .footer     { padding: 20px 24px !important; }
            .hero-title { font-size: 22px !important; }
        }
    </style>
</head>
<body>
<table class="wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
<tr>
<td align="center">
<table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation">

    {{-- Card --}}
    <tr>
        <td>
            <table class="card" width="100%" cellpadding="0" cellspacing="0" role="presentation">

                {{-- Hero Banner --}}
                <tr>
                    <td class="card-hero">
                        <div class="hero-badge">Password Reset</div>
                        <table class="hero-icon" cellpadding="0" cellspacing="0" role="presentation">
                            <tr><td class="hero-icon-inner">🔒</td></tr>
                        </table>
                        <h1 class="hero-title">Reset Your<br>Password</h1>
                        <p class="hero-subtitle">We received a request to reset your password.</p>
                    </td>
                </tr>

                {{-- Body --}}
                <tr>
                    <td class="card-body">

                        {{-- Logo --}}
                        <p style="text-align:center; margin: 0 0 24px;">
                            <a href="{{ config('app.url') }}" style="font-size:26px; font-weight:800; text-decoration:none; letter-spacing:-0.5px;">
                                <span style="color:#115e59;">Experience</span><span style="color:#ef4444;">Canada</span>
                            </a>
                        </p>

                        <p class="greeting">Hi {{ $name }},</p>

                        <p class="text">
                            We received a request to reset the password for your <strong>ExperienceCanada</strong> account.
                            Click the button below to choose a new password.
                        </p>

                        {{-- Warning box --}}
                        <div class="warning-box">
                            <p>⚠️ &nbsp;This link will <strong>expire in 60 minutes</strong>. If you did not request a password reset, please ignore this email — your account is safe.</p>
                        </div>

                        {{-- CTA Button --}}
                        <table class="btn-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td align="center">
                                    <a href="{{ $resetUrl }}" class="btn">
                                        🔑 &nbsp; Reset My Password
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <hr class="divider">

                        <p class="fallback-label">Having trouble?</p>
                        <p class="text" style="font-size:13px; color:#71717a;">
                            If the button above doesn't work, copy and paste the URL below into your browser:
                        </p>
                        <p class="fallback-url">{{ $resetUrl }}</p>
                    </td>
                </tr>

                {{-- Footer --}}
                <tr>
                    <td class="footer">
                        <p>
                            Sent with ❤️ by
                            <a href="{{ config('app.url') }}" style="font-weight:700;">
                                <span style="color:#115e59;">Experience</span><span style="color:#ef4444;">Canada</span>
                            </a>
                        </p>
                        <p style="margin-top:6px;">
                            © {{ date('Y') }} ExperienceCanada. All rights reserved.<br>
                            Montreal, QC, Canada
                        </p>
                    </td>
                </tr>

            </table>
        </td>
    </tr>

</table>
</td>
</tr>
</table>
</body>
</html>
