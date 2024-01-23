# NextJs_tutorial

## Routing Conventions

Next.js has file-system based routing mechanism.


#### Basic Routing ```/pages```

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


#### Nested Routing ```/pages/subpages```

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