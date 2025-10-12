import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({
        success: false,
        error: "Token یا Chat ID نیست",
      });
    }

    const text = `
📩 پیام جدید از سایت پورتفولیو:
👤 نام: ${data.name}
📧 ایمیل: ${data.email}
💬 پیام: ${data.message}
    `;

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: (err as Error).message });
  }
}
