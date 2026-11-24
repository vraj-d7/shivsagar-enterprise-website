// All company facts and page copy live here, so the owner's corrections only need to be made once.
// Source: the public shivsagarenterprise.com site (Nov 2026). Items marked CONFIRM need checking with the owner.

export const site = {
	name: 'Shiv Sagar Enterprise',
	short: 'Shiv Sagar',
	since: 1997,
	tagline: 'Your partner in precision moulding.',
	description:
		'Shiv Sagar Enterprise manufactures custom plastic injection-moulded and rubber components for motors, pumps, conveyors, dairy, chemical and automotive industries. GIDC V.U. Nagar, Anand, Gujarat. Since 1997.',
	phone: '+91 98253 29102',
	phoneHref: 'tel:+919825329102',
	whatsappHref: 'https://wa.me/919825329102',
	email: 'nvpatel48@yahoo.com',
	// CONFIRM: the old site also lists a different address on one page.
	address: 'I-43, GIDC, V.U. Nagar, Anand, Gujarat',
	mapHref: 'https://www.google.com/maps/search/?api=1&query=GIDC+V.U.+Nagar+Anand+Gujarat',
	hours: 'Mon – Sat, 9:00 am – 6:30 pm', // CONFIRM
};

export const nav = [
	{ href: '/services/', label: 'Services' },
	{ href: '/components/', label: 'Components' },
	{ href: '/components/#materials', label: 'Materials' },
	{ href: '/about/', label: 'About' },
	{ href: '/contact/', label: 'Contact' },
];

export const stats = [
	{ value: '1997', unit: '', label: 'moulding since' },
	{ value: '40,000', unit: '+', label: 'plastic parts per day' },
	{ value: '1M', unit: '+', label: 'components manufactured' },
	{ value: '100', unit: '+', label: 'clients across India' }, // CONFIRM
];

export type IconName =
	| 'inject' | 'ring' | 'tool' | 'fan' | 'grid' | 'wrench' | 'check' | 'arrow'
	| 'phone' | 'mail' | 'pin' | 'clock' | 'chat' | 'menu' | 'close';

export const services: {
	slug: string;
	icon: IconName;
	title: string;
	short: string;
	body: string;
	points: string[];
	lead?: boolean;
}[] = [
	{
		slug: 'injection-moulding',
		icon: 'inject',
		title: 'Plastic injection moulding',
		short: 'High-volume, repeatable production of precision plastic components in engineering and commodity polymers.',
		body: 'Our injection moulding machines run plastic parts from a few grams to large housings, in short trial batches or long production runs. Every job starts from an approved sample, and the same process settings are used batch after batch.',
		points: ['Small to large parts', 'Insert moulding', 'Tight-tolerance components', 'Short and long production runs'],
		lead: true,
	},
	{
		slug: 'rubber-moulding',
		icon: 'ring',
		title: 'Rubber moulded parts',
		short: 'Custom O-rings, seals, gaskets, diaphragms and bushings in EPDM, silicone and special compounds.',
		body: 'Compression-moulded rubber parts made to your drawing or sample. We match the compound to the job: water, weather, heat, food contact or chemicals.',
		points: ['O-rings and seals', 'Gaskets and diaphragms', 'Bushings and buffers', 'Food-grade silicone'],
	},
	{
		slug: 'mould-design',
		icon: 'tool',
		title: 'Mould design & tooling',
		short: 'In-house mould design and tooling development, built around your part and production volume.',
		body: 'We design the mould around your part, material and the volume you need, then build and trial it before production. Keeping tooling in-house means changes are quick and you deal with one team.',
		points: ['Single and multi-cavity moulds', 'Design for manufacture advice', 'Trial samples for approval', 'Mould maintenance'],
	},
	{
		slug: 'motor-components',
		icon: 'fan',
		title: 'Motor plastic components',
		short: 'Fan blades, terminal housings, caps, brackets and insulation parts for AC/DC motors.',
		body: 'A long-standing speciality: the plastic parts that keep electric motors cool, insulated and protected, supplied to motor makers across Gujarat and India.',
		points: ['Cooling fan blades', 'Terminal boxes and housings', 'End caps and covers', 'Insulation parts'],
	},
	{
		slug: 'machining',
		icon: 'grid',
		title: 'Machining services',
		short: 'Secondary machining to bring moulded parts to final dimension and finish.',
		body: 'Drilling, turning, tapping and trimming after moulding, so parts arrive at final size and ready to fit.',
		points: ['Drilling and tapping', 'Turning and facing', 'Deflashing and trimming'],
	},
	{
		slug: 'allied',
		icon: 'wrench',
		title: 'Allied services',
		short: 'Mould maintenance, ultrasonic welding and plastic part assembly — delivered ready to fit.',
		body: 'The finishing work around moulding: ultrasonic welding, inserting metal parts, sub-assembly and packing to your requirement.',
		points: ['Ultrasonic welding', 'Sub-assembly', 'Custom packing'],
	},
];

