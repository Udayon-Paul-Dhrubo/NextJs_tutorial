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
