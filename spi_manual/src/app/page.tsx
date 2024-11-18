import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Download, FileText } from 'lucide-react'

export default function Component() {
  return (
      <div className="container mx-auto px-4 py-12 bg-[#2C001E] text-white min-h-screen">
        <h1 className="text-5xl font-bold mb-8 text-[#E95420]">OpenAPI Gateway</h1>
        <p className="text-xl mb-12 max-w-2xl text-[#AEA79F]">
          Welcome to OpenAPI Gateway, a modern API management solution with built-in JWT authorization and intuitive interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#430027] border-[#77216F]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#E95420]">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Web-based API routing and management",
                  "Built-in JWT authorization",
                  "User-friendly interface for API configuration",
                  "Automatic generation of api_gateway.yaml file",
                  "Easy deployment and configuration",
                ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="h-5 w-5 text-[#E95420] mr-2" />
                      <span className="text-[#AEA79F]">{feature}</span>
                    </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#430027] border-[#77216F]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#E95420]">Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  "Configure your API gateway settings",
                  "Generate your api_gateway.yaml file",
                  "Download the API gateway server",
                  "Deploy and run your API gateway",
                ].map((step, index) => (
                    <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#E95420] text-white rounded-full mr-3">
                    {index + 1}
                  </span>
                      <span className="text-[#AEA79F]">{step}</span>
                    </li>
                ))}
              </ol>
              <div className="mt-8">
                <Link href="/configure" passHref>
                  <Button className="w-full bg-[#E95420] hover:bg-[#C84113] text-white">
                    Start Configuration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#430027] border-[#77216F]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#E95420]">Downloads</CardTitle>
            <CardDescription className="text-[#AEA79F]">Get the necessary files to run your API gateway</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-[#AEA79F]">API Gateway Server</h3>
              <Button asChild className="w-full bg-[#77216F] hover:bg-[#5E2750] text-white">
                <a href="/api_gateway_server.zip" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Server
                </a>
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#AEA79F]">Documentation</h3>
              <Button asChild variant="outline" className="w-full border-[#77216F] hover:bg-[#5E2750] text-white">
                <a href="/api_gateway_docs.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download Documentation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}