import InfoPage from "@/components/InfoPage";
import { SERVICES } from "@/data/services";

export default function ServicePage({ slug }) {
    return <InfoPage data={SERVICES[slug]} kind="service" />;
}
