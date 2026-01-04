"use server";
import { redirect } from "next/navigation";
import { ContactSchema } from "@/validations/contacts";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");

  const validationResult = ContactSchema.safeParse({ name, email });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten();
    console.log("サーバー側でバリデーションエラー", errors);
    return {};
  }

  console.log("送信されたデータ", { name, email });
  redirect("/contacts/complete");
}
