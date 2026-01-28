import { services } from "@/_datas/services.data";
import type { Service } from "@/_datas/services.data";

type ServiceCardProps = {
	service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
	const Icon = service.icon;

	return (  //1.flex-1 basis-0삭제, 2.w-full추가(부모 그리드 너비에 맞게 설정)
    <article className="flex flex-col items-center p-8 border border-neutral-800 rounded-lg bg-neutral-900 w-full">
      <div className="border border-neutral-300 rounded-full p-2 m-2 mb-4">
          <Icon className="w-6 h-6 text-neutral-300" />
      </div> {/*글씨 디테일 조정->font-medium text-lg mb-2추가*/}
      <p className="font-bold text-center font-medium text-lg mb-2">{service.name}</p>
      <p className="text-center">{service.detail}</p>
    </article>
  );
}

export default function ServicesSection() {
	return (
		<section className="flex flex-col py-8 px-0 xl:px-16 space-y-6 w-full">
			<h1 className="text-3xl md:text-5xl font-light">Services</h1>

			<ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {services.map((service: Service, i: number) => (
          <li
            key={service.id}
            className="stagger"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <ServiceCard service={service} />
          </li>
        ))}
    </ul>


		</section>
	);
}