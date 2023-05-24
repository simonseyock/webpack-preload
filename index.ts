console.log('index')

if ('serviceWorker' in navigator && typeof window !== 'undefined') {
    navigator.serviceWorker
        .register(
            /* webpackPreload: true */
            new URL(
                './serviceWorker.ts',
                // @ts-ignore
                import.meta.url
            ),
            {
                scope: '/'
            }
        )
        .then(registration => registration.update());
}
