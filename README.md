# Portfolio 2

This is my second portfolio, what's new in this is gon be a 3d website with the three js, react library (React three fibre), Framer motion(also used in my prev portfolio proj), tailwind css and email js.

- Refer React 3 fibre docs for the 3d objs mesh and the other settings such as lighting(ambient light, directional light, canvas light, hemispere light) etc. //

- ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model
- React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React
- TailwindCSS - a popular utility-first CSS styling framework
- Framer Motion - the most popular library used to bring our React website to life with animations
  You'll also learn how to:
- Load, create and customize stunning 3D models and geometries with various lights, as well as understand the 3D world with a camera and positioning of an object in space.
- Make our code reusable and scalable using Higher Order Components (HOCs) and other industry-standard best practices
- Implement sending emails through a form on the website
- Ensure responsiveness across all devices and improve our site's performance using Suspense and Preload.

# set up

- `npm create vite@latest ./ -- --template react`
- ` npm i -D tailwindcss postcss autoprefixer` and `npx tailwindcss init -p`
- and for the packages `npm i --legacy-peer-deps @react-three/fribre @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom ` (since we re using the react-tilt which is the older version of react so ve to use the legacy peer flag)

- `npm i --legacy-peer-deps three` the original 3js package

- The 3d models we can get randomly from the online and the interesting site is sketch fab, just grab any of the 3d model and use that in our code.

# HOC

- Note: for the comps (sections), we mostly wrap the returns with the react fragments instead of the div or any other html tags, the reason is later on we'll wrap them with HoC (sectionWrapper())

# constants

- All the sections info's such as project info, work exp and other things will go into the constants/index and if anything we wana update.
- the prev proj i ve the backend(sanity.io) to handle this, but here i will get this everything thru code, which i found quite easier.

# build and deploy

- `npm run build ` to build the optimized version of the app for the production
