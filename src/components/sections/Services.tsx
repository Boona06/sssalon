import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Sparkles, Scissors, Heart, Palette } from "lucide-react";

const services = [
    {
        title: "Гелэн маникюр",
        description: "Урт хугацааны тогтоцтой, чанартай гелэн будалт, хумс арчилгаа.",
        icon: Sparkles,
    },
    {
        title: "Тансаг педикюр",
        description: "Хөл амраах ванн, гуужуулалт, болон мэргэжлийн өнгөлгөө.",
        icon: Heart,
    },
    {
        title: "Хумсны арт & дизайн",
        description: "Өвөрмөц, гар зураг болон шигтгээтэй загварууд.",
        icon: Palette,
    },
    {
        title: "Үс засалт",
        description: "Мэргэжлийн тайралт, будалт, хэв маяг бүрдүүлэлт.",
        icon: Scissors,
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Манай үйлчилгээ</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Бид таны гоо үзэсгэлэнг тодотгох олон төрлийн дээд зэрэглэлийн үйлчилгээг санал болгож байна.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 bg-secondary/10">
                            <CardHeader className="pb-2">
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 text-primary shadow-sm">
                                    <service.icon size={24} />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm text-foreground/70">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
