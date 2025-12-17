import { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Нүүр', href: '#home' },
        { name: 'Үйлчилгээ', href: '#services' },
        { name: 'Бидний тухай', href: '#about' },
        { name: 'Холбоо барих', href: '#contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold tracking-widest text-primary" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
                    SS SALON
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className="text-sm font-medium transition-colors hover:text-primary bg-transparent border-none cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Socials & CTA (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100071314752100" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        <Instagram size={20} />
                    </a>
                    <Button onClick={() => scrollToSection('#contact')}>Цаг авах</Button>
                </div>
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-background p-4 animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex gap-4 pt-4 border-t">
                            <a href="#" className="flex items-center gap-2 text-muted-foreground">
                                <Facebook size={20} /> Facebook
                            </a>
                        </div>
                        <Button className="w-full">Цаг авах</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
