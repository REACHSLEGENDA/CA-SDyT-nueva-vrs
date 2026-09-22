import {
    Brain, CalendarClock, Cloud, CreditCard, Globe, LayoutDashboard, Layers, MapPin, Megaphone,
    MessageCircle, Package, Palette, Plug, Receipt, Search, Smartphone, Sparkles, Users,
    type LucideProps,
} from 'lucide-react';
import type { ProductIcon as ProductIconName } from '@/lib/catalog/types';

const ICONS: Record<ProductIconName, React.ComponentType<LucideProps>> = {
    globe: Globe,
    layout: LayoutDashboard,
    users: Users,
    cloud: Cloud,
    smartphone: Smartphone,
    megaphone: Megaphone,
    palette: Palette,
    'map-pin': MapPin,
    search: Search,
    sparkles: Sparkles,
    message: MessageCircle,
    calendar: CalendarClock,
    package: Package,
    receipt: Receipt,
    'credit-card': CreditCard,
    plug: Plug,
    brain: Brain,
    layers: Layers,
};

export function ProductIcon({ name, ...props }: { name: ProductIconName } & LucideProps) {
    const Icon = ICONS[name];
    return <Icon aria-hidden {...props} />;
}
