<template>
  <div class="container">
          <div class="contact-box">
              <div class="left"></div>
              <div class="right">
                  <form action="https://formspree.io/f/mqkoarve" method="POST">
                      <h2>Contact Us</h2>
                      <input type="text" class="field" name="name" placeholder="Your Name" required>
                      <input type="text" class="field" name="email" placeholder="Your Email" required>
                      <input type="text" class="field" name="contact" placeholder="Phone" required>
                      <textarea placeholder="Message Us" name="text" class="field"></textarea>
                      <button type="submit" class="btn">Send</button>
                  </form>
              </div>
          </div>
      </div>
    </template>
    
    <script>
    export default {
    }
    </script>
    
  <style scoped>
  body {
    height: 100vh;
    width: 100%;
    /* background gradient */
    background: #4b4b4b;
    background: linear-gradient(90deg, #c4c4c4 50%, #4b4b4b 50%);
  }
  
  .container {
    margin-top: 60px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 25px;
  }
  
  .container:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    filter: blur(1000px);
    z-index: -1;
  }
  
  .contact-box {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border-radius: 25px;
    transition: .4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  }
  
  .contact-box:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
  }
  
  .left {
    background: url(https://i.postimg.cc/bJT891wL/pexels-ivan-samkov-8951603.jpg) no-repeat center;
    background-size: cover;
    height: 100%;
    border-radius: 25px;
  }
  
  .right {
    padding: 25px 40px;
  }
  
  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    color: #9EA1D4;
  }
  
  h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: #EB455F;
  }
  
  .field {
    width: 100%;
    margin-bottom: 22px;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    background-color: whitesmoke;
    outline: none;
    padding: 0.7em;
    transition: .4s ease-in-out;
    transition: .3s;
  }
  
  .field:hover {
    box-shadow: 6px 6px 0px #969696,
               -3px -3px 10px #ffffff;
  }
  
  .field:active {
    transition: .2s;
    transform: translateX(0em) translateY(0em);
    box-shadow: none;
  }
  
  .field:focus {
    background: #ffffff;
    box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  }
  
  textarea {
    min-height: 150px;
  }
  
  .btn {
    display: inline-block;
    background: #2B3467;
    width: 50%;
    margin-bottom: 20px;
    color: #fff;
    padding: 0.7rem 1.3rem;
    border-radius: 0.5rem;
    margin-right: 1rem;
    box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.192);
    transition: background 0.5s ease-out;
  }
  
  .btn:hover {
    box-shadow: 6px 6px 0px #969696,
      -3px -3px 10px #ffffff;
    transform: translateX(-0.5em) translateY(-0.5em);
  }
  
  .btn:active {
    transition: .2s;
    transform: translateX(0em) translateY(0em);
    box-shadow: none;
  }
  
  .field:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
  }
  
  /* MEDIA QUERY */
  @media screen and (max-width: 880px) {
    .contact-box {
      grid-template-columns: 1fr;
    }
  
    .left {
      height: 200px;
    }
  }
  </style>