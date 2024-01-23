# NextJs_tutorial

## Routing Conventions

Next.js has file-system based routing mechanism.


### Basic Routing ```/pages```

- URL paths that user can access directly in the browser ```are defined by folder in codebase```

> for example you want to access ```/```(home page) and ```/about``` page, <br>
> you need to create following files in your codebase.

```src/app/page.tsx``` => ``` localhost:3000/```

```src/app/about/page.tsx``` => ```localhost:3000/about```

folder structure

```
src
├── app
│   ├── about                   <-- this is for /about
│   │   └── page.tsx
│   └── page.tsx                <-- this is for / (home page)
```


### Nested Routing ```/pages/subpages```

- similar as basic routing
- let create url ```/blog```, ```/blog/first```, ```/blog/second```

the folder structure will be like this

```
src
├── app
│   ├── blog                    <-- this is for /blog
│   │   ├── first               <-- this is for /blog/first
│   │   │   └── page.tsx
│   │   └── second              <-- this is for /blog/second
│   │       └── page.tsx
│   └── page.tsx                <-- this is for / (home page)
```


### Dynamic Routing ```/pages/[param]```

- have to create a folder with ```[<param_name>]``` in the name
- let create url ```/product/1```, ```/product/2```, .... ```/product/n```
  
file structure

```
src
├── app
│   ├── product             <-- this is for /product
│   │   |── [productId]     <-- this is for /product/[productId]
│   │   |    └── page.tsx
|   |   └── page.tsx        
│   └── page.tsx            <-- this is for / (home page)
```           

- to access the param value in ```[productId]/page.tsx```
```tsx

function ProductDetails( {params} : {params: {productId: string}} ) {
    return (
        <div>

            <p>{params.productId}</p>
        </div>
    )
}

```

### Nested Dynamic Routing ```/pages/[param]/subpages```

- let create ```products/[productId]/reviews```, ```products/[productId]/reviews/[reviewId]```
  
file structure

```
src
├── app
│   ├── products                        <-- this is for /products
│   │   |── [productId]                 <-- this is for /products/[productId]
│   │   |    |── reviews                <-- this is for /products/[productId]/reviews
│   │   |    |    └── [reviewId]        <-- this is for /products/[productId]/reviews/[reviewId]
│   │   |    |        └── page.tsx
|   |   |    └── page.tsx        
│   │   └── page.tsx            
```

- to access the param values in ```[reviewId]/page.tsx```
  
```tsx
function ReviewDetails( {params} : {params: {productId: string, reviewId: string}} ) {
    return (
        <div>
            <p>{params.productId}</p>
            <p>{params.reviewId}</p>
        </div>
    )
}
```

### Catch-All Routes ```/pages/[...param]```
- we can use ```/docs/<any_path>``` to catch all routes that start with ```/docs/``` in a single file. we can use ```[...<any_name>]``` to do that.

file structure

```
src
├── app
│   ├── docs                        <-- this is for /docs
│   │   |── [...slug]               <-- this is for /docs/<any_request_url>
│   │   |    └── page.tsx
|   |   └── page.tsx
```

- to access the url in ```[...slug]/page.tsx```

```tsx
function Docs( {params} : {params: {slug: string[]}} ) {
    if (params.slug.length === 2) {
        return (
        <h1>
            Viewing docs for feature : {params.slug[0]} and concept : {params.slug[1]}            
        </h1>
        );
    } else if (params.slug.length === 1) {
        return <h1>Viewing docs for feature : {params.slug[0]}</h1>;
    }

    return <h1>Docs Home Page</h1>;
}
```


### Custom 404 page

- create ```not-found.tsx``` in ```/app``` folder.
- ```file name have to be named like this``` to make it work.

```tsx
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>could not find your request path</p>
    </div>
  );
}
```
