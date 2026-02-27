const loadLessons = ()=>{
  fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
  .then(res => res.json())//promise of json data
  .then(json => displayLessons(json.data));
};


const displayLessons = (lessons) =>{
    /**
     * get the container and empty
     * get into every lessons
     * create element
     * append into container
     */
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML="";
    for(let lesson of lessons){
        console.log(lesson);
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML=`<button href="" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson-${lesson.level_no}</button>
        `;

        levelContainer.append(btnDiv);
    }
}

loadLessons();
