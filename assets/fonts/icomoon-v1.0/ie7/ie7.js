/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'rf-logo_s': '&#xe900;',
		'rf-capella': '&#xe901;',
		'rf-energie-group': '&#xe902;',
		'rf-tiin': '&#xe911;',
		'rf-uztransgaz': '&#xe927;',
		'rf-lochin': '&#xe929;',
		'rf-aktiv-express': '&#xe94e;',
		'rf-nurafshon': '&#xe95f;',
		'rf-city-education': '&#xea1c;',
		'rf-pack-food': '&#xea1f;',
		'rf-simplex': '&#xea5e;',
		'rf-plastherm': '&#xea7b;',
		'rf-miracle': '&#xea89;',
		'rf-xalqbanki': '&#xeaaf;',
		'rf-al-beruniy': '&#xeabd;',
		'rf-stamford': '&#xeabe;',
		'rf-hamkor-bank': '&#xeacc;',
		'rf-integral': '&#xeaef;',
		'rf-ipoteka': '&#xeb2f;',
		'rf-khan-academy': '&#xeb30;',
		'rf-sardor': '&#xeb46;',
		'rf-toshkent': '&#xeb47;',
		'rf-Arrow-4-1': '&#xeb65;',
		'rf-package': '&#xeb64;',
		'rf-instagram': '&#xeb63;',
		'rf-print': '&#xeb62;',
		'rf-desktop': '&#xeb61;',
		'rf-vector': '&#xeb60;',
		'rf-pero': '&#xeb5f;',
		'rf-paper': '&#x1f5cc;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/rf-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
