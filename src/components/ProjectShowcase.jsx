import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {

const projects = [
{
id:1,
title:"AI-Powered Customer Service Chatbot",
description:"A sophisticated chatbot using NLP to handle customer queries in real-time.",
price:150,
category:"Artificial Intelligence",
level:"Undergraduate",
tags:["AI","NLP","Python"],
image:"/chatbots-for-customer-service.jpeg"
},

{
id:2,
title:"Modern Full-Stack E-commerce Platform",
description:"A feature-rich online store built with React and Node.js.",
price:200,
category:"Web Development",
level:"Undergraduate",
tags:["React","Node","MongoDB"],
image:"/E Commerce.webp"
},

{
id:3,
title:"Personalized Fitness and Diet Mobile App",
description:"A React Native mobile app that creates custom fitness plans.",
price:120,
category:"Mobile Development",
level:"Postgraduate",
tags:["React Native","Health","AI"],
image:"/Fitness.webp"
}
];

const [search,setSearch] = useState("");
const [category,setCategory] = useState("All");
const [level,setLevel] = useState("All");

const filteredProjects = projects.filter(p =>
(p.title.toLowerCase().includes(search.toLowerCase())) &&
(category === "All" || p.category === category) &&
(level === "All" || p.level === level)
);

return (

<div className="project-container">

{/* HEADER */}
<div className="project-header">
<h1>Project Library</h1>
<p>Find the perfect project to kickstart your academic journey.</p>
</div>

<div className="layout">

{/* SIDEBAR */}
<div className="sidebar">

<h2>Filters</h2>

<input
type="text"
placeholder="Search projects..."
className="search"
onChange={(e)=>setSearch(e.target.value)}
/>

<label>Category</label>
<select onChange={(e)=>setCategory(e.target.value)}>
<option value="All">All Categories</option>
<option value="Artificial Intelligence">Artificial Intelligence</option>
<option value="Web Development">Web Development</option>
<option value="Mobile Development">Mobile Development</option>
<option value="Data Science">Data Science</option>
<option value="Blockchain">Blockchain</option>
<option value="Internet of Things">Internet of Things</option>
</select>

<label>Academic Level</label>
<select onChange={(e)=>setLevel(e.target.value)}>
<option value="All">All Levels</option>
<option value="Undergraduate">Undergraduate</option>
<option value="Postgraduate">Postgraduate</option>
<option value="PhD">PhD</option>
</select>

</div>


{/* PROJECT GRID */}
<div className="project-grid">

{filteredProjects.map(project => (

<div className="card" key={project.id}>

<img src={project.image} alt="" />

<div className="card-body">

<h3>{project.title}</h3>

<p>{project.description}</p>

<div className="tags">
{project.tags.map(tag => (
<span key={tag}>{tag}</span>
))}
</div>

<div className="card-footer">
<h4>${project.price}.00</h4>

<Link to={`/project/${project.id}`}>
<button>View Details</button>
</Link>

</div>

</div>

</div>

))}

</div>

</div>

</div>
);
}