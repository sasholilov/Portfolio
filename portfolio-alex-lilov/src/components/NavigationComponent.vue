<template>
  <div class="container" id="container">
    <div class="navigation">
      <div class="navigation-items">
        <a href="#container"
          ><p class="avatar-nav">
            <img class="avatar-img" src="../assets/img/profile.png" /></p
        ></a>
        <div class="item1" data-text="About">
          <a href="#about-me"
            ><p class="about-nav"><img src="../assets/img/about-icon.png" /></p
          ></a>
        </div>
        <div class="item2" data-text="Education">
          <a href="#my-education"
            ><p class="education-nav">
              <img src="../assets/img/education-icon.png" /></p
          ></a>
        </div>
        <div class="item3" data-text="Projects">
          <a href="#my-projects"
            ><p class="projects-nav">
              <img src="../assets/img/projects-icon.png" /></p
          ></a>
        </div>
        <div class="item4" data-text="Contact">
          <a href="#contact"
            ><p class="contact-nav">
              <img src="../assets/img/contact-icon.png" /></p
          ></a>
        </div>
        <div class="item5" data-text="LinkedIn">
          <a
            href="https://www.linkedin.com/in/aleksandar-lilov-95821068/"
            target="_blank"
            ><p class="contact-nav"><img src="../assets/img/linkedin.png" /></p
          ></a>
        </div>
        <div class="item6" data-text="GitHub">
          <a href="https://github.com/sasholilov" target="_blank"
            ><p class="contact-nav"><img src="../assets/img/github.png" /></p
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  flex: 1;
  /*border-right: 4px solid #ff517e;*/
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
  text-align: center;
  position: fixed;
  width: 110px;
  top: 0;
  bottom: 0;
  left: 0;
}

.navigation-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navigation-items .avatar-img {
  max-width: 62px;
  cursor: pointer;
}

.navigation-items img {
  max-width: 32px;
  margin-top: 0;
}

.item1 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item1::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: #ff517e;
  right: 50%;
  transform: translate(50%, 0);
}

.item1:hover::before {
  bottom: 0;
}

.item1::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.item2 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item2::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: #556d91;
  right: 50%;
  transform: translate(50%, 0);
}

.item2:hover::before {
  bottom: 0;
}

.item2::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.item3 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item3::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: #00c8da;
  right: 50%;
  transform: translate(50%, 0);
}

.item3:hover::before {
  bottom: 0;
}

.item3::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.item4 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item4::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: #ffc455;
  right: 50%;
  transform: translate(50%, 0);
}

.item4:hover::before {
  bottom: 0;
}

.item4::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.item5 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item5::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: #0078d4;
  right: 50%;
  transform: translate(50%, 0);
}

.item5:hover::before {
  bottom: 0;
}

.item5::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}

.item6 {
  position: relative;
  overflow: hidden;
  font-size: 12px;
}

.item6::before {
  position: absolute;
  content: attr(data-text);
  bottom: -100%;
  transition: bottom 0.4s;
  color: black;
  right: 50%;
  transform: translate(50%, 0);
}

.item6:hover::before {
  bottom: 0;
}

.item6::after {
  position: absolute;
  content: " ";
  background-color: #e4e4e4;
  height: 1px;
  width: 80%;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 0);
}
</style>
