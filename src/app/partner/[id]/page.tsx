import {getPartner} from "@/app/lib/data";
// import {Back, DeletePartner, EditPartner} from "@/components/Buttons";
import {auth} from "@/../auth";
import Link from "next/link";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";

export default async function IndividualPartner({params}: { params: { id: number } }) {
    // This is the page for individual partners. It fetches the partner by id, and displays the partner data.
    const sponsor = await getPartner(params.id); // collecting params from the URL
    const user = await auth(); // checking if the user is authenticated

    // if the partner is not found, return a message
    if (sponsor === undefined) {
        return <h1>Partner Not Found</h1>;
    }
    // otherwise, return the partner data in a nice format
    return (
        <div className="bg-gray-800 p-4 rounded-xl">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M0,10c0,5.52,4.48,10,10,10s10-4.48,10-10S15.52,0,10,0,0,4.48,0,10ZM12.1,6.86l-3.14,3.14,3.14,3.14-1.41,1.41-4.56-4.56,4.56-4.56,1.41,1.41Z"/>
                </svg>
                Back
            </button>
            <h2 className={styles.title}>Partner Info</h2>
            <br/>
            <hr/>
            <div className={styles.description}>
                Name: {sponsor.name}
                <br/>
                Category: {sponsor.category}
                <br/>
                Address: {sponsor.address}
                <br/>
                Phone Number: {sponsor.phonenumber}
            </div>
            {/*Provide the options to delete or edit the partner. Provide friendly back button as well.*/}
            {user ?
                <div
                    className={"flex flex-row justify-between w-64 bg-gray-900 p-1 rounded-2xl border-t-2 border-l-2 border-t-gray-950 border-l-gray-950"}>
                    <div className={"px-2 border-r border-gray-500 content-center h-9"}>
                        {/*<Back/>*/}
                    </div>

                    <div className={"px-2 border-x border-gray-500 content-center h-9"}>
                        {/*<EditPartner id={sponsor.id}/>*/}
                    </div>
                    <div className={"px-2 border-l border-gray-500 content-center h-9"}>
                        {/*<DeletePartner id={sponsor.id}/>*/}
                    </div>
                </div>
                :
                <div className={"flex flex-row justify-around w-12"}>
                    <div className={"content-center h-9"}>
                        {/*<Back/>*/}
                    </div>
                </div>
            }
        </div>

    );
}