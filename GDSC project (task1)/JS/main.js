// API updates 

const section = document.getElementsByClassName("jobs-card")

fetch("https://gdsc-job-app.herokuapp.com/api/jobs?page=1").then(function(response) {
    return(response.json());
}).then(function(response) {
    updateUISuccess(response);
}).catch(function() {
    updateUIFailure();
});
false;



// job_prototype

class job {
    constructor(
    company_logo,
    title,
    company_name,
    location,
    type,
    created_at,
    ) {
    this.company_logo = company_logo;
    this.title = title;
    this.company_name = company_name;
    this.location = location;
    this.type = type;
    this.created_at = created_at;
    }
    
}



const softwareEngineer = new job(
    "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
    "Software Engineer",
    "Google",
    "USA",
    1,
    "2022-10-22T19:54:02.995021+00:00",
);

const job_2 = new job(
    "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
    "Software Engineer",
    "Google",
    "USA",
    1,
    "2022-10-22T19:54:02.995021+00:00",
);


const jobList =  [
    "softwareEngineer","job_2"
] 


for (let index = 0; index < array.length; index++) {
	var element = array[index];
    if( index === 6 ){
        break;
    }
}

// consolg.log(jobList)


// jobs
// ____________

    // job-1

// const jobCard_1 = {
//     company_logo : "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
//     title : "Software Engineer",
//     company_name : "Google",
//     location : USA,
//     type : 1,
//     created_at :  "2022-10-22T19:54:02.995021+00:00",
// };

    // job-2

    
    // const jobCard_2 = {
    //     company_logo : "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
    //     title : "Software Engineer",
    //     company_name : "Google",
    //     location : USA,
    //     type : 1,
    //     created_at :  "2022-10-22T19:54:02.995021+00:00",
    // };
    // _____________






// 1 logo
const brandImage = document.querySelector(".brand")
brandImage.querySelector("img")
brandImage.img.src = `${softwareEngineer.company_logo}`

// 2 name

const companyName = document.querySelector(".data2")
companyName.innerHTML = `${softwareEngineer.company_name}`

// 3 publish date

const publishDate = document.querySelector(".Published")
publishDate.innerHTML = `${softwareEngineer.created_at}`

// 4 title

const jobTilte = document.querySelector(".data1")
jobTilte.innerHTML = `${softwareEngineer.title}`

// 5 type

const jobType = document.querySelector(".data4")
jobType.innerHTML = `${softwareEngineer.type}`

// 6 location

const jobLocation = document.querySelector(".data3")
jobLocation.innerHTML = `${softwareEngineer.location}`

// job list (loop)


// const jobList = document.querySelector("#1 .job-card") 



