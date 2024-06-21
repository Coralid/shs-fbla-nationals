import {Metadata} from "next";
import PartnerCard from "@/app/partners/partner/card";

export const metadata: Metadata = {
    title: "Partners",
}

export default function Partners() {
    return (
        <>
            <h1>
                Partners
            </h1>
            <br />
            <hr />
            <PartnerCard />
        </>
    );
}
