function goToWeb() {
    window.history.pushState({page : 'web'}, '', '/web');
    console.log("go to web function");
    const content = document.getElementById('page-content');
    content.innerHTML =
   ` 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Programming</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
    <div class=" web_container mt-5">
        <div id="page1" class="web_programming_page">
            <h1 class="text-center text-dark font-italic"  style="font-size: 24px;>- Web Programming</h1>
            <h3 class="text-center font-weight-bold" style="font-size: 20px;">Fall 2024</h3>
            <h3 class="text-center font-weight-bold" style="font-size: 20px;">Applied Data Science Department, Some University</h3>
            <h3 class="text-center font-weight-bold" style="font-size: 20px;">Professor Name</h3>
            <h4 class="text-center font-weight-bold" style="font-size: 18px;">Phone: (408) 805-9999, Email: <a href="mailto:name@something.edu" class="text-dark">name@something.edu</a></h4>
            <h4 class="text-center font-weight-bold" style="font-size: 18px;">Office Hours: Monday & Wednesday 9:00pm-9:30pm</h4>
            <hr class="my-4">

            <h3 style="font-size: 20px;">Lecture Handouts</h3>
            <h5 style="font-size: 16px;">*All the handouts (except the first three) are abstracted from the textbook and references listed in the syllabus or downloaded from the textbook author's website.</h5>
            <h4  style="font-size: 18px;">Syllabus</h4>
            <h4  style="font-size: 18px;">Programming Requirements</h4>
            <br>
            <h3 style="font-size: 20px;">Term Project</h3>
            <h5 style="font-size: 16px;">Term Project Requirements</h5>
            <br>
        </div>

        <div id="page2" class="web_programming_page">
            <h3 style="font-size: 20px;">Programming Assignments</h3>
            <h5 style="font-size: 16px;">Programming Assignment #1</h5>
            <h5 style="font-size: 16px;">Programming Assignment #2</h5>
            <h5 style="font-size: 16px;">Programming Assignment #3</h5>
            <h5 style="font-size: 16px;">Programming Assignment #4</h5>
            <h5 style="font-size: 16px;">Programming Assignment #5</h5>
            <h5 style="font-size: 16px;">Programming Assignment #6</h5>
            <h5 style="font-size: 16px;">Programming Assignment #7</h5>
            <h5 style="font-size: 16px;">Programming Assignment #8</h5>
            <h5 style="font-size: 16px;">Programming Assignment #9</h5>
            <h5 style="font-size: 16px;">Programming Assignment #10</h5>
            <br>
            <h3 style="font-size: 20px;">Homework/Bonus Assignments</h3>
            <h5 style="font-size: 16px;">Bonus Assignment #1</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #2</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #3</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #4</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #5</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #6</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #7</h5>
            <h5 style="font-size: 16px;">Bonus Assignment #8</h5>
            <br>
            <h3 style="font-size: 20px;">Examinations</h3>
            <h5 style="font-size: 16px;">Midterm Examination</h5>
            <h5 style="font-size: 16px;">Old Midterm Examination</h5>
            <h5 style="font-size: 16px;">Final Examination</h5>
            <h5 style="font-size: 16px;">Old Final Examination</h5>
            <br>
        </div>

        <div id="page3" class="web_programming_page">
            <h3 style="font-size: 20px;">Password Protected Area</h3>
            <h5 style="font-size: 16px;">Note: Use your last name followed immediately (without a space) by your "first" first name as the login name (all lower cases), and use your student ID (without leading zeros and dashes) as password (NOTE: it may take a few seconds to get the password window.)</h5>
            <h5 style="font-size: 16px;">Lecture Notes, Solutions for Bonus Assignments, and Examinations</h5>
            <h5 style="font-size: 16px;">Check Your Grades</h5>
            <br>
            <h3 style="font-size: 20px;">Grader Information</h3>
            <h5 style="font-size: 16px;">Professor Name. Please send an email to: <a href="mailto:name@something.edu" class="text-dark">name@something.edu</a></h5>
            <h5 style="font-size: 16px;">Grader's Duty</h5>
            <br>
        </div>
      
        <div class="pagination justify-content-center mt-4">
            <button class="btn btn-primary mx-1" onclick="showWebProgram(1)">1</button>
            <button class="btn btn-primary mx-1" onclick="showWebProgram(2)">2</button>
            <button class="btn btn-primary mx-1" onclick="showWebProgram(3)">3</button>
        </div>
    </div>
</body>
` ;
  showWebProgram(1);
 }


