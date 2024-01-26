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

### Redirecting to 404 page from a page

```tsx
import { notFound } from "next/navigation";
```
suppose you want to redirect to 404 page if the reviewId is greater than 1000
```tsx
if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
```

- if you want to make another custom 404 page for a specific page, you can do it like this.

> create ```not-found.tsx``` in that page folder. For me I want to create a custom 404 page for ```/products/[productId]/reviews/[reviewId]```

file structure

```
src
├── app
│   ├── products                        <-- this is for /products
│   │   |── [productId]                 <-- this is for /products/[productId]
│   │   |    |── reviews                <-- this is for /products/[productId]/reviews
│   │   |    |    |── [reviewId]        <-- this is for /products/[productId]/reviews/[reviewId]
│   │   |    |    |    |── page.tsx
│   │   |    |    |    └── not-found.tsx     <-- this is for /products/[productId]/reviews/not-found.

```
```tsx
export default function ReviewNotFound() {
  return <h1>review not found</h1>;
}
```


### Private Folder
it is a folder that is not accessible from the browser. we can use it to store our private data like api keys, database credentials etc.

- create a folder named ```_<folder_name>``` in ```src/app``` folder. ( like ```_private``` )
file structure
```
src
├── app
│   ├── _private
```



## Route Group
Allows us to logically group our routes and project files without affecting the url. <br>
```
lets implement authentication routes 
    |── Register
    |── Login
    |── Forgot Password
```
- what we can simply do is 
```
src
├── app
│   ├── auth
│   │   ├── login                       <-- this is for /auth/login
│   │   │   └── page.tsx
│   │   ├── register                    <-- this is for /auth/register
│   │   │   └── page.tsx
│   │   └── forgot-password             <-- this is for /auth/forgot-password
│   │       └── page.tsx
```
- in some case it is not ideal. yet we can use ```route group``` to solve this problem.
- to create a route group, we have to simply name the folder like : ```(<group_name>)```
- ```(auth)``` => means that auth name will be excluded from the url.
```
src
├── app
│   ├── (auth)
│   │   ├── login                       <-- this is for /login
│   │   │   └── page.tsx
│   │   ├── register                    <-- this is for /register
│   │   │   └── page.tsx
│   │   └── forgot-password             <-- this is for /forgot-password
│   │       └── page.tsx
```



## Parallel Routes
```Parallel Routes``` are advanced routing mechanism  that allows for the simultaneous rendering of multiple within the same layout.<br>


>suppose we want to create a complex dashboard that includes multiple sections. Like this
<img src="complex dashboard.png" alt="Complex Dashboard" style="width:450px">



- In a traditional way it is done like this.
```tsx
import UserAnalytics from "@/users/UserAnalytics";
import RevenewMetrics from "@/components/RevenewMetrics";
import Notifications from "@/components/Notifications";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>children</div>
      <UserAnalytics />
      <RevenewMetrics />
      <Notifications />
    </>
  );
}
```
but this doesn't renders the components at once. it renders one by one. so it is not ideal for complex dashboard. for this we need to use ```Parallel Routes```

- Parallel routes are defined using a feature known as ```slots``` 
- ```Slots``` help structure our content in a modular fashion 
- to define a ```Slot```, we use the ```@<folder_name>``` naming convention 
- each ```Slot``` is then passed as a prop to its corresponding ```layout.tsx``` file

file structure
```src
├── app
│   ├── complex_dashboard
│   │   ├── @notifications
│   │   │   └── page.tsx
│   │   ├── @revenue
│   │   │   └── page.tsx
│   │   ├── @users
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
```
then we can use them as 
```tsx
export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
```
**Benefits of using Parallel Routes -> ```Independent Route Handling```**
<img src="independent_route_handling.png" alt="independent_route_handling" style="width:700px">



