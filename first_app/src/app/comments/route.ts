import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  console.log(searchParams);

  const query = searchParams.get("query");

  const filteredCommentsd = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredCommentsd);
}

// export async function GET() {
//   return Response.json(comments);
// }

export async function POST(request: Request) {
  const body = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: body.text,
  };
  comments.push(newComment);

  return Response.json(newComment, {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
