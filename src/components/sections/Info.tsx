import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "../ui/button";

export function About() {
    return (
        <section id="about" className="py-20 px-4 md:px-6 bg-secondary/30">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 aspect-square bg-muted rounded-2xl overflow-hidden relative shadow-xl">
                    <img
                        src="/about-image.png"
                        alt="Salon tools"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">SS SALON-ий тухай</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Улаанбаатар хотын төвд байрлах SS SALON-д тавтай морилно уу.
                        Манай чадварлаг хамт олон танд тав тухтай орчинд дээд зэрэглэлийн хумс болон үс арчилгааны үйлчилгээ үзүүлэхэд бэлэн байна.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Та энгийн арчилгаа эсвэл бүрэн өөрчлөлтийг хүсч байгаа эсэхээс үл хамааран бид таны хүслийг биелүүлэх болно.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-primary">500+</span>
                            <span className="text-sm font-medium">Сэтгэл ханамж</span>
                        </div>
                        <div className="w-px bg-border h-12 mx-4"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-primary">5+</span>
                            <span className="text-sm font-medium">Жилийн туршлага</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 md:px-6 bg-rose-950 text-rose-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Биднийг зориорой</h2>
                    <p className="mb-8 text-rose-100/80">
                        Та өөрчлөлтөнд бэлэн үү? Цаг захиалах эсвэл бидэнтэй холбогдоорой.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="mt-1 text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Хаяг</h3>
                                <p className="text-rose-100/70">Улаанбаатар, Монгол</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="mt-1 text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Утас</h3>
                                <p className="text-rose-100/70">9986 9109</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="mt-1 text-primary" />
                            <div>
                                <h3 className="font-semibold text-lg">Цагийн хуваарь</h3>
                                <p className="text-rose-100/70">Даваа - Ням: 10:00 - 20:00</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=100071314752100"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-rose-200 text-rose-200 hover:bg-rose-900 hover:text-white h-10 py-2 px-4"
                        >
                            <Facebook className="mr-2 h-4 w-4" /> Facebook
                        </a>
                        <Button variant="outline" className="border-rose-200 text-rose-200 hover:bg-rose-900 hover:text-white">
                            <Instagram className="mr-2 h-4 w-4" /> Instagram
                        </Button>
                    </div>
                </div>

                <div className="rounded-2xl bg-white p-8 text-slate-900 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">Зурвас илгээх</h3>
                    <form className="space-y-4" onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                        const smsBody = `Сайн байна уу? Цаг захиалах хүсэлтэй байна. \nНэр: ${name}\nУтас: ${phone}\nЗурвас: ${message}`;
                        // Use a generic handler that might work on both iOS and Android
                        window.location.href = `sms:88011648?body=${encodeURIComponent(smsBody)}`;
                    }}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Нэр</label>
                                <input id="name" name="name" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Таны нэр" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium">Утас</label>
                                <input id="phone" name="phone" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="9911-xxxx" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Зурвас</label>
                            <textarea id="message" name="message" required className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder="Бид танд юугаар туслах вэ?" />
                        </div>
                        <Button className="w-full" type="submit">Илгээх</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
