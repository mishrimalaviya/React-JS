import React, { useState } from 'react'
function Fss() {
    const data = [
        {
            id: 1,
            title: "Chhaava",
            price: 450,
            description: "UA16+",
            category: "Action/Drama/Triller",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxNS43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg",
            rating: 9.3,
            language: "Hindi"
        },
        {
            id: 2,
            title: "Captain America: Brave New World",
            price: 400,
            description: "UA16+",
            category: "Action",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICAzSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg",
            rating: 7.1,
            language: "Hindi/English/Tamil/Telugu"
        },
        {
            id: 3,
            title: "Umbarro",
            price: 250,
            description: "UA13+",
            category: "Comedy/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAzLjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00420660-nvvrhdyfnf-portrait.jpg",
            rating: 9.1,
            language: "Gujarati"
        },
        {
            id: 4,
            title: "Faati Ne?",
            price: 350,
            description: "UA16+",
            category: "Comedy/Horror/Mystery",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA5OTIgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00428340-hzwurwyayc-portrait.jpg",
            rating: 9.1,
            language: "Gujarati"
        },
        {
            id: 5,
            title: "Sanam Teri Kasam",
            price: 200,
            description: "U",
            category: "Drama/Romantic/Musical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA0MS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00036895-cmmsqzawtq-portrait.jpg",
            rating: 8.5,
            language: "Hindi"
        },
        {
            id: 6,
            title: "Sky Force",
            price: 300,
            description: "UA13+",
            category: "Action/Thriller/Historical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1NC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00371539-yqjkjctnet-portrait.jpg",
            rating: 8.9,
            language: "Hindi"
        },
        {
            id: 7,
            title: "Deva",
            price: 250,
            description: "UA16+",
            category: "Action/Triller",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxOC45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00374104-qgsmfbnanb-portrait.jpg",
            rating: 7.5,
            language: "Hindi"
        },
        {
            id: 8,
            title: "Badass Ravi Kumar",
            price: 310,
            description: "UA16+",
            category: "Action/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4zLzEwICAyLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343879-fjgrnlwzgx-portrait.jpg",
            rating: 7.3,
            language: "Hindi"
        },
        {
            id: 9,
            title: "Mufasa: The Lion King",
            price: 280,
            description: "U",
            category: "Adventure,Animation,Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA3OC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-hhkrpankjb-portrait.jpg",
            rating: 8.4,
            language: "English/Hindi/Tamil/Telugu"
        },
        {
            id: 10,
            title: "Dilwale Dulhania Le Jayenge",
            price: 200,
            description: "U",
            category: "Classic/Drama/Romantic",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00000652-gryvezndpg-portrait.jpg",
            rating: 9.3,
            language: "Hindi"
        },
        {
            id: 11,
            title: "Moana 2",
            price: 260,
            description: "U",
            category: "Adventure/Animation/Comedy/Fantacy",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAyMi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387901-dapdnkxxpt-portrait.jpg",
            rating: 8.4,
            language: "English/Hindi"
        },
        {
            id: 12,
            title: "Yeh Jawaani Hai Deewani",
            price: 210,
            description: "UA",
            category: "Comedy/Drama/Romantic/Musical",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAzMi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00012104-dlbbxmwbtr-portrait.jpg",
            rating: 9.2,
            language: "Hindi"
        },
        {
            id: 13,
            title: "Kaashi Raaghav",
            price: 180,
            description: "UA16+",
            category: "Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNzc1IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00423687-vzjfnmqblz-portrait.jpg",
            rating: 8,
            language: "Gujarati"
        },
        {
            id: 14,
            title: "Loveyapa",
            price: 160,
            description: "UA16+",
            category: "Romantic/Comedy/Drama",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAzLjlLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00427632-xhmvucrduf-portrait.jpg",
            rating: 7.9,
            language: "Hindi"
        },
        {
            id: 15,
            title: "Jab We Met",
            price: 230,
            description: "U",
            category: "Romantic/Comedy",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS43LzEwICA4LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00000182-mzjrhpwzvb-portrait.jpg",
            rating: 9.7,
            language: "Hindi"
        },
        {
            id: 16,
            title: "Mom Tane Nai Samjay",
            price: 150,
            description: "UA13+",
            category: "Drama/Family",
            image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAxLjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424440-htumtjtrgz-portrait.jpg",
            rating: 8.3,
            language: "Gujarati"
        }


    ]
    var [search, setSearch] = useState("");
    var [sort, setSort] = useState("none")
    var [cat, setCat] = useState("All");

    var filterData = data.filter((el) => {
        var catagoryCon = cat == "All" || el.category.includes(cat);

        var searchCon = el.title.toLowerCase().includes(search.toLowerCase());

        return catagoryCon && searchCon;
    }).sort((a, b) => {
        return sort == "low" ?
            a.rating - b.rating :
            b.rating - a.rating
    })



    return (
        <div >
            <div >
                <div >
                    <h1 >Filters</h1>



                    <div>

                        <p >Catagory</p>
                        <div >

                            <button onClick={() => setCat('All')}>All</button>
                            <button onClick={() => setCat('Drama')}>Drama</button>
                            <button onClick={() => setCat('Comedy')}>Comedy</button>
                            <button onClick={() => setCat('Romantic')}>Romantic</button>
                            <button onClick={() => setCat('Action')}>Action</button>
                            <button onClick={() => setCat('Family')}>Family</button>
                            <button onClick={() => setCat('Thriller')}>Thriller</button>
                            <button onClick={() => setCat('Animation')}>Animation</button>
                            <button onClick={() => setCat('Classic')}>Classic</button>
                            <button onClick={() => setCat('Historical')}>Historical</button>
                            <button onClick={() => setCat('Anime')}>Anime</button>
                            <button onClick={() => setCat('Fantasy')}>Fantasy</button>
                            <button onClick={() => setCat('Drama')}>Horror</button>
                            <button onClick={() => setCat('Musical')}>Musical</button>
                            <button onClick={() => setCat('Adventure')}>Adventure</button>
                            <button onClick={() => setCat('Mystery')}>Mystery</button>

                        </div>
                    </div>
                </div>
                <div >
                    <div >
                        <i className="fa-solid fa-magnifying-glass "></i>
                        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search for Movies...' name="" id="" />

                        <select name="" id="" className='border-1 h-[35px] w-[18%] cursor-pointer absolute right-[1%] ' onChange={(e) => setSort(e.target.value)}>
                            <option value="">Sort by</option>
                            <option value="low">Low to High</option>
                            <option value="high">High to Low</option>
                        </select>
                    </div>
                    {/* <div className='h-[75px] mt-[20px] w-[100%]  rounded-[3px] cursor-pointer'>
                    <img src={ii1} alt="" />
                </div> */}
                    <div >
                        {
                            filterData.length > 0 ?
                                filterData.map((el, i) => {
                                    return <>
                                        <div fkey={i}>
                                            <div >
                                                <img src={el.image} alt="Image"  />
                                            </div>
                                            <div >
                                                <h1>{el.title}</h1>
                                                <p >{el.language}</p>
                                                <p >{el.category}</p>
                                            </div>
                                        </div>
                                    </>
                                }) :
                                (
                                    <p  >No movies found</p>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fss