# Routing Metadata

Ensuring SEO is crucial for increasing visibility and attracting users. <br>
Next.js introduced the ```Metadata API``` which allows you to define metadata for each page.<br>
Metadata ensures accurate and relevant information is displayed when your pages are shated or indexed.

## Configuring Metadata
1. export a static metadata object
2. export dynamic metadata object 



### Static Metadata
We can define static metadata either 
- in router group ( in that case in ```layout.tsx``` ) that applies for all the children pages. <br> or
- in each page ( in that case in ```page.tsx```) individually.

declaring static metadata is simple. 
```tsx
export const metadata = {    <---- here "metadata" name is fixed, can't be anything else
  title: "Authentication",
};
```
applicable in both ```layout.tsx``` and ```page.tsx```


### Dynamic Metadata
let's build dynamic metadata for ```/products/[productId]``` page. in the folder's ```page.tsx``` 
```tsx
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => { 
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: Props) {
  .....
}
```
here ```generateMetadata``` is a function that returns a metadata object. the name of the function is fixed, can't be anything else. <br>



## More structured page title
title has 3 properties:

- ```absolute``` : if set, then only this title will be used
- ```default``` : any child page that doesn't have a title will use this title
- ```template``` : any child page's title will be appended to this title

for example: in ```src/app/layout.tsx``` we can define
```tsx
import { Metadata } from "next";

export const metadata : Metadata = {
  title: {
    // absolute: "",        
    default: "Next.js Tutorial",
    template: "%s | Next.js Tutorial",        // About | Next.js Tutorial
  }
};