# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

To see how you can add code snippets, see below:

```html
<div className="detailCenter-Container">
	<SingleDetail title="IP Address" body="{ip}"></SingleDetail>
	<SingleDetail title="Location" body="{location}"></SingleDetail>
	<SingleDetail title="Timezone" body="{timezone}"></SingleDetail>
	<SingleDetail title="ISP" body="{isp}"></SingleDetail>
</div>
```

```js
function ChangeMapView({ coords }) {
	const map = useMap();
	map.setView(coords, map.getZoom());
	return null;
}
```

### Useful resources

- [Resource 1](https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript) - This helped me in getting the clients IP Address. I really liked this pattern and will use it going forward.
- [Resource 2](https://stackoverflow.com/questions/65894789/react-leaflet-map-center-not-changing) - This helped me in overcoming the stress of Leaflet Map not changing when I search a location.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/RoyDavinci)
- Twitter - [@yourusername](https://twitter.com/roydavinci5)
