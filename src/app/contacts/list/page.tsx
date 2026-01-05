import { getContact, getContacts } from "@/lib/contact";

export default async function ListPage() {
  const contacts = await getContacts();
  const firstContact = await getContact("1");
  return (
    <div>
      複数取得
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} : {contact.email}
          </li>
        ))}
      </ul>
      単数取得
      <div>{firstContact ? firstContact.name : "登録されていません"}</div>
    </div>
  );
}
