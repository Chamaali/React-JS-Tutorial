import React from 'react';
import Listitem from './Listitem';

function Namelist(){

    const nameList=[
        {
            id:1,
            
            name: {
                title: "Mr.",
                first: "Kasun",
                second: "Kalhara",
            },

            email:"Kasun@gmail.com",

            dob:{
                day: 1,
                month: "October",
                year : 1985,
            },
            address: {
                town: "Panadura",
                city:"Kaluthara",
                country: "Sri Lanka",
            },
            picture: {
                medium:'https://www.cinemascomics.com/wp-content/uploads/2020/12/batman-de-ben-affleck.jpg',
            },

    },

    {
        id:2,

        name: {
            title: "Mr.",
            first: "Tharindu",
            second: "Damsara",
        },

        email:"tharindu@gmail.com",

        dob:{
            day: 2,
            month: "October",
            year : 1992,
        },
        address: {
            town: "Gampola",
            city:"Kandy",
            country: "Sri Lanka",
        },
        picture: {
            medium: "https://tune.lk/storage/app/public/img/artist/1585300095.jpg",
        },

    },

    {
        id:3,
        
        name: {
            title: "Miss.",
            first: "Kanchana",
            second: "Anuradi",
        },

        email:"kanchana@gmail.com",

        dob:{
            day: 4,
            month: "October",
            year : 1995,
        },
        address: {
            town: "Medawachchiya",
            city:"Anuradapura",
            country: "Sri lanka",
        },
        picture: {
            medium: "https://tse3.mm.bing.net/th?id=OIP.qYJe8yhK-VpdNZzCgMpKkwAAAA&pid=Api&P=0&w=300&h=300",
        },

    },
    ];


    const nameListComponent=()=>{

        
            return nameList.map((aName) => {
                return(
                    <Listitem 
                    key={aName.id}
                    name={`${aName.name.title} ${aName.name.first} ${aName.name.second}`} 
                    address={`${aName.address.town}, ${aName.address.city}, ${aName.address.country}`} 
                    email={aName.email}
                    dob={aName.dob.day+", "+aName.dob.month+", "+aName.dob.year}
                    picture={aName.picture}
                    />

                );
            });

    };
    


    return(
            <React.Fragment>
                <div className="container mt-4">
                    <h3>List Of Singers</h3>
                    <hr/>
                    <ul className='list-group'>
                        {nameListComponent()}
                    </ul>
                </div>
            </React.Fragment>
    );
};           
export default Namelist;
