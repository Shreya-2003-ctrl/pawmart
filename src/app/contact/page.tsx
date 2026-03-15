"use client";

import { Mail, Phone, MapPin, MessageCircle, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields 🐾");
      return;
    }

    toast.success("Message sent!", {
      description: "Our team will contact you within 24 hours 🐶",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-linear-to-b from-orange-50 via-white to-yellow-50 py-20">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-semibold mb-5">
            <PawPrint className="w-4 h-4" />
            We Love Talking About Pets
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Get in Touch 🐾
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions about food, toys, or care for your furry friend?
            Our PawMart team is always happy to help!
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 space-y-5"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send Us a Message 💌
            </h2>

            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="rounded-full h-12"
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="rounded-full h-12"
            />

            <Textarea
              placeholder="Tell us how we can help your pet..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-2xl"
            />

            <Button
              type="submit"
              className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg"
            >
              Send Message 🐶
            </Button>
          </form>

          {/* INFO CARD */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "hello@pawmart.com",
                color: "bg-pink-100 text-pink-500",
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "+1 (555) PAW-MART",
                color: "bg-blue-100 text-blue-500",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                desc: "123 Pet Street, Fur City",
                color: "bg-green-100 text-green-500",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className={`p-3 rounded-xl ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-bold py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat With Us on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;