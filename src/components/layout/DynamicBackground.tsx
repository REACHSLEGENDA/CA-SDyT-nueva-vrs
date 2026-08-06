import { ProfessionalHexBackground } from "./backgrounds/ProfessionalHexBackground";
import { OrbitalCircuitBackground } from "./backgrounds/OrbitalCircuitBackground";

export function DynamicBackground() {
    if (process.env.NODE_ENV === "development") {
        return <ProfessionalHexBackground />;
    }

    return <OrbitalCircuitBackground />;
}
