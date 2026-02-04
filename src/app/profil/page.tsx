import ProfileHero from "@/components/ProfileHero";
import ProfileSejarah from "@/components/ProfileSejarah";
import VisiMisiSection from "@/components/VisiMisiSection";
import StatsSection from "@/components/StatsSection";
import FasilitasSection from "@/components/FasilitasSection";

export default function ProfilPage() {
    return (
        <>
            <ProfileHero />
            <ProfileSejarah />
            <VisiMisiSection />
            <StatsSection showCta={false} />
            <FasilitasSection />
        </>
    );
}
