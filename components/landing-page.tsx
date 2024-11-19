"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, MapPin, Menu, Phone, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0047AB]/90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-24-19-9PKtEJk5KyA2jZGGqhPJTPVWNGwrpB.jpg"
              alt="SKYLINE ALUMINIUM Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">SKYLINE ALUMINIUM</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Services", "Projects", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-white hover:text-gray-300 transition-colors"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0047AB] pt-20">
          <nav className="flex flex-col items-center space-y-6 p-4">
            {["Home", "Services", "Projects", "Gallery", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main>
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0047AB] to-[#00BFFF]">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl text-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-24-19-9PKtEJk5KyA2jZGGqhPJTPVWNGwrpB.jpg"
                alt="SKYLINE ALUMINIUM Logo"
                width={120}
                height={120}
                className="mb-8 animate-pulse"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                Elevate Your Space with Premium Aluminium & Glass
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                SKYLINE ALUMINIUM delivers cutting-edge solutions for modern architecture and interiors.
              </p>
              <Button size="lg" className="bg-white text-[#0047AB] hover:bg-gray-100 animate-fade-in-up animation-delay-400">
                Get a Free Quote
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Aluminium Fabrication",
                  description: "Custom aluminium structures and frames tailored to your specific requirements.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-28-5haGMTNKhIDxRGaLK7kJ6EKbgJvmH8.jpg",
                },
                {
                  title: "Glass Installation",
                  description: "Expert installation of glass partitions, windows, and doors for a modern look.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-22-1U3CMymw7rjpkHZy5zjXzPeh6Oo6vO.jpg",
                },
                {
                  title: "Commercial Solutions",
                  description: "Comprehensive aluminium and glass solutions for commercial and office spaces.",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-31-BlBz2bGFEngOo1AxaZhUaVIAXvCjUI.jpg",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Office Partition",
                  category: "Commercial",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-22-1U3CMymw7rjpkHZy5zjXzPeh6Oo6vO.jpg",
                },
                {
                  title: "Residential Sliding Doors",
                  category: "Residential",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-28-5haGMTNKhIDxRGaLK7kJ6EKbgJvmH8.jpg",
                },
                {
                  title: "Corporate Facade",
                  category: "Commercial",
                  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-31-BlBz2bGFEngOo1AxaZhUaVIAXvCjUI.jpg",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-4">{project.category}</p>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Work Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-22-1U3CMymw7rjpkHZy5zjXzPeh6Oo6vO.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-28-5haGMTNKhIDxRGaLK7kJ6EKbgJvmH8.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-31-BlBz2bGFEngOo1AxaZhUaVIAXvCjUI.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-22-1U3CMymw7rjpkHZy5zjXzPeh6Oo6vO.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-28-5haGMTNKhIDxRGaLK7kJ6EKbgJvmH8.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-31-BlBz2bGFEngOo1AxaZhUaVIAXvCjUI.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-22-1U3CMymw7rjpkHZy5zjXzPeh6Oo6vO.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-38-28-5haGMTNKhIDxRGaLK7kJ6EKbgJvmH8.jpg",
              ].map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={image} alt={`Gallery Image ${index + 1}`} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-[#0047AB] to-[#00BFFF] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6" />
                    <div>
                      <p>0952111888</p>
                      <p>0911535846</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6" />
                    <p>skylineplcethiopia@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6" />
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <form className="space-y-6">
                <Input type="text" placeholder="Your Name" className="bg-white text-black" />
                <Input type="email" placeholder="Your Email" className="bg-white text-black" />
                <Input type="tel" placeholder="Your Phone" className="bg-white text-black" />
                <Textarea className="bg-white text-black" placeholder="Your Message" rows={4} />
                <Button className="w-full bg-white text-[#0047AB] hover:bg-gray-100 transition-colors duration-300">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-24-19-9PKtEJk5KyA2jZGGqhPJTPVWNGwrpB.jpg"
                alt="SKYLINE ALUMINIUM Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">SKYLINE ALUMINIUM</span>
            </div>
            <div className="flex space-x-6">
              {["Home", "Services", "Projects", "Gallery", "Contact"].map((item) => (
                <Link key={item} className="hover:text-gray-300 transition-colors" href={`#${item.toLowerCase()}`}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 SKYLINE ALUMINIUM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
                    }
