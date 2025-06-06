"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Clock, Mail, MapPin, Phone } from "lucide-react"
import { Suspense } from "react"

function ContactInfo() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.3 })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="h-full bg-[#1E1E38] border-[#1E1E38]/80 shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-5 md:p-6">
          <div className="flex items-center mb-4 gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Building className="h-5 w-5 text-[#E84A0E]" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Our Offices</h2>
              <p className="text-xs text-slate-300">Get in touch with our team</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b border-white/10 pb-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-4 w-4 text-[#E84A0E]" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1 text-sm">Head Office</h3>
                  <p className="text-xs text-slate-300">
                    Office No.29, Building No.108/116, Vitthalwadi,<br />
                    Kalabadevi Road, Marine Lines,<br />
                    Mumbai - 400 002 Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Building className="h-4 w-4 text-[#A73370]" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1 text-sm">Branch Office</h3>
                  <p className="text-xs text-slate-300">
                    F/2nd Floor, Yashodhan Building, Chandavarkar Road,<br />
                    Om Shanti Chowk, Borivali(west),<br />
                    Mumbai - 400 092 Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid gap-4">
                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4 text-[#E84A0E]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 text-sm">Phone</h3>
                    <p className="text-xs text-slate-300">
                      +91-22-2240 1925<br />
                      +91-22-4022 1925
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      Mobile: +91-9372329599
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4 text-[#A73370]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 text-sm">Email</h3>
                    <p className="text-xs text-slate-300">
                      <a href="mailto:info@atlastechnosoft.com" className="hover:text-[#E84A0E] transition-colors">
                        {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@atlastechnosoft.com"}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Clock className="h-4 w-4 text-[#E84A0E]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1 text-sm">Business Hours</h3>
                    <p className="text-xs text-slate-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="font-medium text-white mb-2 text-sm">Connect With Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E84A0E]/80 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/atlas-technosoft-pvt-ltd",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>,
  },
  {
    label: "Twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/Atlas_SAP",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>,
  },
  {
    label: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/Atlascomputer/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>,
  },
  {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/atlas_technosoft",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>,
  },
]

// Wrapper component to ensure proper Suspense boundaries for useSearchParams
function ContactInfoWrapper(props: Record<string, never>) {
  return (
    <Suspense fallback={<div className="min-h-[250px] animate-pulse bg-muted/20 rounded-lg" />}>
      <ContactInfo {...props} />
    </Suspense>
  );
}

// Modify the export to use the wrapped version
export { ContactInfoWrapper as ContactInfo };