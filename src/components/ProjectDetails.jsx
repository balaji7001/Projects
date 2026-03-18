import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const GROUP_LINK = "https://chat.whatsapp.com/G0mhikPyWTFJ72NB1eG1gQ";

    const allProjects = [
        {
        id: 1,
        title: "AI-Powered Customer Service Chatbot",
        price: 150,
        seller: "AI Innovations",
        rating: 4.5,
        reviews: 12,
        category: "Artificial Intelligence",
        image: "/chatbots-for-customer-service.jpeg",
        description:
            "This project involves building a customer service chatbot using NLP.",
        files: [
            { name: "project_files.zip", size: "25.6 MB" },
            { name: "documentation.pdf", size: "2.1 MB" },
        ],
        },
        {
        id: 2,
        title: "Modern Full-Stack E-commerce Platform",
        price: 200,
        seller: "Web Masters",
        rating: 4.2,
        reviews: 8,
        category: "Web Development",
        image: "/E Commerce.webp",
        description:
            "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
        files: [{ name: "source_code.zip", size: "30 MB" }],
        },
        {
        id: 3,
        title: "Personalized Fitness Mobile App",
        price: 120,
        seller: "HealthTech",
        rating: 4.8,
        reviews: 20,
        category: "Mobile Development",
        image: "/Fitness.webp",
        description:
            "A React Native app that generates personalized fitness and diet plans.",
        files: [{ name: "app_files.zip", size: "15 MB" }],
        },
    ];

    const project = allProjects.find((p) => p.id === Number(id));

    if (!project) {
        return (
        <h1 style={{ color: "white", textAlign: "center" }}>
            Project Not Found
        </h1>
        );
    }

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5;

        return (
        <>
            {"★".repeat(full)}
            {half && "☆"}
            {"☆".repeat(5 - full - (half ? 1 : 0))}
        </>
        );
    };

    const handleBuy = () => {
        navigate("/contact", {
        state: {
            openGroup: true,
            groupLink: GROUP_LINK,
        },
        });
    };

    return (
        <div className="details-page">
        <div className="details-container">

            {/* LEFT */}
            <div className="details-left">
            <span className="category">{project.category}</span>

            <h1>{project.title}</h1>

            <p className="seller">
                Sold by <strong>{project.seller}</strong>{" "}
                {renderStars(project.rating)} ({project.reviews} reviews)
            </p>

            <img
                src={project.image}
                alt={project.title}
                className="hero-image"
            />

            <h3>Project Description</h3>
            <p>{project.description}</p>
            </div>

            {/* RIGHT */}
            <div className="details-right">
            <div className="price-card">
                <h3>Price</h3>
                <h1>${project.price}.00</h1>

                <button className="buy-btn" onClick={handleBuy}>
                Buy and Download
                </button>

                <ul>
                <li>✔ Secure transaction</li>
                <li>✔ Instant access</li>
                <li>✔ Full source code included</li>
                </ul>
            </div>

            <div className="files-card">
                <h3>Files Included</h3>

                {project.files.map((file, i) => (
                <div className="file" key={i}>
                    <span>{file.name}</span>
                    <span>{file.size}</span>
                </div>
                ))}
            </div>
            </div>

        </div>
        </div>
    );
}