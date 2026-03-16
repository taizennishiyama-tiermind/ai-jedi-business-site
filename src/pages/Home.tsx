import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { Cases } from '@/components/sections/Cases'
import { DevOS } from '@/components/sections/DevOS'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { Transformation } from '@/components/sections/Transformation'
import { Team } from '@/components/sections/Team'
import { Summary } from '@/components/sections/Summary'
import { services } from '@/data/services'

function SectionBreak() {
  return <div className="w-full h-px bg-gray-100 mb-14" />
}

export function Home() {
  return (
    <div>
      <Hero />

      <PainPoints />
      <SectionBreak />

      <ServicesOverview />
      <SectionBreak />

      {/* 5つのサービス詳細 */}
      {services.map((service, i) => (
        <div key={service.id}>
          <ServiceDetail service={service} />
          {i < services.length - 1 && <SectionBreak />}
        </div>
      ))}
      <SectionBreak />

      <Cases />
      <SectionBreak />

      <DevOS />
      <SectionBreak />

      <ValueProposition />
      <SectionBreak />

      <Transformation />
      <SectionBreak />

      <Team />
      <SectionBreak />

      <Summary />
    </div>
  )
}
