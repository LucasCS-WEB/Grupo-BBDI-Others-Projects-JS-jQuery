var none = "BBDI";

var el = document.createElement('script');

el.type = 'application/ld+json';

	el.text = JSON.stringify({
	  "@context": "http://schema.org/",
	  "@type": "Organization",
	  "url": "https://www.bgrupo.com.br",
		"name": none,
		"contactPoint": {
		  "@type": "ContactPoint",
		  "telephone": "+55 (51) 3076-0999",
		  "contactType": "Customer service"
		}
	 });

document.querySelector('body').appendChild(el);