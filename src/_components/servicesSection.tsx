import { services } from "@/_datas/services.data";
import type { Service } from '@/_datas/services.data';

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <li className="flex flex-col flex-1 basis-0 items-center p-8 border border-neutral-800 rounded-lg bg-neutral-900">
      <div className="border border-neutral-300 rounded-full p-2 m-2 mb-4">
          <Icon className="w-6 h-6 text-neutral-300" />
      </div>
      <p className="font-bold text-center">{service.name}</p>
      <p className="text-center">{service.detail}</p>
    </li>
  );
}

export default function ServicesSection() {
  return (
    <section className="flex flex-col py-8 px-16 space-y-6">
      <h1 className="text-5xl font-thin">Services</h1>

      <ul className="flex gap-8">
        {services.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ul>
    </section>
  );
}