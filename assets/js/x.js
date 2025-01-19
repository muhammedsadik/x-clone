const twits = [];



let contentArea = document.querySelector(".content-area");

const sendTwitBtn = document.querySelector(".send-twit-btn");
sendTwitBtn.addEventListener("click", sendTwit);





function sendTwit() {
  let formTwitInput = document.querySelector(".form-input");
  const date = getTime();

  let newId;

  twits[twits.length - 1]
    ? newId = twits[twits.length - 1].id + 1
    : newId = 1;

  const newTwit = {
    id: newId,
    text: formTwitInput.value,
    date
  }

  twits.push(newTwit);
  console.log(twits);
  
  formTwitInput.value="";

  render();
}


function getTime() {
  const dateHour = new Date().getHours();
  const dateMinute = new Date().getMinutes();
  return `${dateHour}:${dateMinute}`;
}


function createTwitHtml(id, twitText, twitImgPath, time) {

  return `
      <div data-id="${id}"  class="content-items content-padding">
        <div class="content-items-photo">
          <img src="assets/img/header-avatar.png" alt="profil foto">
        </div>

        <div class="content-items-info">

          <div class="head">

            <a class="content-items-info-user" href="#">

              <span class="content-items-info-user-name">Muhammed Sadık Orak</span>
              <span>@SadıkOrak</span>
              <span class="dot">.</span>
              <span class="time">${time}</span>

            </a>

            <div>
              <a class="content-items-info-dots" href="#">...</a>
            </div>
          </div>

          <div class="info">
            <p>
              ${twitText}
            </p>

            <img src="${twitImgPath}" alt="">

          </div>

          <div class="interaction">

            <span class="comment">
              <i class="far fa-comment">
                <p></p>
              </i>                            
            </span>

            <span class="repeat">
              <i class="fas fa-repeat">
                <p></p>
              </i>               
            </span>

            <span class="heart">
              <i class="far fa-heart">
                <p></p> 
              </i>
            </span>
            
            <span class="signal">
              <i class="fas fa-signal">
                <p></p> 
              </i>
            </span>

            <div class="interaction-item">
              <i class="far fa-bookmark bookmark"></i>
              <i class="fas fa-arrow-up-from-bracket bracket"></i>
            </div>
          </div>

        </div>
      </div>

  `;
}


function bindElements() {

}


function render() {
  contentArea.innerHTML = "";
  let twitHtml;
  for (const twit of [...twits].reverse()) {
    twitHtml += createTwitHtml(twit.id, twit.text, "", twit.date);
  }
  
  contentArea.innerHTML = twitHtml;
  bindElements();
}

render();