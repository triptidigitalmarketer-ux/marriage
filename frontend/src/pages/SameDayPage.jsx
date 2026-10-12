import InfoPage from "@/components/InfoPage";
import { SAMEDAY } from "@/data/sameday";

export default function SameDayPage({ slug }) {
    const data = SAMEDAY[slug];
    return <InfoPage data={data} kind="service" formVariant="consultation" />;
}
