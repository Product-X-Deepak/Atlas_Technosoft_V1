"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Suspense } from "react"

// Remove export from the component definition
function ManufacturingCtaComponent() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#F0F7FF] to-blue-100">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-600/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-800">
            <span>Ready to transform your manufacturing operations?</span>
          </div>
          
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Ready to Transform Your <span className="text-[#3B82F6]">Manufacturing Operations?</span>
          </h2>
          
          <p className="mt-4 text-lg text-slate-600">
            Contact our manufacturing technology experts to discuss how our tailored solutions can streamline operations, enhance productivity, and drive innovation.
          </p>
          
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button 
              className="bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 group w-full sm:w-auto" 
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/90 border-[#6B7280] text-[#6B7280] hover:bg-[#6B7280]/10 hover:border-[#6B7280] w-full sm:w-auto group" 
              asChild
            >
              <Link href="/solutions" className="flex items-center justify-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 

// Wrapper component with Suspense boundary
function ManufacturingCta(props: Record<string, never>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <ManufacturingCtaComponent {...props} />
    </Suspense>
  )
}

// Wrapper component to ensure proper Suspense boundaries for useSearchParams
function ManufacturingCtaWrapper(props: Record<string, never>) {
  return (
    <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted/20 rounded-lg" />}>
      <ManufacturingCta {...props} />
    </Suspense>
  );
}

// Modify the export to use the wrapped version
export { ManufacturingCtaWrapper as ManufacturingCta };