import {Metadata} from "next";
import PartnerCard from "@/app/partner/card";
import PlaceholderCard from "@/app/partner/placeholderCard";
import {getAllPartners} from "@/app/lib/data";

export const metadata: Metadata = {
    title: "Partners",
}

export default async function Partners() {

    const partnersData = await getAllPartners();

    return (
        <>
            <h1>
                Partners
            </h1>
            <br />
            <hr />
            {
                partnersData.map(partner => <PartnerCard key={partner.partner.id} partner={partner.partner} />)
            }
        </>
    );
}
