import { IFormItem } from "./../../contants/IFormItem";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";

export default function middlewareAuth(
  req: NextApiRequest,
  res: NextApiResponse<IFormItem>
) {
  if (req.method === "POST") {
    console.log("form: ", req.body);
    if (
      req.body.form.email === "abc@gmail.com" &&
      req.body.form.password === "123456"
    ) {
      return NextResponse.rewrite(new URL("/information", req.url));
    } else {
      console.log("no confirm");
      return;
    }
  }
  res.status(200).json(req.body);
}
