// Smooth, eased scrolling with Lenis. Skipped for visitors who ask for reduced motion.
// Anchored sections stay clear of the sticky header through their CSS scroll-margin-top,
// which Lenis reads when scrolling to an element.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
	const lenis = new Lenis({ lerp: 0.1, autoRaf: true });

	// In-page links (#pumps, /industries/#materials while already on /industries/) glide instead of jumping.
	document.addEventListener('click', (e) => {
		const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
		if (!a || a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey) return;
		const url = new URL(a.href, location.href);
		if (url.origin !== location.origin || url.pathname !== location.pathname) return;
		const target = url.hash.length > 1 ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
		if (!target) return;
		e.preventDefault();
		lenis.scrollTo(target, { duration: 1.2 });
		history.pushState(null, '', url.hash);
	});

	// Let the map on the contact page take wheel/drag input normally.
	document.querySelectorAll('iframe').forEach((f) => f.setAttribute('data-lenis-prevent', ''));
}
