
import { Button } from "../ui/button";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-rose-50">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="SS Salon Interior"
                    className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold tracking-wide text-primary">
                    Дээд зэрэглэлийн гоо сайхны студи
                </span>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    Дэгжин байдал бол <span className="text-primary italic">Таны хандлага</span>
                </h1>
                <p className="mx-auto mb-8 max-w-[600px] text-lg text-muted-foreground md:text-xl">
                    Улаанбаатар хотын хамгийн шилдэг хумс арчилгаа, гоо сайхны үйлчилгээг мэдрээрэй.
                    Урлаг ба төгс гүйцэтгэл.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="rounded-full px-8 text-lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Цаг авах
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 text-lg" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
                        Үйлчилгээ үзэх
                    </Button>
                </div>
            </div>
        </section>
    );
}
