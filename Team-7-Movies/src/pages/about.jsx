import Image from "next/image";

import { Content } from "next/font/google";

const Home = () => {
          const members=[
          {
            name:"Anteneh Getnet",
            description:"developer",
            githubUsername:"anteneh83",
            telegramUsername:"yours_2123",
            id:"1"
          },{
            name:"Tsion Getachew",
            description:"developer",
            githubUsername:"Tsiiiarmy",
            telegramUsername:"tsiiiarmy",
            id:"2"
          },{
            name:"Amanuel firew",
            description:"developer",
            githubUsername:"amanuelcm27",
            telegramUsername:"acm2727",
            id:"3"
          },  {name:"Andinet Dereje",
          description:"developer",
          githubUsername:"andinetd",
          telegramUsername:"andinet_dereje",
          id:"4"
        },{
            name:"Anteneh Addisu",
            description:"developer",
            githubUsername:"Antiaastu",
            telegramUsername:"maante",
            id:"5"
          },{
            name:"Ayub sufiane",
            description:"developer",
            githubUsername:"ayubsufian",
            telegramUsername:"ayubsufian",
            id:"6"
          },{
            name:"Ariyam yilma",
            description:"developer",
            githubUsername:"Arox-Y",
            telegramUsername:"ro29x",
            id:"7"
          }
          ]

  return (
    <div className="main-container">
      <div className="container">
        <About></About>
  {members.map(({name,description,id,githubUsername,telegramUsername})=>(
   
      
        <div className="border-box" id={id}>
          <img className="photo" src="profile.svg" alt="phot"></img>
          <div className="content">
            <div className="personal">
                <h2 className="name">{name}</h2>
                <a className="github-link" href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                       <Image src="/github.svg" alt="GitHub Logo" width={20} height={20} />
                </a>
            </div>
            <div className="detail">
              <h6 className="description">{description}</h6>
                <a className="telegram-link" href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer">
                    <Image src="/telegram.svg" alt="Telegram Logo" width={20} height={20} />
                </a>
            </div>
            
          </div>
       
        </div>
        ))}
        <Detail></Detail>
        <Footer></Footer>
    </div>
    </div>
    
  );
}

function About(){
  return(
    <div>
  <h1 className="title">About us</h1>
  
  </div>
  )
}
function Detail(){
  return(
  <div className="project-description">
  The Movie Recommendation System 
  is a web application aimed at 
  providing users with personalized 
  movie recommendations based on their
   preferences. The system will allow users
    to search for movies, view movie details,
     receive recommendations based on selected
      movie genres, and maintain a favorite/watch list.
           </div>
  )
}
function Footer(){
  return(
    <div>
      <p>This project is done by team 7</p>
      <div className="bottom">
        <img src="/copyright.svg" alt="telegram Logo" className="w-5 h-5" id="telegram"/>
        <p className="rights">all rights resesrved</p>
      </div>
    </div>
  )
}

export default Home;