export type Industry = {
	id: string;
	tab: string;
	title: string;
	intro: string;
	parts: string[];
	materials: string;
	art: 'fan' | 'pump' | 'conveyor' | 'dairy' | 'chemical' | 'auto';
};

export const industries: Industry[] = [
	{ id: 'motors', tab: 'Electric motors', title: 'Electric motors', intro: 'Plastic components that keep motors cool, insulated and protected.', parts: ['Fan blades', 'Terminal housings', 'Internal caps', 'Mounting brackets', 'Insulation components'], materials: 'PP · Nylon · ABS', art: 'fan' },
	{ id: 'pumps', tab: 'Pumps & fluid handling', title: 'Pumps & fluid handling', intro: 'Wear- and corrosion-resistant parts for pumps and valves.', parts: ['Impellers', 'Pump casings', 'Valve parts', 'O-rings & seals', 'Diaphragms'], materials: 'Nylon · PP · EPDM · Silicone', art: 'pump' },
	{ id: 'conveyors', tab: 'Conveyors', title: 'Conveyors & material handling', intro: 'Low-friction, low-noise parts that outlast metal in many applications.', parts: ['HDPE idler rollers', 'Nylon idler rollers', 'Guides', 'Wear strips'], materials: 'HDPE · Nylon', art: 'conveyor' },
	{ id: 'dairy', tab: 'Dairy & food', title: 'Dairy & food', intro: 'Hygienic, food-contact parts built for daily washdowns.', parts: ['Dairy equipment fittings', 'Milking machine parts', 'Bottle crates', 'Food-contact gaskets'], materials: 'PP · HDPE · Silicone', art: 'dairy' },
	{ id: 'chemical', tab: 'Chemical', title: 'Chemical & industrial', intro: 'Parts that stand up to acids, solvents and harsh process conditions.', parts: ['Acid-resistant impellers', 'Valve bodies', 'Pipe fittings', 'Encapsulation parts'], materials: 'PTFE · PVDF · PP', art: 'chemical' },
	{ id: 'automotive', tab: 'Automotive', title: 'Automotive & engineering', intro: 'Small parts with a big job — fit, finish and durability matter.', parts: ['Plastic knobs', 'Clips', 'Housing covers', 'Rubber bushings'], materials: 'ABS · Nylon · Rubber compounds', art: 'auto' },
];

export const materials: { name: string; note: string; kind: 'plastic' | 'rubber'; use: string }[] = [
	{ name: 'PP', note: 'Polypropylene', kind: 'plastic', use: 'Light, chemical resistant and low cost. Fan blades, caps, crates.' },
	{ name: 'HDPE', note: 'High-density PE', kind: 'plastic', use: 'Tough and low-friction. Conveyor rollers, wear strips.' },
	{ name: 'PE', note: 'Polyethylene', kind: 'plastic', use: 'Flexible and food-safe. Covers, liners, containers.' },
	{ name: 'ABS', note: 'Tough, good finish', kind: 'plastic', use: 'Rigid with a clean surface. Knobs, housings, covers.' },
	{ name: 'Nylon', note: 'Strength & wear', kind: 'plastic', use: 'Strong and wear-resistant. Impellers, bushes, gears, rollers.' },
	{ name: 'PTFE', note: 'Chemical resistant', kind: 'plastic', use: 'Resists almost every chemical. Seals, liners, valve parts.' },
	{ name: 'PVDF', note: 'Acids & solvents', kind: 'plastic', use: 'For acids and solvents at temperature. Chemical pump parts.' },
	{ name: 'EPDM', note: 'Weather & water', kind: 'rubber', use: 'Water, steam and outdoor use. Gaskets, seals, O-rings.' },
	{ name: 'Silicone', note: 'Food-grade, heat', kind: 'rubber', use: 'Food contact and high heat. Dairy gaskets, diaphragms.' },
	{ name: 'Special', note: 'Custom compounds', kind: 'rubber', use: 'Nitrile, neoprene, Viton and blends matched to the job.' },
];

export const steps = [
	{ title: 'Enquiry', text: 'Share your drawing or sample, material and quantity.' },
	{ title: 'Design', text: 'We design the mould and confirm material and tolerances.' },
	{ title: 'Tooling', text: 'Mould built and trialled; first samples sent for approval.' },
	{ title: 'Production', text: 'Volume moulding with checks through every batch.' },
	{ title: 'Delivery', text: 'Finished, assembled if needed, and dispatched across India or for export.' },
];

export const why = [
	{ title: 'Decades of experience', text: "Moulding for Indian industry since 1997 — we've seen most part problems before." },
	{ title: 'Everything in-house', text: 'Mould design, tooling, moulding, machining and assembly under one roof.' },
	{ title: 'Capacity to scale', text: '40,000+ plastic and 5,000+ rubber parts a day, from prototypes to volume.' },
	{ title: 'Plastic and rubber', text: 'One supplier for the housing and the seal that goes in it.' },
	{ title: 'Consistent quality', text: 'Repeatable processes and batch checks so every delivery matches the approved sample.' },
	{ title: 'Export-ready', text: 'Serving customers across India, and equipped for international orders.' },
];
