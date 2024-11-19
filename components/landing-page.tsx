"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Mail, MapPin, Menu, Phone, X, ChevronRight, ArrowRight, Star, Users, Zap, Shield } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function LandingPageComponent() {
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className={`text-2xl font-bold ${isScrolled ? "text-[#0047AB]" : "text-white"}`}>SKYLINE ALUMINIUM</span>
          <nav className="hidden md:flex space-x-6">
            {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                className={`transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#0047AB]" : "text-white hover:text-gray-200"
                }`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20">
          <nav className="flex flex-col items-center space-y-6 p-4">
            {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-gray-700 text-2xl hover:text-[#0047AB] transition-colors"
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
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl text-white">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-10-31_03-24-19-9PKtEJk5KyA2jZGGqhPJTPVWNGwrpB.jpg"
                alt="SKYLINE ALUMINIUM Logo"
                width={120}
                height={120}
                className="mb-8 rounded-full animate-pulse"
              />
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                Elevate Your Space with Premium Aluminium & Glass
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                SKYLINE ALUMINIUM delivers cutting-edge solutions for modern architecture and interiors.
              </p>
              <Button size="lg" className="bg-white text-[#0047AB] hover:bg-gray-100 animate-fade-in-up animation-delay-400 group">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Aluminium Fabrication",
                  description: "Custom aluminium structures and frames tailored to your specific requirements.",
                  icon: <Building2 className="h-12 w-12 text-[#0047AB]" />,
                },
                {
                  title: "Glass Installation",
                  description: "Expert installation of glass partitions, windows, and doors for a modern look.",
                  icon: <Zap className="h-12 w-12 text-[#0047AB]" />,
                },
                {
                  title: "Commercial Solutions",
                  description: "Comprehensive aluminium and glass solutions for commercial and office spaces.",
                  icon: <Shield className="h-12 w-12 text-[#0047AB]" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href="#" className="text-[#0047AB] font-semibold hover:underline inline-flex items-center">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
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
                { title: "Modern Office Partition", category: "Commercial" },
                { title: "Residential Sliding Doors", category: "Residential" },
                { title: "Corporate Facade", category: "Commercial" },
                { title: "Luxury Home Windows", category: "Residential" },
                { title: "Retail Storefront", category: "Commercial" },
                { title: "Hotel Lobby Renovation", category: "Hospitality" },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                  <div className="h-48 bg-gradient-to-br from-[#0047AB] to-[#00BFFF] flex items-center justify-center">
                    <Building2 className="h-24 w-24 text-white opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.category}</p>
                    <Button variant="outline" className="group">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">About SKYLINE ALUMINIUM</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience, SKYLINE ALUMINIUM has been at the forefront of innovative aluminium and glass solutions. Our commitment to quality, precision, and customer satisfaction has made us a leader in the industry.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: "500+", label: "Projects Completed", icon: <Star className="h-8 w-8 text-[#0047AB]" /> },
                  { number: "50+", label: "Expert Team Members", icon: <Users className="h-8 w-8 text-[#0047AB]" /> },
                  { number: "98%", label: "Client Satisfaction", icon: <Shield className="h-8 w-8 text-[#0047AB]" /> },
                ].map((stat, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg flex flex-col items-center">
                    {stat.icon}
                    <div className="text-4xl font-bold text-[#0047AB] my-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
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
                <Button className="w-full bg-white text-[#0047AB] hover:bg-gray-100 transition-colors duration-300 group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-2xl font-bold">SKYLINE ALUMINIUM</div>
            <div className="flex space-x-6">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <Link key={item} className="hover:text-[#00BFFF] transition-colors" href={`#${item.toLowerCase()}`}>
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
