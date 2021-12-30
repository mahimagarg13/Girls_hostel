import React, { useEffect, useState } from 'react'
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";
import { images } from './Data';
import divider from "../facilities-icon/divider.png"

// import hostel1 from "../Gallery/Gallery-images/hostel1.png";
// import hostel2 from "../Gallery/Gallery-images/hostel2.png";
// import hostel3 from "../Gallery/Gallery-images/hostel3.png";
// import hostel4 from "../Gallery/Gallery-images/hostel4.png";
// import hostel5 from "../Gallery/Gallery-images/hostel5.png";
// import hostel6 from "../Gallery/Gallery-images/hostel6.png";
// import hostel7 from "../Gallery/Gallery-images/hostel7.png";
// import hostel8 from "../Gallery/Gallery-images/hostel8.png";
// import hostel9 from "../Gallery/Gallery-images/hostel9.png";
 export default function Gallerypage() {
    const options = {
        // settings: {
        // 	overlayColor: 'rgb(25, 136, 124)',
        // 	autoplaySpeed: 1500,
        // 	transitionSpeed: 900
        // },
        // buttons: {
        // 	backgroundColor: 'red',
        // 	iconColor: 'rgba(126, 172, 139, 0.8)'
        // },
        // caption: {
        // 	captionColor: '#a6cfa5',
        // 	captionFontFamily: 'Raleway, sans-serif',
        // 	captionFontWeight: '300',
        // 	captionTextTransform: 'uppercase'
        // },
        // progressBar: {
        // 	height: '20px',
        // 	fillColor: 'blue',
        // 	backgroundColor: 'white'
        // }
    };
    
        // <div>
        //     <SimpleReactLightbox>
        //         <SRLWrapper>
        //             <div className='gallery'>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel1} alt="Washroom" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel2} alt="Washroom" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel3} alt="Hostel" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel9} alt="kitechen" className='gallery-img' />
        //                 </div>
                       
        //             </div>
        //             <div className='gallery'>
        //             <div style={{ textAlign: "center" }}>
        //                     <img src={hostel8} alt="Kitchen" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel4} alt="Room" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel5} alt="Room" className='gallery-img' />
        //                 </div>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel6} alt="Room" className='gallery-img' />
        //                 </div>
        //             </div>
        //             <div className='gallery'>
        //                 <div style={{ textAlign: "center" }}>
        //                     <img src={hostel7} alt="Room" className='gallery-img' />
        //                 </div>
                       
                       
        //             </div>
        //         </SRLWrapper>
        //     </SimpleReactLightbox>
        // </div>



	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
            // window.scrollTo(0, 0);

	(tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag)))
		},
		[tag]
	);

	return (
		<div className="App">
              <div className='padding'>
                    <h1>Gallery</h1>
                    <img src={divider} className="divider"  alt="divider" />
                </div>
			<div className="tags">
				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="washroom" tagActive={tag === 'washroom' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="room" tagActive={tag === 'room' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="kitchen" tagActive={tag === 'kitchen' ? true : false} handleSetTag={setTag} /> 
			</div>
             <SimpleReactLightbox>

			<SRLWrapper options={options}>
				<div className="gallery-container ">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
            </SimpleReactLightbox>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};



