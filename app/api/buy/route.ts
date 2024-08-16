import { lemonSqueezyApiInstance } from "@/lib/axios";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const reqData = await req.json();

    if (!reqData.productId) {
      return new Response(
        JSON.stringify({ message: "productId is required" }),
        { status: 400 }
      );
    }
    if (!reqData.userId) {
      return new Response(
        JSON.stringify({ message: "userId is required" }),
        { status: 400 }
      );
    }

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: reqData.userId,
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: "116708",
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    const checkoutUrl = response.data.data.attributes.url;

    console.log(response.data);

    return new Response(
      JSON.stringify({ checkoutUrl }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(
      JSON.stringify({ message: "An error occurred" }),
      { status: 500 }
    );
  }
}
