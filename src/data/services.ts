// The eight services, one page each at /services/<slug>/.
// Text carried over from the old shivsagarenterprise.com service pages (Nov 2026), with spelling made
// consistent ("moulding") and the WordPress theme's placeholder paragraphs left out.
import type { IconName } from './site';

export type Service = {
	slug: string;
	/** Old WordPress URL, redirected to the new page in public/_redirects. */
	oldPath: string;
	icon: IconName;
	title: string;
	short: string;
	lead?: boolean;
	headline: string;
	intro: string[];
	sections?: { title: string; body: string }[];
	includesTitle: string;
	includes: string[];
	industries?: string[];
	whyTitle: string;
	why: string[];
	whyBody?: string;
	features?: { title: string; body: string }[];
	faq: { q: string; a: string }[];
};

export const services: Service[] = [
	{
		slug: 'injection-moulding',
		oldPath: '/service/injection-molding/',
		icon: 'inject',
		title: 'Injection moulding',
		short: 'Precision manufacturing of plastic parts on high-quality moulding machines, for industrial and custom applications.',
		lead: true,
		headline: 'Precision. Performance. Perfection.',
		intro: [
			'At Shiv Sagar Enterprise, we specialise in high-quality plastic injection moulding tailored to the demanding needs of many industries. With over 25 years of experience, we deliver custom-engineered plastic components that combine durability, consistency and affordability.',
		],
		sections: [
			{
				title: 'What is injection moulding?',
				body: "Injection moulding is a manufacturing process for producing parts by injecting molten material into a mould. It's widely used for producing large volumes of plastic parts with precision and repeatability. At Shiv Sagar, we've perfected this process through advanced machinery and rigorous quality checks so your parts come out right every single time.",
			},
		],
		includesTitle: 'Our injection moulding capabilities',
		includes: [
			'Custom mould design & development',
			'Material selection guidance',
			'Prototype to production',
			'Tight-tolerance manufacturing',
			'Post-moulding operations',
			'Insert moulding',
			'Tool maintenance & refurbishment',
		],
		industries: ['Automotive', 'Medical devices', 'Industrial equipment', 'Consumer goods', 'Electrical & electronics', 'Laboratory & scientific equipment'],
		whyTitle: 'Why choose Shiv Sagar Enterprise?',
		why: [
			'25+ years of experience in plastic injection moulding',
			'Modern manufacturing unit in Gujarat',
			'Strict quality control & testing',
			'On-time delivery & scalable production capacity',
			'Trusted by Indian and international clients',
			'Custom solutions for diverse industries',
			'Skilled technical team & continuous improvement',
		],
		whyBody: 'We combine decades of expertise with modern technology to deliver precision-moulded plastic parts. Our team is committed to quality, innovation and client satisfaction on every project, and our facility is equipped for scalable production — so you get reliable, cost-effective, customised injection moulding with timely delivery.',
		faq: [
			{ q: 'What materials can be used for injection moulding?', a: "We work with a wide range of thermoplastics such as polypropylene (PP), ABS, high-density polyethylene (HDPE), nylon (PA) and more, depending on your product's application and durability requirements." },
			{ q: 'How long does the injection moulding process take?', a: 'Once the mould is ready, cycle times typically range from a few seconds to a couple of minutes per part. Total production time depends on the complexity, quantity and post-processing needs.' },
			{ q: 'Can you help with designing the mould?', a: 'Yes. Shiv Sagar Enterprise offers in-house mould design and development. Our engineering team uses CAD/CAM tools to design moulds for high precision and efficiency.' },
			{ q: 'What is the minimum order quantity (MOQ)?', a: 'Our minimum order quantity depends on the size and complexity of the part. We are flexible and can accommodate both prototype batches and high-volume production runs.' },
			{ q: 'How do you ensure quality in moulded parts?', a: 'We follow strict quality control procedures, including dimensional inspections, material testing and surface quality checks, so each part meets the required standards and your specifications.' },
		],
	},
	{
		slug: 'ac-dc-motor-components',
		oldPath: '/service/ac-dc-motor-plastic/',
		icon: 'fan',
		title: 'AC/DC motor plastic components',
		short: 'High-performance plastic components engineered for durability, precision and reliability in AC/DC motor applications.',
		headline: 'Precision-engineered plastic components for AC/DC motors',
		intro: [
			'At Shiv Sagar Enterprise, we specialise in manufacturing high-quality plastic components designed for AC and DC motors. Our products are engineered for a seamless fit and reliable performance in demanding motor applications. Using advanced moulding techniques, we create durable parts that withstand continuous mechanical stress, and each component is tested to meet customer-specific requirements.',
		],
		sections: [
			{
				title: 'Customised solutions for diverse motor applications',
				body: 'We make tailor-made plastic motor components for the automotive, electrical and consumer appliance sectors. Our customisation process accommodates unique dimensions, tolerances and performance criteria, so components fit seamlessly within your AC/DC motor systems — which is why OEMs and engineering firms trust us as a partner.',
			},
			{
				title: 'Quality, durability and cost-effective manufacturing',
				body: 'Our AC/DC motor plastic components are known for their strength, light weight and cost-efficiency. We use premium polymers with excellent thermal and electrical resistance, and our facility runs high-volume production under strict quality control. The result is defect-free components that reduce maintenance and improve motor performance, for small and large projects alike.',
			},
		],
		includesTitle: 'Our services for AC/DC motor components',
		includes: [
			'Custom design & development',
			'Injection moulding & precision manufacturing',
			'Material selection & consultation',
			'Prototyping & testing',
			'Bulk production & timely delivery',
			'Component assembly support',
			'Quality assurance & compliance',
		],
		whyTitle: 'Why choose Shiv Sagar for motor components?',
		why: ['Precision manufacturing', 'Superior quality materials', 'Custom design solutions', 'Advanced technology', 'Strict quality control', 'Expertise & experience', 'On-time delivery'],
		whyBody: 'We combine precision engineering, advanced technology and premium materials to deliver superior motor components — customised, reliable, durable and delivered on time.',
		features: [
			{ title: 'High precision and durability', body: 'Engineered with advanced moulding techniques, our components ensure an exact fit, superior strength and long-lasting performance in motor assemblies.' },
			{ title: 'Excellent thermal and electrical resistance', body: 'Made from premium polymers, our parts withstand high temperatures and provide superior insulation for reliable motor operation.' },
		],
		faq: [
			{ q: 'What types of plastic components do you manufacture for AC/DC motors?', a: 'We manufacture housings, insulators, fan blades, terminal covers and other precision-moulded motor parts.' },
			{ q: 'Can you provide customised components based on our motor design?', a: 'Yes, we specialise in custom-designed plastic components tailored to your exact motor specifications and requirements.' },
			{ q: 'What materials are used for these components?', a: 'We use high-quality polymers like nylon, ABS, PBT and other engineering-grade plastics known for durability and electrical resistance.' },
			{ q: 'Do you offer prototyping and testing?', a: 'Yes, we provide prototyping and thorough testing to ensure component compatibility and performance before mass production.' },
			{ q: 'Which industries do you serve with your motor components?', a: 'We cater to the automotive, electrical, appliance, industrial equipment and consumer electronics industries.' },
		],
	},
	{
		slug: 'rubber-moulded-parts',
		oldPath: '/service/custom-rubber-moulded-parts/',
		icon: 'ring',
		title: 'Custom rubber moulded parts',
		short: 'Custom O-rings, seals, gaskets, diaphragms and bushings in EPDM, silicone and special compounds.',
		headline: 'Rubber parts that seal, cushion and protect',
		// The old site's rubber page was empty; this text is drawn from its home, about and blog pages.
		intro: [
			'Alongside plastics, Shiv Sagar Enterprise moulds custom rubber components — more than 5,000 rubber parts a day. One supplier for the plastic housing and the seal that goes in it.',
			'We mould parts in a range of elastomers including EPDM, silicone, natural rubber and neoprene, choosing the compound for the conditions the part has to survive: water and steam, outdoor weather, heat, food contact or chemicals.',
		],
		sections: [
			{
				title: 'Where our rubber parts work',
				body: 'Pumps rely on our O-rings, seals and diaphragms for leak-proof operation. Dairy and food plants use our food-grade silicone gaskets for hygienic, easy-clean sealing. Motor makers use vibration-damping rubber mounts and bushings, and engineering and automotive customers use our rubber bushings in demanding conditions.',
			},
		],
		includesTitle: 'Rubber parts we make',
		includes: ['O-rings', 'Seals & sealing gaskets', 'Diaphragms', 'Bushings', 'Vibration-damping mounts', 'Food-grade silicone parts', 'Custom profiles to drawing or sample'],
		industries: ['Pumps & fluid handling', 'Dairy & food processing', 'Electric motors', 'Chemical & industrial equipment', 'Automotive & engineering'],
		whyTitle: 'Why choose Shiv Sagar for rubber parts?',
		why: ['5,000+ rubber parts a day', 'EPDM, silicone, natural rubber & neoprene', 'Food-grade options', 'Made to your drawing or sample', 'Plastic and rubber from one supplier'],
		faq: [
			{ q: 'Which rubber materials do you work with?', a: 'We mould EPDM, silicone (including food-grade), natural rubber, neoprene and special compounds selected for your application.' },
			{ q: 'Can you make rubber parts for food and dairy equipment?', a: 'Yes. We make food-grade silicone and rubber parts such as sealing gaskets and O-rings that are durable, safe and easy to clean.' },
			{ q: 'Can you match an existing part?', a: 'Yes. Send us a drawing or a sample of the part and we will develop a mould and compound to match it.' },
		],
	},
	{
		slug: 'mould-design',
		oldPath: '/service/mould-design/',
		icon: 'tool',
		title: 'Mould design',
		short: 'High-performance mould designs that reduce waste, cut cycle times and keep quality consistent across every batch.',
		headline: 'Innovative mould design for precision manufacturing',
		intro: [
			'At Shiv Sagar Enterprise, we specialise in designing high-performance moulds that ensure accuracy, efficiency and durability in production. Our mould designs are tailored to complex product requirements while reducing waste, minimising cycle times and delivering consistent quality across every batch.',
			'From prototypes to production-ready moulds, our designs bring ideas to life with precision, reduced waste and reliable performance.',
		],
		includesTitle: 'Our mould design services include',
		includes: ['3D CAD/CAM design', 'Prototype & pilot moulds', 'Single & multi-cavity moulds', 'Hot runner & cold runner systems', 'Insert & overmoulding design', 'Durability & performance analysis', 'Custom mould solutions'],
		whyTitle: 'Why choose Shiv Sagar for mould design?',
		why: ['Modern design technology', 'Industry expertise', 'Optimised efficiency', 'Scalable solutions', 'Customisation', 'Quality focused', 'End-to-end support'],
		whyBody: 'Mould design is the foundation of manufacturing excellence. With precision-driven designs, we help clients achieve consistent quality, efficient production and long-lasting results.',
		faq: [
			{ q: 'What is mould design in manufacturing?', a: 'Mould design is the process of creating a detailed blueprint for the moulds used in injection moulding, ensuring precision, durability and efficiency in production.' },
			{ q: 'How does good mould design benefit my project?', a: 'A well-designed mould ensures high-quality products, reduces defects, lowers material waste and speeds up production.' },
			{ q: 'Do you provide prototype moulds for testing?', a: 'Yes. We offer prototype and pilot moulds to validate designs before mass production.' },
			{ q: 'Can mould designs be customised for complex parts?', a: 'Absolutely. We specialise in custom mould design for complex geometries, insert moulding and overmoulding applications.' },
			{ q: 'Which industries use your mould design services?', a: 'Our mould designs serve the automotive, electronics, consumer goods, healthcare and industrial equipment industries.' },
		],
	},
	{
		slug: 'tooling',
		oldPath: '/service/toolingservices/',
		icon: 'grid',
		title: 'Tooling services',
		short: 'Mould bases, cores, cavities, inserts and fixtures — precision tooling that forms the backbone of efficient production.',
		headline: 'Precision tooling services for reliable manufacturing',
		intro: [
			'At Shiv Sagar Enterprise, we design and manufacture high-quality tooling that forms the backbone of efficient production. From mould bases and inserts to cores, cavities and precision components, our tooling ensures accuracy, durability and consistency — helping you achieve flawless results every time.',
			'With advanced machinery and expert craftsmanship, we deliver tools that guarantee efficiency, a longer lifespan and superior product quality across industries.',
		],
		includesTitle: 'Our tooling services include',
		includes: ['Mould base manufacturing', 'Core & cavity design', 'Insert & component fabrication', 'Die & fixture development', 'Prototype tooling', 'Tool maintenance & repair', 'Custom tooling solutions'],
		industries: ['Automotive manufacturing', 'Consumer goods', 'Electronics & electricals', 'Medical & healthcare', 'Industrial equipment', 'Construction & engineering', 'Energy & chemicals'],
		whyTitle: 'Why choose Shiv Sagar for tooling?',
		why: ['End-to-end tooling solutions', 'High-precision engineering', 'Durable & reliable tools', 'Customised designs', 'Prototyping expertise', 'Tool maintenance & support', 'Proven industry experience'],
		whyBody: 'Tooling is the foundation of quality manufacturing. Our precision-driven tooling combines advanced technology, skilled craftsmanship and reliable support to ensure accuracy, durability and efficiency at every stage of production.',
		features: [
			{ title: 'High-precision engineering', body: 'Advanced machining and design processes guarantee accuracy and consistency in every tool.' },
			{ title: 'Long-term reliability', body: 'Durable tooling built to reduce downtime and extend product life.' },
		],
		faq: [
			{ q: 'What types of tooling do you provide?', a: 'We offer complete tooling solutions including mould bases, cores, cavities, inserts, fixtures and prototype tooling.' },
			{ q: 'How do your tooling services ensure precision and quality?', a: 'Our tooling is developed on CNC machines with strict quality checks to achieve high accuracy, durability and consistent performance.' },
			{ q: 'Can you create custom tooling for unique requirements?', a: 'Yes. We design and fabricate custom tooling tailored to specific product designs, industry standards and production volumes.' },
			{ q: 'Do you provide maintenance and repair for tooling?', a: 'Absolutely. We offer tool maintenance, repair and optimisation to extend tool life and ensure reliable performance over time.' },
			{ q: 'Which industries benefit most from your tooling?', a: 'Our tooling supports automotive, consumer goods, electronics, healthcare, industrial equipment and construction.' },
		],
	},
	{
		slug: 'insert-moulding',
		oldPath: '/service/insert-moulding/',
		icon: 'inject',
		title: 'Insert moulding',
		short: 'Plastic moulded around metal or other components for strong, integrated parts with less assembly.',
		headline: 'High-strength insert moulding for complex applications',
		intro: [
			'Insert moulding at Shiv Sagar Enterprise combines plastic with metal or other components to create strong, reliable, integrated parts. The process reduces assembly time, improves durability and ensures precision for even the most complex designs — ideal for industries that demand both strength and efficiency.',
		],
		includesTitle: 'Our insert moulding services include',
		includes: ['Custom insert integration', 'Precision engineering', 'Multi-material moulding', 'Prototype insert moulding', 'Small to large volume production', 'Complex geometries', 'Durability & performance'],
		whyTitle: 'Why choose Shiv Sagar for insert moulding?',
		why: ['Seamless metal-plastic integration', 'Reduced assembly time', 'Cost-effective solutions', 'High reliability', 'Industry versatility', 'Advanced technology', 'Proven expertise'],
		whyBody: 'Our insert moulding combines innovation, technology and craftsmanship to deliver products that are stronger, more reliable and tailored to your industry.',
		faq: [
			{ q: 'What is insert moulding?', a: 'Insert moulding is a process where metal or other components are placed in the mould and plastic is moulded around them, forming a single integrated part.' },
			{ q: 'What are the benefits of insert moulding?', a: 'It provides extra strength, fewer assembly steps, better durability and reliable performance for complex designs.' },
			{ q: 'Which industries use insert moulding?', a: 'Automotive, electronics, medical devices, consumer goods and industrial equipment commonly rely on insert moulding.' },
			{ q: 'Can insert moulding handle custom designs?', a: 'Yes, we specialise in custom insert-moulded parts with complex geometries and unique material requirements.' },
			{ q: 'Is it suitable for both small and large production runs?', a: 'Absolutely. We provide scalable insert moulding for prototypes, small batches and full-scale production.' },
		],
	},
	{
		slug: 'machining',
		oldPath: '/service/machiningservices/',
		icon: 'grid',
		title: 'Machining services',
		short: 'CNC milling, turning and drilling for high-accuracy parts, from prototypes to volume production.',
		headline: 'High-precision machining for complex components',
		intro: [
			'At Shiv Sagar Enterprise, our machining services deliver precision-engineered components that meet demanding specifications. Using CNC milling, turning and drilling, we create high-accuracy parts that ensure durability, reliability and seamless integration into your products.',
			'From prototypes to large-scale production, we provide reliable, accurate and cost-efficient machining tailored to diverse industry needs.',
		],
		includesTitle: 'Our machining services include',
		includes: ['CNC milling & turning', 'Drilling & boring', 'Surface finishing', 'Custom part fabrication', 'Prototype machining', 'High-volume production', 'Tight-tolerance machining'],
		whyTitle: 'Why choose Shiv Sagar for machining?',
		why: ['Advanced CNC technology', 'Expert engineering team', 'Versatile capabilities', 'Superior accuracy', 'Quality control', 'Cost-effective solutions', 'Cross-industry experience'],
		whyBody: "Machining is about more than shaping parts — it's about delivering precision, consistency and reliability. Our capabilities and team ensure every component adds value to your manufacturing process.",
		faq: [
			{ q: 'What machining capabilities do you offer?', a: 'We provide CNC milling, turning, drilling, grinding and surface finishing for high-precision parts.' },
			{ q: 'Can you handle custom machining projects?', a: 'Yes. Our team specialises in custom part fabrication tailored to your product and industry.' },
			{ q: 'Do you offer both prototyping and large-scale production?', a: 'Absolutely. We deliver prototypes as well as high-volume machining for mass production.' },
			{ q: 'How do you ensure accuracy in machining?', a: 'Through CNC equipment, expert programming and strict quality inspections at every stage.' },
			{ q: 'Which industries use your machining services?', a: 'Automotive, consumer goods, electronics, healthcare and industrial equipment industries rely on our machining.' },
		],
	},
	{
		slug: 'allied-services',
		oldPath: '/service/allied-services/',
		icon: 'wrench',
		title: 'Allied services',
		short: 'Mould maintenance, ultrasonic welding, finishing and plastic part assembly — delivered ready to fit.',
		headline: 'Beyond moulding — complete manufacturing support under one roof',
		intro: [
			"At Shiv Sagar Enterprise, we don't just mould plastic — we offer a wide range of value-added allied services so your product is fully production-ready. From initial concept to final delivery, we support you with reliable, high-precision operations tailored to your requirements.",
		],
		sections: [
			{
				title: 'What are allied services?',
				body: 'Allied services are the complementary manufacturing and finishing processes that improve the quality, durability and usability of moulded plastic components — including mould maintenance, ultrasonic welding, part assembly and packaging. They ensure functional integrity, a good finish and seamless assembly of your products.',
			},
		],
		includesTitle: 'Our allied service capabilities',
		includes: ['Mould design & development', 'Insert moulding', 'Precision machining', 'Prototyping support', 'Finishing & assembly (incl. ultrasonic welding)', 'Quality testing & validation', 'End-to-end project management'],
		industries: ['Automotive manufacturing', 'Consumer goods', 'Industrial equipment', 'Electronics & electricals', 'Medical & healthcare', 'Construction & engineering', 'Energy & chemicals'],
		whyTitle: 'Why choose Shiv Sagar for allied services?',
		why: ['Proven expertise', 'Customised approach', 'Modern technology', 'Quality assurance', 'Cost & time efficiency', 'Trusted partnership'],
		whyBody: 'Allied services are more than add-ons — they are the backbone of a complete, production-ready solution. By integrating every process under one roof, we eliminate the need for multiple vendors, streamline communication and get your product to market faster.',
		features: [
			{ title: 'End-to-end support', body: 'From initial design to final delivery, every process is streamlined to save you time and resources.' },
			{ title: 'Precision & reliability', body: 'Advanced tools and expert teams ensure consistent quality and seamless execution across all stages.' },
		],
		faq: [
			{ q: 'What are allied services in manufacturing?', a: 'Allied services are the complementary processes that support plastic moulding, such as design, machining, finishing and assembly, ensuring the final product is production-ready.' },
			{ q: 'Why are allied services important for my project?', a: 'They add value by improving product quality, functionality and durability while reducing errors, costs and lead times.' },
			{ q: 'Do allied services cover only post-moulding processes?', a: 'No. They span the entire product lifecycle — from design and prototyping to machining, finishing and final delivery.' },
			{ q: 'Can allied services be customised to my industry?', a: 'Yes. They adapt to automotive, engineering, consumer products and industrial applications.' },
			{ q: 'How do allied services save time and cost?', a: 'By integrating all processes under one roof, they eliminate multiple vendors, streamline communication and accelerate time-to-market.' },
		],
	},
];
