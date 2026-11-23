export async function GET(request: Request) {
    // ここでResponseを返す
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0;url=/teapot" />
    <title>418 - I'm a teapot</title>
</head>
<body style="text-align:center;">
    <p>Redirecting to <a href="/teapot">I'm a teapot.</a></p>
</body>
</html>
`;
    return new Response(html, {
        status: 418,
        headers: {
            "Content-Type": "text/html; charset=utf-8",
        },
    });
}