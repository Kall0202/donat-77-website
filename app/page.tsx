"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const headerDonutsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateHeaderDonuts = () => {
      if (!headerDonutsRef.current) return

      const donut1 = headerDonutsRef.current.querySelector(".donut1") as HTMLElement
      const donut2 = headerDonutsRef.current.querySelector(".donut2") as HTMLElement

      if (donut1 && donut2) {
        donut1.style.animation = "fallDonut 2s ease-in-out"
        setTimeout(() => {
          donut2.style.animation = "fallDonut 2s ease-in-out"
        }, 500)
      }
    }

    animateHeaderDonuts()
  }, [])

  return (
    <main className="min-h-screen bg-pink-50">
      {/* Header with animated donuts */}
      <header className="bg-pink-500 text-white py-4 px-6 flex justify-between items-center relative overflow-hidden">
        <div className="z-10">
          <h1 className="text-2xl font-bold">Donat 77</h1>
          <p className="text-sm">Manis di Mulut, Ramah di Kantong</p>
        </div>

        <div ref={headerDonutsRef} className="absolute inset-0 overflow-hidden">
          <div className="donut1 absolute -top-20 left-1/4 opacity-30">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Donut"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="donut2 absolute -top-20 right-1/4 opacity-30">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Donut"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="z-10">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:underline">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Tentang
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Kontak
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 bg-gradient-to-b from-pink-500 to-pink-300 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Donat Lezat untuk Semua Kantong</h2>
            <p className="text-xl mb-8">Pengganjal perut saat lapar dengan harga mahasiswa</p>
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-pink-600 hover:bg-pink-100">Pesan Sekarang</Button>
              <Button variant="outline" className="border-white text-white hover:bg-pink-600">
                Lihat Menu
              </Button>
            </div>
          </motion.div>
          <div className="mt-12">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Donat 77 Showcase"
              width={600}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Tentang Donat 77</h2>
            <div className="w-20 h-1 bg-pink-400 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="About Donat 77"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">Cerita Kami</h3>
              <p className="text-gray-700 mb-4">
                Donat 77 hadir sebagai solusi bagi mahasiswa yang ingin menikmati camilan lezat tanpa menguras kantong.
                Kami memahami kebutuhan mahasiswa akan makanan yang mengenyangkan dengan harga terjangkau.
              </p>
              <p className="text-gray-700 mb-4">
                Setiap donat kami dibuat dengan bahan berkualitas dan resep rahasia yang telah disempurnakan selama
                bertahun-tahun, menghasilkan donat yang lembut, manis, dan memuaskan.
              </p>
              <p className="text-gray-700">
                Misi kami adalah menyediakan donat berkualitas dengan harga yang ramah di kantong mahasiswa, sambil
                tetap mempertahankan cita rasa yang lezat dan memuaskan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-6 bg-pink-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Menu Donat Kami</h2>
            <p className="text-gray-700">Pilihan donat lezat untuk menemani harimu</p>
            <div className="w-20 h-1 bg-pink-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Donut Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Coklat"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Coklat</h3>
                <p className="text-gray-600 mb-4">Donat lembut dengan taburan coklat yang manis dan lezat</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 5.000</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>

            {/* Donut Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Strawberry"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Strawberry</h3>
                <p className="text-gray-600 mb-4">Donat dengan glasir strawberry yang segar dan menyegarkan</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 5.500</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>

            {/* Donut Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Kacang"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Kacang</h3>
                <p className="text-gray-600 mb-4">Donat dengan taburan kacang yang renyah dan gurih</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 6.000</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>

            {/* Donut Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Vanilla"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Vanilla</h3>
                <p className="text-gray-600 mb-4">Donat dengan glasir vanilla yang manis dan lembut</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 5.000</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>

            {/* Donut Item 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Tiramisu"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Tiramisu</h3>
                <p className="text-gray-600 mb-4">Donat dengan rasa tiramisu yang khas dan mewah</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 7.000</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>

            {/* Donut Item 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Donat Original"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Donat Original</h3>
                <p className="text-gray-600 mb-4">Donat klasik dengan taburan gula yang sederhana namun lezat</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-600 font-bold">Rp 4.500</span>
                  <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                    Pesan
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-pink-500 hover:bg-pink-600">Lihat Semua Menu</Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">Kerjasama dengan Donat 77</h2>
          <p className="text-gray-700 mb-8">
            Tertarik untuk bekerjasama dengan Donat 77 untuk acara atau jasa titip? Kami terbuka untuk berbagai bentuk
            kerjasama yang saling menguntungkan.
          </p>
          <div className="bg-pink-100 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Keuntungan Kerjasama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-pink-500 mb-2">Jasa Titip (Jastip)</h4>
                <p className="text-gray-600">Dapatkan komisi menarik untuk setiap penjualan melalui jasa titip</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-pink-500 mb-2">Event & Acara</h4>
                <p className="text-gray-600">Harga khusus untuk pemesanan dalam jumlah besar untuk acara</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-pink-500 mb-2">Reseller</h4>
                <p className="text-gray-600">Program reseller dengan margin keuntungan yang menarik</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-pink-500 mb-2">Kustomisasi</h4>
                <p className="text-gray-600">Donat dengan desain khusus sesuai kebutuhan acara Anda</p>
              </div>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600">Ajukan Kerjasama</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Hubungi Kami</h2>
            <p className="text-gray-700">Punya pertanyaan atau ingin memesan? Hubungi kami sekarang!</p>
            <div className="w-20 h-1 bg-pink-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Alamat</h4>
                  <p className="text-gray-600">Jl. Donat Manis No. 77, Dekat Kampus</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Jam Operasional</h4>
                  <p className="text-gray-600">Senin - Minggu: 08.00 - 21.00</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <p className="text-gray-600">info@donat77.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Telepon</h4>
                  <p className="text-gray-600">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500 hover:bg-green-600">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </Link>
                <Link href="https://instagram.com/donat77" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-pink-600 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="email@anda.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600">
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-12 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Donat 77</h3>
              <p className="mb-4">Donat lezat dengan harga mahasiswa</p>
              <p>© {new Date().getFullYear()} Donat 77. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tautan</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:underline">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:underline">
                    Tentang
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:underline">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:underline">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-pink-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-pink-200">
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated donuts in footer */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 opacity-20 animate-[moveLeft_15s_linear_infinite]">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Donut"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 animate-[moveRight_15s_linear_infinite]">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Donut"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </footer>
    </main>
  )
}
