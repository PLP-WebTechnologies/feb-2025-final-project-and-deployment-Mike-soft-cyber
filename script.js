const home = document.querySelector(".home");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const mind = document.querySelector(".mind");
const nut = document.querySelector(".nut");
const ed = document.querySelector(".ed");
const pro = document.querySelector(".pro");

if(link1) {
  link1.addEventListener("click", (e) => {
    e.preventDefault();
    home.innerHTML = 
    `
     <h1>Blogs</h1>
    <div class="all">
    <div class="container">
        <div class="post2">
            <a href="https://nutritionfacts.org/blog/treating-fatty-liver-disease-with-diet/"><img src="https://nutritionfacts.org/app/uploads/2025/05/2-1-1200x675.jpg" class="two" alt=""></a>
            <p>Nutrition . May 6, 2025</p>
            <a href="https://nutritionfacts.org/blog/treating-fatty-liver-disease-with-diet/" id="link2"><h1>Treating Fatty Liver Disease with Diet</h1></a>
            <p class="p2">What are the three sources of liver fat in fatty liver disease, and how can we get rid of it?</p>
        </div>
        <div class="post2">
            <a href="https://www.edutopia.org/article/bounce-back-lesson-flop"><img src="https://wpvip.edutopia.org/wp-content/uploads/2025/05/hero_blog_Curriculum-Planning_Instructional-Coaching_illustration_ispot_a800ir1333_Alex-Nabaum.jpg?w=1400&quality=85" class="two" alt=""></a>
            <p>Education . May 5, 2025</p>
            <a href="https://www.edutopia.org/article/bounce-back-lesson-flop" id="link3"><h1>What is Mindfulness?</h1></a>
            <p class="p3">Information and resources for parents and teachers of primary and secondary education. Articles and videos discuss the latest evidence-based teaching strategies and give advice on how to engage students at home and in the classroom..</p>
        </div>
        <div class="post2">
            <a href="https://aliabdaal.com/habits/how-to-stop-procrastinating/"><img src="https://aliabdaal.com/wp-content/uploads/2020/10/How-To-Stop-Procrastinating-ali-abdaal.jpg" class="two" alt=""></a>
            <p>Productivity . May 5, 2025</p>
            <a href="https://aliabdaal.com/habits/how-to-stop-procrastinating/" id="link4"><h1>How to Bounce Back from a Lesson Flop</h1></a>
            <p class="p4">Regardless of how many productivity books we’ve bought (and haven’t read) or how many motivational videos we’ve watched (and never acted upon), we all struggle at some point during our lives with the productivity plague of the modern era – procrastination.</p>
        </div>
        </div>
<!-- paragraph 2 -->
        <div class="container">
            <div class="post2">
                <a href="https://www.mindful.org/a-meditation-for-clarifying-your-motivations-for-using-tech/"><img src="https://www.mindful.org/content/uploads/12MM_Jay-Vidyarthi_A-Meditation-for-Clarifying-Your-Motivations-for-Using-Tech-1536x960.jpeg" class="two" alt=""></a>
                <p>Mindfulness . April 30, 2025</p>
                <a href="https://www.mindful.org/a-meditation-for-clarifying-your-motivations-for-using-tech/" id="link2"><h1>A Meditation for Clarifying Your Motivations for Using Tech</h1></a>
                <p class="p2">Your motivations for using tech can also point the way toward developing a healthier relationship with it.</p>
            </div>
            <div class="post2">
                <a href="https://nutritionfacts.org/blog/gaming-the-system-cardiologists-heart-stents-and-upcoding/"><img src="https://nutritionfacts.org/app/uploads/2025/04/9-1200x675.jpg" class="two" alt=""></a>
                <p>Nutrition . April 29, 2025</p>
                <a href="https://nutritionfacts.org/blog/gaming-the-system-cardiologists-heart-stents-and-upcoding/" id="link3"><h1>Gaming the System: Cardiologists, Heart Stents, and Upcoding </h1></a>
                <p class="p3">Cardiologists can criminally game the system by telling patients they have much more serious, unstable...</p>
            </div>
            <div class="post2">
                <a href="https://lifehacker.com/work/when-to-bring-a-problem-to-hr-and-when-not-to"><img src="https://lifehacker.com/imagery/articles/01JS2E03QEW6BNE674AS5VVA4T/hero-image.fill.size_453x255.v1744914047.png" class="two" alt=""></a>
                <p>Productivity . April 17, 2025</p>
                <a href="https://lifehacker.com/work/when-to-bring-a-problem-to-hr-and-when-not-to" id="link4"><h1>When to Bring a Problem to HR (and When Not To)</h1></a>
                <p class="p4">There are specific scenarios where your interests and the company’s interests coincide.</p>
            </div>
            </div>

            <!-- paragraph 3 -->
        <div class="container">
            <div class="post2">
                <a href="https://www.mindful.org/mindful-racial-healing-with-tovi-scruggs-hussein/ "><img src="https://www.mindful.org/content/uploads/Mindful-Racial-Healing-with-Tovi-Scruggs-Hussein-1536x960.jpeg" class="two" alt=""></a>
                <p>Mindfulness . February 19, 2025</p>
                <a href="https://www.mindful.org/mindful-racial-healing-with-tovi-scruggs-hussein/ " id="link2"><h1>Mindful Racial Healing with Tovi Scruggs-Hussein</h1></a>
                <p class="p2">Mindfulness tools and meditations for exploring race and racism with the love and compassion needed for deep, systemic change.</p>
            </div>
            <div class="post2">
                <a href="https://www.healthstandnutrition.com/is-canola-oil-healthy/"><img src="https://www.healthstandnutrition.com/wp-content/uploads/2011/09/Website-Thumbnail-2-29.png" class="two" alt=""></a>
                <p>Nutrition . May 27, 2024</p>
                <a href="https://www.healthstandnutrition.com/is-canola-oil-healthy/" id="link3"><h1>Debunking Nutrition Myths: Is Canola Oil Healthy?</h1></a>
                <p class="p3">You may have heard people warn about the dangerous “toxic” or “inflammatory” properties of these oils on podcasts, during your internet searches or even sitting around chatting with friends. So when and where did all these safety concerns arise? And is there really anything to be worried about? If you’re wondering if canola oil is healthy, read on to find out the evidence behind its safety and health benefits.</p>
            </div>
            <div class="post2">
                <a href="https://elearningindustry.com/articles"><img src="https://detailed.com/images/elearning-industry.jpg" class="two" alt=""></a>
                <p>Education . January 3, 2025</p>
                <a href="https://elearningindustry.com/articles" id="link4"><h1>eLearning Industry</h1></a>
                <p class="p4">Support community for online teaching professionals who provide remote access to education for people of all levels. Daily articles cover all things relating to online learning, from the latest ideas and teaching concepts to new software options for educators and students.</p>
            </div>
            </div>
            </div>
    `
  });
}
if(link2) {
  link2.addEventListener("click", (e) => {
    e.preventDefault();
   home.innerHTML = 
    `
    <h1>About Us</h1>
    <p>Welcome to Mindfuel, your one-stop solution for all your mental, health, and productivity needs. We are dedicated to providing you with the latest information and resources to help you lead a healthier and more productive life.</p>
    <img src="mindfuel.png" alt="mindfeul logo" width="60%" height="auto" id="mindfuel">
    <h2>Our Story</h2>
    <p>Mindfuel was founded with the mission to empower individuals to take charge of their mental and physical well-being. Our team of experts curates content from various fields including mindfulness, nutrition, education, and productivity to provide you with a holistic approach to self-improvement.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to inspire and educate individuals to cultivate a balanced and fulfilling life. We believe that by sharing knowledge and resources, we can help you make informed decisions about your health and well-being.</p>
    <p></p>
    <ul class="mission">
        <li class="points">Share practical advice for incorporating mindfulness into everyday life</li>
        <li class="points">Provide evidence-based nutrition tips for a healthier lifestyle</li>
        <li class="points">Offer educational resources for teachers and parents</li>
        <li class="points">Share productivity hacks to help you achieve your goals</li>
        <li class="points">Foster a community of like-minded individuals who support each other</li>
    </ul>
    <h2>Our Team</h2>
    <p>Our team consists of experts in various fields including psychology, nutrition, education, and productivity. We are passionate about sharing our knowledge and helping you achieve your goals.</p>
    `
  });
}
if(link3) {
  link3.addEventListener("click", (e) => {
    e.preventDefault();
   home.innerHTML = 
   `
   <div class="contact">

    <div class="con-intro">
    <h1 class="cont-title">Contact Us</h1>
    <h2 class="get">Get in Touch</h2>
    <p class="cont-par">Have a question, suggestion, or just want to say hello? We'd love to hear from you! Fill out the form and we'll get back to you as soon as possible.</p>
    </div>

    <div class="info-container">
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div class="info-text">
            <p class="label">Email</p>
            <p class="value">minfduel@gmail.com</p>
          </div>
        </div>
    
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="info-text">
            <p class="label">Location</p>
            <p class="value">Nairobi, Kenya</p>
          </div>
        </div>
    
        <div class="info-item">
          <i class="fas fa-globe"></i>
          <div class="info-text">
            <p class="label">Social</p>
            <p class="value">
              <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a><br>
              <a href="https://instagram.com/yourhandle" target="_blank">Instagram</a><br>
              <a href="https://facebook.com/yourhandle" target="_blank">Facebook</a>
            </p>
          </div>
        </div>
      </div>
    <form method="post" class="contact-form">
        <label for="name">Your Name</label>
        <input type="text" name="name" class="name-con" placeholder="Your Name" required>
        <label for="email">Your Email</label>
        <input type="email" name="email" class="email-con" placeholder="Your Email" required>
        <label for="message">Your Message</label>
        <textarea name="message" class="message" placeholder="Your Message" required></textarea>
        <button type="submit" class="submit-con">Send Message</button>
    </form>
</div>
   `
  }); 
}