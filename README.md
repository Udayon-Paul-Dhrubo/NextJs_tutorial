# Route Handlers

- allow us to ```create RESTful endpoints/api```. no overhead of creating a separate server
- also great for ```making external API requests```
- it ```runs server-side```, ensuring that sensitive info (like private keys) remains secure and never gets shipped to the browser.

## As Endpoints/APIs

- check out ```src/app/comments``` to see how to handle GET, POST, PATCH, DELETE requests. and how to handle ```req.params```, ```req.query```, ```req.body```

- check out ```src/app/profile``` to see how to handle ```req.headers``` and ```req.cookies```

## caching 
- in next.js, route handlers are by default cached. (practically when we build the application)
- to opt out caching,
```tsx
export const dynamic = "force-dynamic"; // just add this in route.ts
```

## middleware
