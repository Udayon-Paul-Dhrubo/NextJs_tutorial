import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id === Number(params.id));

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const index = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );

  comments[index].text = body.text;

  return Response.json(comments[index]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  );

  comments.splice(index, 1);

  return Response.json(comments);
}
