import { prisma } from "@/lib/db";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const body = await req.json();
    const eventType = req.headers.get("X-Event-Name") || '';
    const signature = req.headers.get("X-Signature");

    //test
    if (!signature) {
        console.log("signature not found")
        return NextResponse.error();
      }

      const secret = process.env.LEMON_SECRET

      if (!secret) {
        return
      }
    
      const body = await req.text(); // Get the raw body
      const hash = crypto.createHmac('sha256', secret).update(body).digest('hex');
    
      if (hash !== signature) {
        console.error('Invalid signature');
        return NextResponse.error();
      }



    // Parse the JSON body
    const parsedBody = JSON.parse(body);

    // Destructure the relevant fields
    const {
      data: {
        id,
        type,
        attributes: {
          tax,
          urls: { receipt },
          total,
          status,
          currency,
          user_name,
          user_email,
          order_number,
          first_order_item: { product_name, price },
        },
      },
      meta: { test_mode, event_name, webhook_id, custom_data: { user_id } },
    } = parsedBody;

    // Logic according to event
    if (eventType === "order_created") {
      const isSuccessful = status === "paid";
      const userId = user_id;

      if (isSuccessful) {        
          const update_Profile = await prisma.user.update({
            where: {
                userId: userId
            },
            data: {
                subscribed: true
            }
          })
      }
    }

    return new Response(JSON.stringify({ message: "Webhook received" }), { status: 200 });
  } catch (err) {
    console.error(err);
    console.log(err)
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}
