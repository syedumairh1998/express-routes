// =================== Express JS Routes =========================

app.get('/test', (request, response) => {
    console.log('working fine')
    return response.json({ message: 'App working fine' })
});

app.all('/test*', (request, response) => {
    console.log('working fine')
    return response.json({ message: 'Test default route (concat words)' })
});

app.all('/test/*', (request, response) => {
    console.log('working fine')
    return response.json({ message: 'Test default route' })
});

app.all('*', (request, response) => {
    console.log('working fine')
    return response.json({ message: 'Default route' })
});

app.all('/ab?cd', (request, response) => {   // b is optional
    console.log('working fine')             //  abcd and acd
    return response.json({ message: 'ab?cd' })
});

app.all(/umair/, (request, response) => {   // any thing matches with umair            
    console.log('working fine')              // any thing matches with 123umairabc
    return response.json({ message: '/umair/' })
});



// =================== Express JS Routes =========================
