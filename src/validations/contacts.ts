import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, "3文字以上入力してください")
    .max(20, "20文字以上入力してください"),

  email: z
    .string()
    .min(1, "メールアドレスは必須項目です")
    .email("正しいメールアドレスの形式で入力してください"),
});
export type ContactType = z.infer<typeof ContactSchema>;
