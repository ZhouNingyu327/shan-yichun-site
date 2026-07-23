// Vercel Serverless Function — Decap CMS GitHub OAuth Callback
export default async function handler(req, res) {
  const { code } = req.query;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send('GitHub OAuth credentials not configured');
  }

  // Exchange code for access token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await tokenRes.json();

  if (data.error) {
    return res.status(400).send(`OAuth error: ${data.error_description || data.error}`);
  }

  // Return HTML page that sends the token to Decap CMS via postMessage
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /></head>
    <body>
      <p>认证成功，正在跳转回管理后台...</p>
      <script>
        (function() {
          var token = ${JSON.stringify(data.access_token)};
          if (window.opener) {
            window.opener.postMessage({ type: 'authorization', token: token }, '*');
            window.close();
          } else {
            document.body.innerHTML = '<p>认证成功！请关闭此页面并刷新管理后台。</p>';
          }
        })();
      </script>
    </body>
    </html>
  `);
}
