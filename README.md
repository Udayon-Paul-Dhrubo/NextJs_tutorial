# NextJs_tutorial

## Concept
- a ```page``` is UI that is unique to a route
- a ```layout``` is UI that is shared across multiple pages in the app.
```
        Header          <--- Layout
        /    \
    Page1    Page2      <--- Pages / content
        \    /
        Footer          <--- Layout
```

## Creating Layout
- fix naming convention: ```layout.tsx```
- it takes a ```children``` prop which is a special prop automatically passed by Next.js. It represents the content we put inside the layout component.

for simple example
```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* head section */}
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        {/* content section */}

        {children}

        {/* footer section */}
        <footer
          style={{
            backgroundColor: "lightgreen",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
```

- ```we can also create custom layout for specific page``` 
```
src
├── app
│   ├── about
|   |   ├── page.tsx
│   │   └── layout.tsx
```

