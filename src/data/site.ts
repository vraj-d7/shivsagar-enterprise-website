// Company facts and shared copy. Text is carried over from the old shivsagarenterprise.com (Nov 2026).
// Items marked CONFIRM disagree across the old site or need checking with the owner before launch.

export const site = {
	name: 'Shiv Sagar Enterprise',
	short: 'Shiv Sagar',
	since: 1997,
	tagline: 'Your partner in precision moulding.',
	description:
		'Shiv Sagar Enterprise manufactures precision plastic injection-moulded and rubber components for electric motors, pumps, conveyors, dairy, chemical and automotive industries. Serving 100+ clients across India since 1997.',
	phone: '+91 98253 29102',
	phoneHref: 'tel:+919825329102',
	whatsappHref: 'https://wa.me/919825329102',
	email: 'nvpatel48@yahoo.com',
	// CONFIRM: the old contact page says GIDC V.U. Nagar, Anand, but its about page, injection moulding
	// page and terms say the factory is in Ankleshwar. Using the contact-page address until confirmed.
	address: 'GIDC, V.U. Nagar, Anand, Gujarat',
	mapHref: 'https://www.google.com/maps/search/?api=1&query=GIDC+V.U.+Nagar+Anand+Gujarat',
};

export const nav = [
	{ href: '/services/', label: 'Services' },
	{ href: '/industries/', label: 'Industries' },
	{ href: '/about/', label: 'About' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/contact/', label: 'Contact' },
];

export const stats = [
	{ value: '25', unit: '+', label: 'years of moulding' },
	{ value: '40,000', unit: '+', label: 'plastic parts per day' },
	{ value: '1M', unit: '+', label: 'components manufactured' },
	// CONFIRM: the old home and about pages say 100+ clients; the old services page says 450+.
	{ value: '100', unit: '+', label: 'clients across India' },
];

export type IconName =
	| 'inject' | 'ring' | 'tool' | 'fan' | 'grid' | 'wrench' | 'check' | 'arrow'
	| 'phone' | 'mail' | 'pin' | 'clock' | 'chat' | 'menu' | 'close' | 'plus';

export type Industry = {
	id: string;
	tab: string;
	title: string;
	intro: string;
	body: string;
	parts: string[];
	materials: string;
	art: 'fan' | 'pump' | 'conveyor' | 'dairy' | 'chemical' | 'auto';
};

export const industries: Industry[] = [
	{
		id: 'motors', tab: 'Electric motors', title: 'Electric motors (AC/DC motor components)',
		intro: 'Plastic components that keep motors cool, insulated and protected.',
		body: 'For the electric motor industry, we supply precision-moulded plastic parts and insulation components that improve performance and reduce weight. From fan blades and internal caps to terminal housings and mounting brackets, our components help AC and DC motor manufacturers build motors that run cooler and quieter. Parts are made to tight tolerances to withstand the mechanical stress and heat inside motors, in engineering plastics that are rigid, heat-stable and electrically insulating.',
		parts: ['Fan blades', 'Terminal housings', 'Internal caps', 'Mounting brackets', 'Insulation components'],
		materials: 'Nylon · ABS · PBT · PP', art: 'fan',
	},
	{
		id: 'pumps', tab: 'Pumps & fluid handling', title: 'Pumps & fluid handling',
		intro: 'Wear- and corrosion-resistant parts for pumps and valves.',
		body: 'We produce plastic pump components that meet rigorous fluid-industry standards. Our injection-moulded impellers offer excellent balance and durability for efficient pumping, while custom-moulded pump casings and valve parts deliver corrosion resistance and a precise fit. We also make the rubber parts pumps depend on — O-rings, seals and diaphragms — for leak-proof operation in water pumps, chemical pumps and agricultural sprayers.',
		parts: ['Impellers', 'Pump casings', 'Valve parts', 'O-rings & seals', 'Diaphragms'],
		materials: 'Nylon · PP · EPDM · Silicone', art: 'pump',
	},
	{
		id: 'conveyors', tab: 'Conveyors', title: 'Material handling & conveyors',
		intro: 'Low-friction, low-noise parts that keep materials moving.',
		body: 'We manufacture durable idler rollers and other plastic conveyor components. Our HDPE and nylon idler rollers are lightweight, corrosion-resistant and built for smooth rotation — ideal for conveyor systems in factories, warehouses and food processing plants.',
		parts: ['HDPE idler rollers', 'Nylon idler rollers', 'Guides', 'Wear strips'],
		materials: 'HDPE · Nylon', art: 'conveyor',
	},
	{
		id: 'dairy', tab: 'Dairy & food', title: 'Dairy & food processing',
		intro: 'Hygienic, food-contact parts built for daily washdowns.',
		body: 'We provide food-grade plastic and rubber parts for hygiene and reliability in dairy and food applications. Our components include dairy equipment fittings, milking machine parts, bottle crates and sealing gaskets made from materials safe for food contact. They are easy to clean, non-toxic and durable, with the smooth surfaces and chemical resistance the sector demands.',
		parts: ['Dairy equipment fittings', 'Milking machine parts', 'Bottle crates', 'Sealing gaskets'],
		materials: 'PP · HDPE · Food-grade silicone', art: 'dairy',
	},
	{
		id: 'chemical', tab: 'Chemical', title: 'Chemical & industrial equipment',
		intro: 'Parts that stand up to acids, solvents and harsh process conditions.',
		body: 'We produce chemical-resistant plastic parts and robust rubber components for laboratories, chemical processing machinery and industrial equipment. Our range includes acid-resistant pump impellers, valve bodies, pipe fittings and encapsulation parts that tolerate harsh chemicals and high temperatures, using materials such as HDPE, PTFE, PVDF and specialised rubber compounds.',
		parts: ['Acid-resistant impellers', 'Valve bodies', 'Pipe fittings', 'Encapsulation parts'],
		materials: 'HDPE · PTFE · PVDF · Rubber compounds', art: 'chemical',
	},
	{
		id: 'automotive', tab: 'Automotive & engineering', title: 'Automotive & engineering goods',
		intro: 'Small parts with a big job — fit, finish and durability matter.',
		body: 'We also serve the automotive, agriculture and general engineering sectors with high-quality moulded components. Our range includes precision plastic knobs, durable clips, functional housing covers and robust rubber bushings — made from high-grade materials to strict specifications for durability and reliability in use.',
		parts: ['Plastic knobs', 'Clips', 'Housing covers', 'Rubber bushings'],
		materials: 'ABS · Nylon · Rubber compounds', art: 'auto',
	},
];

export const materials: { name: string; note: string; kind: 'plastic' | 'rubber'; use: string }[] = [
	{ name: 'PP', note: 'Polypropylene', kind: 'plastic', use: 'Light, chemical resistant and low cost. Fan blades, caps, crates.' },
	{ name: 'HDPE', note: 'High-density PE', kind: 'plastic', use: 'Tough, low-friction and corrosion resistant. Idler rollers, wear strips, fittings.' },
	{ name: 'PE', note: 'Polyethylene', kind: 'plastic', use: 'Flexible and moisture resistant. Covers, liners, general parts.' },
	{ name: 'ABS', note: 'Tough, good finish', kind: 'plastic', use: 'Rigid with a clean surface. Knobs, housings, covers.' },
	{ name: 'Nylon', note: 'Strength & wear', kind: 'plastic', use: 'Strong and wear resistant. Impellers, rollers, motor parts.' },
	{ name: 'PBT', note: 'Electrical parts', kind: 'plastic', use: 'Heat-stable and insulating. Motor and electrical components.' },
	{ name: 'PTFE', note: 'Chemical resistant', kind: 'plastic', use: 'Resists almost every chemical. Seals, liners, valve parts.' },
	{ name: 'PVDF', note: 'Acids & solvents', kind: 'plastic', use: 'For acids and solvents at temperature. Chemical pump parts.' },
	{ name: 'EPDM', note: 'Weather & water', kind: 'rubber', use: 'Water, steam and outdoor use. Gaskets, seals, O-rings, mounts.' },
	{ name: 'Silicone', note: 'Food-grade, heat', kind: 'rubber', use: 'Food contact and high heat. Dairy gaskets, diaphragms.' },
	{ name: 'Natural & neoprene', note: 'General sealing', kind: 'rubber', use: 'General-purpose sealing and vibration damping.' },
];

export const steps = [
	{ title: 'Enquiry', text: 'Share your drawing or sample, material and quantity.' },
	{ title: 'Design', text: 'We design the mould and confirm material and tolerances.' },
	{ title: 'Tooling', text: 'Mould built and trialled; first samples sent for approval.' },
	{ title: 'Production', text: 'Volume moulding with checks through every batch.' },
	{ title: 'Delivery', text: 'Finished, assembled if needed, and dispatched across India or for export.' },
];

// "Why Shiv Sagar" — the old home page's highlights and the about page's "Why choose" points.
export const why = [
	{ title: 'Customers first', text: 'Your vision, our mould: we turn client ideas into reliable moulded products.' },
	{ title: 'Delivery on time', text: 'High volume, high precision — consistently delivering precise, high-quality parts on time.' },
	{ title: 'Versatile material expertise', text: 'A broad range of polymers and elastomers — PE, PP, ABS, nylon, EPDM, silicone and more — to suit each application.' },
	{ title: 'Trusted craftsmanship', text: '25+ years of quality manufacturing that earns client confidence every day.' },
	{ title: 'Precision in plastics, excellence in rubber', text: 'Skilled hands and sharp minds shaping every part with care.' },
	{ title: 'Local roots, global reach', text: 'Serving clients across India, and fully equipped for international exports with reliable logistics.' },
];

// "Manufacturing capacity & reliability" from the old home page.
export const capacity = {
	title: 'Manufacturing capacity & reliability',
	lead: 'Quality and reliability are the cornerstones of our production philosophy. Partnering with Shiv Sagar Enterprise means reliable, on-time and in-full delivery.',
	body: 'Our facility is equipped with high-capacity production systems and streamlined lean processes. With numerous injection moulding machines, we produce over 40,000 plastic parts daily — so we can handle large-volume orders and fast-turnaround projects without compromising on quality.',
	points: [
		{ title: 'Modern machinery', text: 'High-precision injection moulding machines with ancillary equipment like dryers, loaders and chillers to keep production conditions optimal, run by experienced operators.' },
		{ title: 'Consistent processes', text: 'Over 25 years we have fine-tuned our moulding processes. Once your mould is in production, you get a steady supply of parts that do not deviate from the approved sample.' },
		{ title: 'On-time delivery', text: 'A streamlined workflow and ample capacity mean we meet schedules — whether you need a few hundred pieces or a hundred thousand.' },
		{ title: 'Stringent quality control', text: 'From incoming raw material inspection to in-process checks and final testing, our QA team uses calibrated instruments to verify dimensions, tolerances and performance.' },
	],
};

export const faq = [
	{ q: 'What types of plastic materials do you work with?', a: "We mould a variety of engineering and commodity plastics including ABS, polypropylene (PP), high-density polyethylene (HDPE) and nylon. Each material is selected for the component's application, durability and environmental resistance." },
	{ q: 'Do you offer custom plastic component manufacturing?', a: 'Yes, we offer complete customisation from mould design to final production. Whether you need one-time prototyping or bulk production of custom parts, our team ensures precision engineering and quality assurance at every stage.' },
	{ q: 'Which industries do you serve?', a: 'We serve automotive, electric motors, industrial pumps, dairy processing and chemical handling, among others. Our components are used in critical assemblies across India and for export.' },
	{ q: 'My industry or part isn’t listed. Can you still help?', a: 'Very likely. Our engineering team works closely with clients to understand the usage conditions and functional requirements of each part, so we can recommend the best materials and design tweaks. If you have a special component that needs moulding, chances are we can develop and produce it.' },
];

// CONFIRM: these three testimonials are from the old site. Check with the owner that the people and companies
// are real customers who agreed to be quoted before launch; remove any that aren't.
export const testimonials = [
	{ quote: "We've been sourcing idler rollers and custom components from Shiv Sagar Enterprise for over five years. Their injection-moulded parts consistently meet our specifications and perform reliably in our conveyor systems. Their understanding of material handling needs is top-notch.", name: 'Rajesh Mehta', role: 'Operations Manager, Apex Logistics Solutions' },
	{ quote: 'What sets Shiv Sagar apart is their ability to customise parts for our electric motors. From precision fan blades to terminal housings, every component they supply fits perfectly and enhances our product efficiency. Truly a dependable manufacturing partner.', name: 'Sneha Kulkarni', role: 'R&D Head, VoltTech Motors Pvt. Ltd.' },
	{ quote: 'In the dairy equipment sector, hygiene is everything — and Shiv Sagar delivers. Their food-grade plastic and rubber parts are durable, safe and easy to clean. Their team is responsive and always ready to adapt to our evolving needs.', name: 'Dinesh Iyer', role: 'Procurement Lead, MilkoPure Dairy Solutions' },
];
