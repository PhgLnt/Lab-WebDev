import React from 'react'

export default function CV() {
    return (
    <React.Fragment>
      <div class="menu">
          <ul class="navbar">
              <li>
                <div class="navbar-link">
                  <span class="btn-dropdown">
                    <i id="icon" class="bi-person-heart"></i>
                    <h5>Profile</h5>
                  </span>
                  <ul>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Abilities</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>

    <div class="row">
       <div class = "col-6 ">
           <h1 class ="text-center">Profile</h1>
    
           <div class="row">
               <div class="col-4">
               <h3>About me</h3>
               <p>
                   I am a lovely cat. I have passion in IT and I want to become a data analyst.
               </p>
               </div>
               <div class="col-4">
                   <img src="assets\cat.jpg" alt="Phương" width="70%"/>
               </div>
               <div class="col-4">
                   <h3>Detail</h3>
                   <h5>Name:</h5>
                   <p>Tran Van Boss</p>
                   <h5>Age:</h5>
                   <p>5 years</p>
                   <h5>Location:</h5>
                   <p>UIT, VNU-HCM</p>
               </div>
           </div>
           
       </div>

       <div class="col-6 " >
           <h1 class ="text-center">Experience</h1>
  
           <h3>Education</h3>
           <div class="row">
               <div class="col-4">
                   <b>UIT,VNU-HCM</b>
                   <p>Apr 2019 - June 2024</p>
               </div>
               <div class="col-4">
                   <b>Information System</b>
                   <p>The education blah blah blah</p>
               </div>
           </div>
 
           <h3>Working Experience</h3>
           <div class="row">
               <div class="col-4">
                   <b>Facebook | Fresher Engineer</b>
                   <p>Sep 2021 - current</p>
               </div>
               <div class="col-4">
                   <b>Partime - Fresher Web Developer</b>
                   <p>Working as a Fresher Developer blah blah blah</p>
               </div>
           </div>
       </div>
   </div>
   <div class="row" >
       <h1 >Abilities</h1>

       <div class="row abilities">
           
           <h3>Skills</h3>
             <div class="col col-forth name">
                 <p>HTML/CSS</p>
                 {"\n"}
                 <p>SQL</p>
                 {"\n"}
                 <p>JQuery</p>
                 {"\n"}
                 <p>Javascript</p>
             </div>
             <div class="col col-forth">
               <div class="skill-cell cell-1">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
               </div>
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
               {"\n"}
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
               
               

             </div>

             <div class="col col-forth name">
                 <p>Object Orientated Programing</p>
                 
                 <p>SEO</p>
                 {"\n"}
                 <p>React</p>
             
             </div>
             <div class="col col-forth">
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
               
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
               
               <div class="skill-cell">
                   <i class="bi-square"></i>
                   <i class="bi-square"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
                   <i class="bi-square no-skill"></i>
               </div>
             </div>
         </div>
       <div class="see-prof">
           <h6 class="italic text-center">See my profile on github</h6>
       </div>
       <div class="text-center btn">
           <button class="btn-see-prof"><a href="https://github.com/PhgLnt" > See project on Github</a></button>
           
       </div>
      
       <h3>Languages</h3>

        <div class="row abilities">
                <div class="col col-forth name">
                    <p>Vietnamese (Native)</p>
                    {"\n"}
                    <p>English (IELTS 6.5)</p>
                </div>
                <div class="col col-forth">
                    <div class="skill-cell cell-1">
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square no-skill"></i>
                        <i class="bi-square no-skill"></i>
                    </div>
                    <div class="skill-cell">
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                    </div>
                </div>

                <div class="col col-forth name">
                    <p>Cat (Mother Tongue) </p>
                    {"\n"}
                    <p>Dog (My friend)</p>
                </div>
                <div class="col col-forth ">
                    <div class="skill-cell">
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square no-skill"></i>
                        <i class="bi-square no-skill"></i>
                        <i class="bi-square no-skill"></i>
                    </div>
       
                    <div class="skill-cell">
                        <i class="bi-square"></i>
                        <i class="bi-square"></i>
                        <i class="bi-square no-skill"></i>
                        <i class="bi-square no-skill"></i>
                        <i class="bi-square no-skill"></i>
                    </div>
                </div>
         </div>
     </div>

   </React.Fragment>

)
}

