// Product catalogue for /products/. Every product here is one the old shivsagarenterprise.com says
// Shiv Sagar makes (home page industries section, service pages and blog posts). All are made to the
// customer's drawing or sample — there are no standard sizes or prices.

export type Category = { id: string; name: string; blurb: string };

export const categories: Category[] = [
	{ id: 'motor', name: 'Motor components', blurb: 'Plastic parts that keep AC/DC motors cool, insulated and protected.' },
	{ id: 'pump', name: 'Pump & valve parts', blurb: 'Wear- and corrosion-resistant parts for pumps, valves and fluid handling.' },
	{ id: 'conveyor', name: 'Conveyor parts', blurb: 'Light, quiet, corrosion-resistant parts for material handling.' },
	{ id: 'food', name: 'Dairy & food parts', blurb: 'Food-grade parts that are easy to clean and safe for contact.' },
	{ id: 'chemical', name: 'Chemical-resistant parts', blurb: 'Parts that stand up to acids, solvents and high temperatures.' },
	{ id: 'rubber', name: 'Rubber parts', blurb: 'Seals, gaskets, diaphragms and mounts in EPDM, silicone and more.' },
	{ id: 'engineering', name: 'Engineering & automotive', blurb: 'Knobs, clips, covers and custom parts for machines and vehicles.' },
];

export type Product = {
	name: string;
	category: Category['id'];
	desc: string;
	usedIn: string;
};

export const products: Product[] = [
	// Motor components
	{ name: 'Motor cooling fan blades', category: 'motor', desc: 'Lightweight, balanced fan blades that keep motors running cooler and quieter.', usedIn: 'AC/DC motors' },
	{ name: 'Terminal housings & covers', category: 'motor', desc: 'Housings and terminal covers that protect motor connections, made to a precise fit.', usedIn: 'AC/DC motors' },
	{ name: 'Internal & end caps', category: 'motor', desc: 'Caps that close and protect motor assemblies, moulded to tight tolerances.', usedIn: 'AC/DC motors' },
	{ name: 'Mounting brackets', category: 'motor', desc: 'Rigid plastic brackets for mounting motor parts, lighter than metal equivalents.', usedIn: 'AC/DC motors' },
	{ name: 'Insulators & insulation parts', category: 'motor', desc: 'Heat-stable, electrically insulating components for safe motor operation.', usedIn: 'AC/DC motors, electrical equipment' },

	// Pump & valve parts
	{ name: 'Pump impellers', category: 'pump', desc: 'Injection-moulded impellers with good balance and durability for efficient pumping.', usedIn: 'Water pumps, agricultural sprayers' },
	{ name: 'Pump casings', category: 'pump', desc: 'Custom-moulded casings that resist corrosion and fit precisely.', usedIn: 'Water and chemical pumps' },
	{ name: 'Valve parts', category: 'pump', desc: 'Precision valve components that resist corrosion in fluid systems.', usedIn: 'Pumps, valves, fluid handling' },

	// Conveyor parts
	{ name: 'HDPE idler rollers', category: 'conveyor', desc: 'Lightweight, corrosion-resistant rollers built for smooth rotation.', usedIn: 'Factory, warehouse and food-processing conveyors' },
	{ name: 'Nylon idler rollers', category: 'conveyor', desc: 'Tough, wear-resistant rollers for heavier conveyor duty.', usedIn: 'Conveyor systems' },
	{ name: 'Conveyor guides', category: 'conveyor', desc: 'Low-friction guides that keep products on line, including bottling and packaging lines.', usedIn: 'Conveyors, packaging lines' },
	{ name: 'Wear strips', category: 'conveyor', desc: 'Low-friction, low-noise strips that protect conveyor frames and chains.', usedIn: 'Conveyor systems' },

	// Dairy & food parts
	{ name: 'Dairy equipment fittings', category: 'food', desc: 'Hygienic plastic fittings with smooth surfaces that are easy to clean.', usedIn: 'Dairy processing' },
	{ name: 'Milking machine parts', category: 'food', desc: 'Durable, non-toxic parts for milking equipment, made from food-contact materials.', usedIn: 'Dairy farms and plants' },
	{ name: 'Bottle crates', category: 'food', desc: 'Strong, washable crates for handling bottles in dairy and beverage plants.', usedIn: 'Dairy and beverage' },
	{ name: 'Filling & capping machine parts', category: 'food', desc: 'Custom plastic components for filling and capping machines.', usedIn: 'Food and beverage packaging' },

	// Chemical-resistant parts
	{ name: 'Acid-resistant impellers', category: 'chemical', desc: 'Impellers for pumps that move acids and corrosive fluids.', usedIn: 'Chemical pumps' },
	{ name: 'Valve bodies', category: 'chemical', desc: 'Chemical-resistant valve bodies for harsh process conditions.', usedIn: 'Chemical processing' },
	{ name: 'Pipe fittings', category: 'chemical', desc: 'Fittings that tolerate harsh chemicals and high temperatures.', usedIn: 'Chemical and industrial plants' },
	{ name: 'Encapsulation parts', category: 'chemical', desc: 'Moulded parts that enclose and protect components in corrosive environments.', usedIn: 'Laboratories, industrial equipment' },

	// Rubber parts
	{ name: 'O-rings', category: 'rubber', desc: 'Moulded O-rings for leak-proof sealing in pumps, tanks and fittings.', usedIn: 'Pumps, dairy, chemical' },
	{ name: 'Seals & sealing gaskets', category: 'rubber', desc: 'Custom seals and gaskets, including food-grade versions for milk tanks.', usedIn: 'Pumps, dairy and food plants' },
	{ name: 'Diaphragms', category: 'rubber', desc: 'Flexible diaphragms for pumps and valves.', usedIn: 'Pumps, valves' },
	{ name: 'Rubber bushings', category: 'rubber', desc: 'Robust bushings that absorb load and vibration.', usedIn: 'Automotive, engineering' },
	{ name: 'Vibration-damping mounts', category: 'rubber', desc: 'Rubber mounts that reduce vibration and noise.', usedIn: 'Motors, machinery' },

	// Engineering & automotive
	{ name: 'Plastic knobs', category: 'engineering', desc: 'Precision knobs with a good finish for machines and equipment.', usedIn: 'Automotive, agriculture, engineering' },
	{ name: 'Clips', category: 'engineering', desc: 'Durable plastic clips that hold their grip under demanding conditions.', usedIn: 'Automotive, engineering' },
	{ name: 'Housing covers', category: 'engineering', desc: 'Functional covers and housings moulded to your design.', usedIn: 'Automotive, electrical, engineering' },
	{ name: 'Insert-moulded parts', category: 'engineering', desc: 'Plastic moulded around metal inserts for one strong, integrated part.', usedIn: 'Automotive, electronics, industrial equipment' },
];
