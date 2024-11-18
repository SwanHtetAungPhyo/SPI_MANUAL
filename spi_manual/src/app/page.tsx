import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Download, FileText, Terminal } from 'lucide-react'

export default function Component() {
  return (
      <div className="container mx-auto px-4 py-12 bg-[#1a1a1a] text-gray-300 min-h-screen">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#4bffb5]">SPI(API Gateway)</h1>
          <p className="text-lg max-w-2xl mx-auto text-white-400">
            This project represents a personal endeavor to explore the complexities and
            possibilities of modern system architecture, particularly focusing on microservices. My
            goal is to deepen my understanding and gain hands-on experience in this field.
            I am Swan Htet Aung Phyo, currently pursuing a degree in Computer Science at AGH
            University of Science and Technology in Kraków.
            <br/>
            <span className="font-bold"> Swan Htet Aung Phyo</span>
          </p>

        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#2b2b2b] border-[#4bffb5] border">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4bffb5] flex items-center">
                <Terminal className="mr-2 h-6 w-6"/>
                Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Predefined services in the api_gate_way.ymal file",
                  "Build JWT authorization. So, you don't need to set up ",
                  "Developer-centric Monitoring interface",
                  "Automated api_gateway.yaml generation",

                ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <ArrowRight className="h-4 w-4 text-[#4bffb5] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#2b2b2b] border-[#4bffb5] border">
            <CardHeader>
              <CardTitle className="text-2xl text-[#4bffb5] flex items-center">
                <Terminal className="mr-2 h-6 w-6" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  "Pull the SPI gateway image from the docker hub",
                  "Generate api_gateway.yaml with the SPI CLI",
                  "Run the docker image which will be listening on the localhost:8081",
                  "Mount the api_gateway.yaml to the container",
                    "With SPI CLI, pull the default project set up which includes user registration and login based on your framework"
                ].map((step, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#4bffb5] text-[#1a1a1a] rounded-sm mr-3 text-sm font-mono">
                    {index + 1}
                  </span>
                      <span>{step}</span>
                    </li>
                ))}
              </ol>
              <div className="mt-6">
                <Link href="/configure" passHref>
                  <Button className="w-full bg-[#4bffb5] hover:bg-[#3ce0a1] text-[#1a1a1a]">
                    Initialize Configuration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#2b2b2b] border-[#4bffb5] border">
          <CardHeader>
            <CardTitle className="text-2xl text-[#4bffb5] flex items-center">
              <Terminal className="mr-2 h-6 w-6" />
              Resources
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-[#4bffb5] hover:bg-[#3ce0a1] text-[#1a1a1a]">
              <a href="/linux/spi_linux.zip" download className="flex items-center justify-center">
                <Download className="mr-2 h-4 w-4"/>
                Download SPI CLI (Linux)
              </a>
            </Button>
          </CardContent>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-[#4bffb5] hover:bg-[#3ce0a1] text-[#1a1a1a]">
              <a href="/darwin/spi_darwin.zip" download className="flex items-center justify-center">
                <Download className="mr-2 h-4 w-4"/>
                Download SPI CLI (Mac)
              </a>
            </Button>
          </CardContent>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-[#4bffb5] hover:bg-[#3ce0a1] text-[#1a1a1a]">
              <a href="/windows/spi_window.zip" download className="flex items-center justify-center">
                <Download className="mr-2 h-4 w-4"/>
                Download SPI CLI (Window)
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
  )
}