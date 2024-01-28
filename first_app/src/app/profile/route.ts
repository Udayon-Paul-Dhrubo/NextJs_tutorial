import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const headerList = headers();
  const authorizationToken = headerList.get("authorization");
  console.log(authorizationToken);

  const cookieList = cookies();
  //setting a cookie
  //cookieList.set("customCookie", "bainchod");

  //   deleting a cookie
  //   cookieList.delete("customCookie");

  // getting a cookie
  const customCookie = cookieList.get("customCookie");
  console.log(customCookie);

  return Response.json({ message: "Hello, world!" });
}
