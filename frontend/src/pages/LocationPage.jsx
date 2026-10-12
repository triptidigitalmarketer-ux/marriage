import InfoPage from "@/components/InfoPage";
import { LOCATIONS } from "@/data/locations";

export default function LocationPage({ slug }) {
    return <InfoPage data={LOCATIONS[slug]} kind="location" />;
}
