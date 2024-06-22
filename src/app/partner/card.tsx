// import {DeletePartner, EditPartner} from "@/components/Buttons";
import {Partner} from "@/app/lib/definitions";
import { auth } from "../../../auth";
import Link from "next/link";
import styles from "./card.module.css";

export default async function PartnerCard({partner}: {partner: Partner}) {
    const user = await auth();
    const loggedIn = user?.user;
    return (
        <div className={styles.card}>
            <h2>
                <Link href={"/partner/" + partner.id}>
                    {partner.name}
                </Link>
            </h2>
            <ul>
                <li>
                    {partner.category}
                </li>
                <li>
                    {partner.address}
                </li>
                <li>
                    <a href={"tel:" + partner.phonenumber}>
                        {partner.phonenumber}
                    </a>
                </li>
            </ul>
            {loggedIn &&
                <div
                    className={"flex flex-row justify-between w-40 bg-gray-900 p-1 rounded-2xl border-t-2 border-l-2 border-t-gray-950 border-l-gray-950"}>
                    <div className={"px-2 border-r border-gray-500"}>
                        {/*<DeletePartner id={partner.id} />*/}
                    </div>
                    <div className={"px-2 border-l border-gray-500"}>
                        {/*<EditPartner id={partner.id} />*/}
                    </div>
                </div>
            }
        </div>
    )
}