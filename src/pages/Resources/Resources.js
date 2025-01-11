import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";
import Image from "../../assets/resource_section.png";
import AddCard from "../../components/AddCard/AddCard";
import EditCard from "../../components/EditCard/EditCard";

const Resources = () => {
  const [images, setImages] = useState([
    // your image data...
    
{ 
  id: 1, 
  src: Image,
  name: "Miss Rasika Wedaarachchi", 
  section: "Dental" 
},
{ 
  id: 2, 
  src: Image, 
  name: "Miss Rashmi Warushika", 
  section: "Ward No:1" 
},
{ 
  id: 3, 
  src: Image, 
  name: "Miss Sampawi Kangayan", 
  section: "Ward No:2" 
},
{ 
  id: 4, 
  src: Image, 
  name: "Mr sorubaraj Kangeyan", 
  section: "Ward No:3" 
},
{ 
  id: 5, 
  src: Image, 
  name: "Mr Geenoth Wickramasooriya", 
  section: "Ward No:4"
 },
{ 
  id: 6, 
  src: Image, 
  name: "Image 6", 
  section: "Section 1" 
},
{ 
  id: 7, 
  src: Image, 
  name: "Image 7", 
  section: "Section 3" 
},
{ 
  id: 8, 
  src: Image, 
  name: "Image 8", 
  section: "Section 2" 
},
{ id: 9, 
  src: Image, 
  name: "Image 9", 
  section: "Section 1" 
},
{ id: 10, 
  src: Image, 
  name: "Image 10", 
  section: "Section 3" 
},
{ 
  id: 11, 
  src: Image, 
  name: "Image 11", 
  section: "Section 2" 
},
{ 
  id: 12, 
  src: Image, 
  name: "Image 12", 
  section: "Section 1" 
},
{ 
  id: 13, 
  src: Image, 
  name: "Image 13", 
  section: "Section 3" 
},
{ 
  id: 14, 
  src: Image, 
  name: "Image 14", 
  section: "Section 2" 
},
{ 
  id: 15, 
  src: Image, 
  name: "Image 15", 
  section: "Section 1" 
},
{ 
  id: 16, 
  src: Image, 
  name: "Image 16", 
  section: "Section 3" 
},
{ 
  id: 17, 
  src: Image, 
  name: "Image 17", 
  section: "Section 2" 
},
{ 
  id: 18, 
  src: Image, 
  name: "Image 18", 
  section: "Section 1" 
},
{ 
  id: 19, 
  src: Image, 
  name: "Image 19",
  section: "Section 3" 
},
{ 
  id: 20, 
  src: Image, 
  name: "Image 20", section: "Section 2" },
]);
 

  const [showAll, setShowAll] = useState(false);
  const [sectionSearch, setSectionSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");
  const navigate = useNavigate();

  
  // Redirect to EditCard component with the selected card's data
  const handleCardClick = (imageId) => {
    // Find the selected image using the id
    const selectedImage = images.find((image) => image.id === imageId);
    if (selectedImage) {
      navigate("/edit-card", { state: selectedImage }); // Pass data using the `state` property
    }
  };

  // Filter images based on search
  const filteredImages = images.filter((image) => {
    return (
      image.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
      image.section.toLowerCase().includes(sectionSearch.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 className="h1">Resource Section</h1>

      {/* Search Bars */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by section"
          value={sectionSearch}
          onChange={(e) => setSectionSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </div>

      {/* Image Grid */}
      <div className="grid">
        {(showAll ? filteredImages : filteredImages.slice(0, 13)).map((image, index) => (
          <div
            key={image.id}
            className="card"
            onClick={() => handleCardClick(image.id)} // Card click triggers redirection
          >
            <img src={image.src} alt={image.name} className="grid_image" />
            <p className="p1">{image.name}</p>
            <p className="p1">{image.section}</p> {/* Section name */}
          </div>
        ))}

        {/* Show the "See More" / "Show Less" button */}
        {filteredImages.length > 13 && (
          <div className="see-more-container">
            <button className="see-more-button" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less <<" : "See More >>"}
            </button>
          </div>
        )}
      </div>

      {/* Add Card Button */}
      <div className="add-card-container">
        <button className="add-card-button" onClick={() => navigate("/add-card")}>
          Add Section
        </button>
      </div>
    </div>
  );
};

export default Resources;