function goToMain() {
    window.history.replaceState({page : ''}, '', '');
    console.log("go to main function");
    const content = document.getElementById('page-content');

    content.innerHTML = `
                <h2>BIOGRAPHY</h2>
                <img src="images/some.png" alt="Prof Name" class="bio-image">
                <h4 class="centered-text">
                    <a href="https://www.linkedin.com/in//">Professor Name</a>
                </h4>
                <ul class="bio-details" style=" white-space: normal; /* Allow text to wrap onto the next line */
    word-wrap: break-word">
                    <li>Bio Details</li>
                </ul>
            `;
}


function showWebProgram(pageNumber){
console.log("showWebProgram function");
const webpages = document.querySelectorAll('.web_programming_page');
webpages.forEach((page,index) => {
    page.style.display = (index+1 === pageNumber) ? 'block' : 'none';
});

}

function loadPage(page) {
    if (pages[page]) {
        const content = document.getElementById('page-content');
        console.log("loaded page");
        content.innerHTML = pages[page];
    } else {
        content.innerHTML = '<h2>Page not found</h2><p>The page you requested does not exist.</p>';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    /* const path = window.location.pathname;
    if(path === '/localhost/web'){
        goToWeb();
    } else if ('/localhost')
    {
        goToMain();
    } else {
        goToMain();
    } */
    
        loadPagefromhash();
        

    const content = document.getElementById('page-content');
    const schoolLink = document.getElementById('schoolLink');
    
    schoolLink.addEventListener('mouseenter', () => {
        console.log('Mouse entered the link!');
    });
    
    schoolLink.addEventListener('mouseleave', () => {
        console.log('Mouse left the link!');
    });
    
 
    schoolLink.addEventListener('focus', () => {
        console.log('Link focused!');
        schoolLink.style.backgroundColor = 'black'; 
    });
    
    schoolLink.addEventListener('blur', () => {
        console.log('Link blurred!');
        schoolLink.style.backgroundColor = 'rgb(104, 53, 5)'; 
    });
  
    window.addEventListener('popstate', (event) => {
        if (event.state){
            if(event.state.page==='web'){
              goToWeb();
            }else if ('/localhost')
            {
              goToMain();
            } else {
                goToMain();
            }
        } 
    }); 
 
    
});

function toggleDropdown(categoryId) {
    console.log("drop down working)")
    const dropdown = document.getElementById(categoryId);
    const isVisible = dropdown.style.display === 'block';

    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(d => d.style.display = 'none');

    
    if (!isVisible) {
        dropdown.style.display = 'block';
    }
}

let visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) : 0;
    visitCount += 1;
    localStorage.setItem('visitCount', visitCount);


    document.getElementById('visitCountDisplay').innerText = `This page has been visited ${visitCount} times.`;



document.querySelectorAll('.dropdown-item a').forEach(link => {
    
    link.addEventListener('click', (event) => {
        console.log ("drop down is working!");
        event.preventDefault(); 
        const page = link.getAttribute('data-url'); 
       
    });
});

function navigateTo(hash) {
window.location.hash=hash;
}


function loadPagefromhash(){
   const hash = window.location.hash;
   if (hash === '#web') {
    goToWeb();
   } else {
    goToMain();
   }
}

