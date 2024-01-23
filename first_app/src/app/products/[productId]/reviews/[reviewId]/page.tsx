import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }

  return (
    <h1>
      Review {params.reviewId} of Product {params.productId}
    </h1>
  );
}
